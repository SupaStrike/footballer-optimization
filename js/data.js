/* =====================================================
   data.js
   All advice content lives here, separate from the logic.
   To change what the tool says, edit this file only.
   ===================================================== */

/* ---------- 1. AGE BANDS (safety rules for strength work) ---------- */
const AGE_BANDS = {
  "12-14": {
    sets: "2 sets of 8-10 reps",
    note: "Bodyweight only. Focus on good technique, not on how many reps you can do."
  },
  "15-17": {
    sets: "3 sets of 8-12 reps",
    note: "Bodyweight plus light resistance bands. Only add weights with a coach watching."
  },
  "18-20": {
    sets: "3 sets of 8-12 reps",
    note: "Add resistance gradually. Keep your technique strong before adding more weight."
  }
};

/* ---------- 2. WEEKLY TEMPLATES (days depend on fitness level) ---------- */
const WEEK_TEMPLATES = {
  beginner: [
    { day: "Monday", type: "endurance" },
    { day: "Wednesday", type: "strength" },
    { day: "Saturday", type: "speed" }
  ],
  intermediate: [
    { day: "Monday", type: "strength" },
    { day: "Tuesday", type: "endurance" },
    { day: "Thursday", type: "speed" },
    { day: "Saturday", type: "agility" }
  ],
  advanced: [
    { day: "Monday", type: "strength" },
    { day: "Tuesday", type: "speed" },
    { day: "Wednesday", type: "agility" },
    { day: "Friday", type: "endurance" },
    { day: "Saturday", type: "recovery" }
  ]
};

/* ---------- 3. SESSIONS THAT ARE THE SAME FOR EVERY POSITION ---------- */
const SHARED_SESSIONS = {
  recovery: {
    title: "Recovery",
    focus: "Help your body repair and adapt",
    exercises: [
      { name: "Easy walk or light jog", detail: "10-15 minutes at a pace where you can chat." },
      { name: "Leg stretches", detail: "Hamstrings, quads, calves and hip flexors. Hold each for 30 seconds." },
      { name: "Mobility moves", detail: "Leg swings and hip circles, 10 each side." }
    ]
  }
};

/* ---------- 4. HYDRATION (amounts depend on body weight) ---------- */
const HYDRATION = {
  bands: [
    { maxKg: 40, ml: 150, label: "under 40 kg" },
    { maxKg: 999, ml: 250, label: "40 kg or more" }
  ],
  general: [
    "Check your urine colour before training. Pale yellow means you are well hydrated. Dark yellow or orange means you need to drink more.",
    "Start drinking early. Do not wait until you feel thirsty, because young players often start sessions already short of fluid.",
    "After training, keep drinking steadily for the next hour."
  ],
  hotWeather: "In hot or humid weather, drink a little more, take extra water breaks and rest in the shade when you can.",
  source: "Add your hydration source here (check it first)"
};

/* ---------- 5. POSITION DATA ---------- */
const POSITION_DATA = {

  "full-back": {
    label: "Full-back",

    sessions: {
      speed: {
        title: "Speed",
        focus: "Explosive runs up and down the touchline",
        exercises: [
          { name: "Acceleration sprints", detail: "6 x 20m from a standing start. Walk back to recover." },
          { name: "Flying sprints", detail: "4 x 30m, building to top speed. Rest 90 seconds." },
          { name: "Backpedal and sprint", detail: "5 x (15m backwards, turn, 15m sprint forwards)." },
          { name: "Overlap runs", detail: "Jog 10m, then sprint 30m along the touchline. 6 reps." }
        ]
      },

      endurance: {
        title: "Endurance",
        focus: "Repeated hard running for the whole match",
        exercises: [
          { name: "Interval runs", detail: "6 x 1 minute hard running, 1 minute walking between." },
          { name: "Shuttle runs", detail: "20m out and back 4 times without stopping. Rest 60 seconds. Repeat 5 times." },
          { name: "Easy base jog", detail: "15-20 minutes at a comfortable pace." }
        ]
      },

      strength: {
        title: "Strength",
        focus: "Strong legs and core for tackling and changing direction",
        exercises: [
          { name: "Squats", detail: "Feet shoulder-width apart. Keep your chest up." },
          { name: "Walking lunges", detail: "Step forward and keep your front knee over your ankle." },
          { name: "Single-leg calf raises", detail: "Hold a wall for balance. Lift slowly." },
          { name: "Plank", detail: "Hold a straight line from head to heels." }
        ]
      },

      agility: {
        title: "Agility",
        focus: "Quick direction changes and 1v1 defending",
        exercises: [
          { name: "Side-shuffle cones", detail: "5 cones, 2m apart. Shuffle through facing forward. 4 rounds." },
          { name: "Zig-zag runs", detail: "Run a zig-zag through 6 cones as fast as you can. 4 rounds." },
          { name: "Jockeying drill", detail: "A partner dribbles at you. Back up on your toes for 30 seconds. 4 rounds." }
        ]
      }
    },

    hydrationNote: "Full-backs cover a lot of ground up and down the touchline, so drink at every break in play, such as throw-ins and goal kicks.",

    diet: {
      focus: "Lots of running means you need plenty of carbohydrate for energy.",
      meals: [
        { when: "Day before a match", ideas: "Pasta, rice or potatoes with a protein such as chicken, eggs, fish or lentils, plus vegetables." },
        { when: "2-3 hours before kick-off", ideas: "A balanced meal, such as rice with chicken and vegetables, or a sandwich with fruit. Keep it low in grease." },
        { when: "Within an hour after training or a match", ideas: "Protein and carbohydrate, such as milk and a banana, eggs on toast, or rice with dal or chicken." },
        { when: "Every day", ideas: "Three regular meals with fruit and vegetables. Do not skip breakfast." }
      ],
      tips: [
        "You are still growing, so eat regular meals. Do not cut food to lose weight.",
        "Limit fizzy drinks, sweets and fried food, especially before a match."
      ],
      source: "Add your diet source here (check it first)"
    },

    injury: {
      risks: [
        "Hamstring strains from repeated sprinting",
        "Ankle sprains when tackling and changing direction",
        "Groin pain from sudden changes of direction and stretching for the ball"
      ],
      warmup: [
        "5 minutes of easy jogging",
        "Leg swings forwards and sideways, 10 each leg",
        "Walking lunges with a twist, 8 each side",
        "High knees and heel flicks, 2 x 15m",
        "3 gradual sprints, building up from 50% to 80% effort"
      ],
      prevention: [
        "Do a proper warm-up before every session, at least 10 minutes.",
        "Do balance work such as standing on one leg for 30 seconds on each side.",
        "Include hamstring strengthening, such as slow bridges, every week.",
        "Stretch your legs after training while your muscles are warm.",
        "If something hurts sharply, stop, rest and tell your coach. Do not play through pain."
      ],
      source: "Add your injury prevention source here (check it first)"
    }
  }

};