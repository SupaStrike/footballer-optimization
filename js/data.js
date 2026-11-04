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

/* ---------- 4. POSITION DATA ---------- */
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
    }
  }

};