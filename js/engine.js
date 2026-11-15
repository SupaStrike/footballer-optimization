/* =====================================================
   engine.js
   The logic: takes a player's details and picks the
   right advice from data.js. Does not touch the page.
   ===================================================== */

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

/* ---------- 2. HYDRATION BAND ---------- */
// Finds which weight band a player falls into (see HYDRATION.bands).
// Returns the whole band object, or null if the weight is not valid.
function getHydrationBand(weightKg) {
  const w = Number(weightKg);
  if (!(w > 0)) return null;
  for (const band of HYDRATION.bands) {
    if (w < band.maxKg) return band;
  }
  return null;
}

/* ---------- 3. FIND ONE SESSION ---------- */
// Looks up a session by type, e.g. getSession("striker", "speed").
// Recovery is shared by all positions; the others belong to the position.
// Returns null if nothing matches.
function getSession(position, type) {
  if (SHARED_SESSIONS[type]) return SHARED_SESSIONS[type];
  const pos = POSITION_DATA[position];
  if (!pos) return null;
  return pos.sessions[type] || null;
}

/* ---------- 4. BUILD THE WEEKLY PLAN ---------- */
// Combines position + fitness level + age into a week of sessions.
// Strength sessions also get the sets and safety note for the player's age.
// Returns null if any input is not valid.
function buildWeeklyPlan(position, fitness, age) {
  const template = WEEK_TEMPLATES[fitness];
  const ageBand = getAgeBand(age);
  const pos = POSITION_DATA[position];

  if (!template || !ageBand || !pos) return null;

  const rules = AGE_BANDS[ageBand];

  const days = template.map(function (slot) {
    const session = getSession(position, slot.type);
    if (!session) return null;

    const entry = {
      day: slot.day,
      type: slot.type,
      title: session.title,
      focus: session.focus,
      exercises: session.exercises
    };

    if (slot.type === "strength") {
      entry.sets = rules.sets;
      entry.ageNote = rules.note;
    }
    return entry;
  }).filter(Boolean);

  return {
    position: position,
    positionLabel: pos.label,
    fitness: fitness,
    ageBand: ageBand,
    days: days
  };
}

/* ---------- 5. BUILD THE HYDRATION ADVICE ---------- */
// The amount depends on body weight; the extra note depends on position.
// Returns null if the position or weight is not valid.
function buildHydration(position, weightKg) {
  const pos = POSITION_DATA[position];
  const band = getHydrationBand(weightKg);
  if (!pos || !band) return null;

  return {
    amountMl: band.ml,
    everyMinutes: 20,
    weightGroup: band.label,
    positionNote: pos.hydrationNote,
    general: HYDRATION.general,
    hotWeather: HYDRATION.hotWeather,
    source: HYDRATION.source
  };
}

/* ---------- 6. BUILD THE DIET ADVICE ---------- */
// Shared meals and tips for everyone, plus a focus line for the position.
// Returns null if the position is not valid.
function buildDiet(position) {
  const pos = POSITION_DATA[position];
  if (!pos) return null;

  return {
    focus: pos.dietFocus,
    meals: DIET_SHARED.meals,
    tips: DIET_SHARED.tips,
    source: DIET_SHARED.source
  };
}

/* ---------- 7. BUILD THE INJURY PREVENTION ADVICE ---------- */
// Shared warm-up and habits for everyone, plus the injury risks for the position.
// Returns null if the position is not valid.
function buildInjury(position) {
  const pos = POSITION_DATA[position];
  if (!pos) return null;

  return {
    evidence: INJURY_SHARED.evidence,
    schedule: INJURY_SHARED.schedule,
    risks: pos.injuryRisks,
    parts: INJURY_SHARED.parts,
    prevention: INJURY_SHARED.prevention,
    source: INJURY_SHARED.source
  };
}