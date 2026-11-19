/* =====================================================
   engine.js
   The logic: takes a player's details and picks the
   right advice from data.js. Does not touch the page.
   ===================================================== */

// True only if the object really has this key (stops odd values like "constructor")
function has(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

/* ---------- 1. AGE BAND ---------- */
// Turns an age like 15 into the key "15-17" used in AGE_BANDS.
// Returns null if the age is outside 12-20.
function getAgeBand(age) {
  const a = Math.floor(Number(age));
  if (a >= 12 && a <= 14) return "12-14";
  if (a >= 15 && a <= 17) return "15-17";
  if (a >= 18 && a <= 20) return "18-20";
  return null;
}

/* ---------- 2. FLUID AMOUNT (ml every 20 minutes) ---------- */
// Scales smoothly with body weight, then adjusts for the climate.
// Returns null if the weight or climate is not valid.
function getFluidMl(weightKg, climate) {
  const w = Number(weightKg);
  if (!(w > 0)) return null;

  const key = climate || DEFAULT_CLIMATE;
  if (!has(HYDRATION.climates, key)) return null;

  const raw = HYDRATION.baseMl + HYDRATION.mlPerKg * (w - HYDRATION.baseKg);
  const base = Math.min(HYDRATION.maxMl, Math.max(HYDRATION.minMl, raw));
  const adjusted = Math.min(
    HYDRATION.hotMaxMl,
    Math.max(HYDRATION.minMl, base * HYDRATION.climates[key].factor)
  );
  return Math.round(adjusted / 10) * 10;
}

/* ---------- 3. BMI BAND ---------- */
// Returns "low", "normal" or "high", or null if height or weight is not valid.
function getBmiBand(weightKg, heightCm) {
  const w = Number(weightKg);
  const h = Number(heightCm) / 100;
  if (!(w > 0) || !(h > 0)) return null;
  const bmi = w / (h * h);
  if (bmi < BMI_LIMITS.low) return "low";
  if (bmi >= BMI_LIMITS.high) return "high";
  return "normal";
}

/* ---------- 4. FIND ONE SESSION ---------- */
// Looks up a session by type, e.g. getSession("striker", "speed").
// Recovery is shared by all positions; the others belong to the position.
// Returns null if nothing matches.
function getSession(position, type) {
  if (has(SHARED_SESSIONS, type)) return SHARED_SESSIONS[type];
  if (!has(POSITION_DATA, position)) return null;
  return POSITION_DATA[position].sessions[type] || null;
}

/* ---------- 5. BUILD THE FOUR-WEEK PLAN ---------- */
// Combines position + training days per week (1-7) + age into four weeks.
// "core" days rotate through strength, speed, endurance and agility from
// week to week, so even a 1-day player gets every type over the month.
// Strength sessions also get the sets and safety note for the player's age.
// Returns null if any input is not valid.
function buildWeeklyPlan(position, trainingDays, age) {
  const dayCount = Number(trainingDays);
  const ageBand = getAgeBand(age);

  if (!Number.isInteger(dayCount) || dayCount < 1 || dayCount > 7) return null;
  if (!has(POSITION_DATA, position)) return null;
  const pos = POSITION_DATA[position];
  const template = WEEK_TEMPLATES[dayCount];
  if (!template || !ageBand) return null;

  const rules = AGE_BANDS[ageBand];

  const weeks = WEEK_PHASES.map(function (phase, weekIndex) {
    let coreSlot = 0;

    const days = template.map(function (slot) {
      let type = slot.type;
      if (type === "core") {
        type = CORE_TYPES[(coreSlot + weekIndex) % CORE_TYPES.length];
        coreSlot++;
      }

      const session = getSession(position, type);
      if (!session) return null;

      const entry = {
        day: slot.day,
        type: type,
        title: session.title,
        focus: session.focus,
        exercises: session.exercises
      };

      if (type === "strength") {
        entry.sets = rules.sets;
        entry.ageNote = rules.note;
      }
      return entry;
    }).filter(Boolean);

    return {
      week: phase.week,
      name: phase.name,
      note: phase.note,
      days: days
    };
  });

  return {
    position: position,
    positionLabel: pos.label,
    daysPerWeek: dayCount,
    ageBand: ageBand,
    weeks: weeks,
    source: EXERCISE_SOURCE
  };
}

/* ---------- 6. BUILD THE HYDRATION ADVICE ---------- */
// The amount depends on body weight and climate; the extra note depends on position.
// Returns null if the position, weight or climate is not valid.
function buildHydration(position, weightKg, climate) {
  if (!has(POSITION_DATA, position)) return null;
  const pos = POSITION_DATA[position];

  const key = climate || DEFAULT_CLIMATE;
  const ml = getFluidMl(weightKg, key);
  if (ml === null) return null;

  const limitKg = Math.round(Number(weightKg) * 0.02 * 10) / 10;

  return {
    amountMl: ml,
    everyMinutes: 20,
    weighTip: "Weigh yourself in light clothing before and after training. If you lose more than about " +
      limitKg + " kg, which is 2% of your body weight, you did not drink enough. " +
      "Keep drinking over the next few hours until you are back to your starting weight.",
    positionNote: pos.hydrationNote,
    climateNote: HYDRATION.climates[key].note,
    general: HYDRATION.general,
    source: HYDRATION.source
  };
}

/* ---------- 7. BUILD THE DIET ADVICE ---------- */
// Shared meals for everyone, with food ideas that match what the player eats,
// a focus line for the position, and a note based on BMI (null when normal).
// Returns null if the position or food type is not valid.
function buildDiet(position, weightKg, heightCm, food) {
  if (!has(POSITION_DATA, position)) return null;
  const pos = POSITION_DATA[position];

  const foodKey = food || DEFAULT_FOOD;
  if (!has(DIET_SHARED.foodTips, foodKey)) return null;

  const band = getBmiBand(weightKg, heightCm);
  const bmiNote = (band && BMI_NOTES[band]) ? BMI_NOTES[band] : null;

  const meals = DIET_SHARED.meals.map(function (meal) {
    return {
      when: meal.when,
      ideas: typeof meal.ideas === "string" ? meal.ideas : meal.ideas[foodKey]
    };
  });

  return {
    focus: pos.dietFocus,
    bmiNote: bmiNote,
    meals: meals,
    tips: DIET_SHARED.tips.concat(DIET_SHARED.foodTips[foodKey]),
    source: DIET_SHARED.source
  };
}

/* ---------- 8. BUILD THE INJURY PREVENTION ADVICE ---------- */
// Shared warm-up and habits for everyone, plus the injury risks for the position.
// Returns null if the position is not valid.
function buildInjury(position) {
  if (!has(POSITION_DATA, position)) return null;
  const pos = POSITION_DATA[position];

  return {
    evidence: INJURY_SHARED.evidence,
    schedule: INJURY_SHARED.schedule,
    risks: pos.injuryRisks,
    parts: INJURY_SHARED.parts,
    prevention: INJURY_SHARED.prevention,
    source: INJURY_SHARED.source
  };
}