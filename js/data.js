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

/* ---------- 5. DIET (shared meals, each position adds one focus line) ---------- */
const DIET_SHARED = {
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
};

/* ---------- 6. INJURY PREVENTION (shared warm-up, each position adds its risks) ---------- */
const INJURY_SHARED = {
  evidence: "In controlled trials, teams that used the FIFA 11+ warm-up had roughly 30-46% fewer injuries than teams that used a normal warm-up. It works best when it is done regularly.",
  schedule: "Do this for 15-20 minutes before training, at least 2 times a week, in place of your normal warm-up.",
  parts: [
    {
      title: "Part 1: Running and activation",
      exercises: [
        "Easy jogging, 2-3 minutes",
        "Leg swings forwards and sideways, 10 each leg",
        "Walking lunges with a hip twist, 8 each side",
        "High knees and heel flicks, 2 x 15m"
      ]
    },
    {
      title: "Part 2: Strength, balance and jumping",
      exercises: [
        "Slow hamstring bridges, 10 reps",
        "Single-leg balance, 30 seconds each leg",
        "Squats with your knees over your toes, 10 reps",
        "Small jumps, landing softly with bent knees, 8 reps"
      ]
    },
    {
      title: "Part 3: Fast running and direction changes",
      exercises: [
        "Run 30m at about 70% effort, 3 times",
        "Run, plant one foot and change direction, 3 times each side",
        "3 gradual sprints, building up from 50% to 80% effort"
      ]
    }
  ],
  prevention: [
    "Do the warm-up every session. Consistency matters more than perfection.",
    "Stretch your legs after training while your muscles are warm.",
    "Learn the exercises with your coach first and keep your technique slow and controlled.",
    "If something hurts sharply, stop, rest and tell your coach. Do not play through pain."
  ],
  source: "Patel & Shah (2025), Cureus 17(12): e100463. Systematic review of FIFA 11+ trials."
};

/* ---------- 7. POSITION DATA (only what differs between positions) ---------- */
const POSITION_DATA = {

  "full-back": {
    label: "Full-back",
    hydrationNote: "Full-backs cover a lot of ground up and down the touchline, so drink at every break in play, such as throw-ins and goal kicks.",
    dietFocus: "Lots of running means you need plenty of carbohydrate for energy.",
    injuryRisks: [
      "Hamstring strains from repeated sprinting",
      "Ankle sprains when tackling and changing direction",
      "Groin pain from sudden changes of direction and stretching for the ball"
    ],
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
  },

  "centre-back": {
    label: "Centre-back",
    hydrationNote: "Centre-backs run less than other outfield players but make many short, hard efforts. Drink at every stoppage, especially before and after set pieces.",
    dietFocus: "Strength and power matter most for you, so include protein at every meal along with your carbohydrate.",
    injuryRisks: [
      "Ankle sprains when landing after heading the ball",
      "Hamstring strains when turning to chase a long ball",
      "Knee and shin knocks from physical contact"
    ],
    sessions: {
      speed: {
        title: "Speed",
        focus: "Short, sharp bursts and recovery runs",
        exercises: [
          { name: "Short sprints", detail: "8 x 10m from a standing start. Walk back to recover." },
          { name: "Turn and chase", detail: "Jog forwards, turn on a signal and sprint 20m. 6 reps." },
          { name: "Backpedal to sprint", detail: "5 x (10m backwards, turn, 20m sprint)." }
        ]
      },
      endurance: {
        title: "Endurance",
        focus: "Staying sharp for the whole match",
        exercises: [
          { name: "Interval runs", detail: "5 x 1 minute steady-hard running, 90 seconds walking between." },
          { name: "Shuttle runs", detail: "10m, 20m and 30m out and back. Rest 60 seconds. Repeat 4 times." },
          { name: "Easy base jog", detail: "15 minutes at a comfortable pace." }
        ]
      },
      strength: {
        title: "Strength",
        focus: "Winning headers and tackles",
        exercises: [
          { name: "Squats", detail: "Feet shoulder-width apart. Keep your chest up." },
          { name: "Step-ups", detail: "Use a sturdy step or bench. Drive through your heel." },
          { name: "Glute bridges", detail: "Squeeze at the top for 2 seconds." },
          { name: "Plank and side plank", detail: "Hold 20-30 seconds each side." },
          { name: "Soft-landing jumps", detail: "Jump up and land softly with bent knees. 6 reps." }
        ]
      },
      agility: {
        title: "Agility",
        focus: "Turning quickly and staying balanced",
        exercises: [
          { name: "Side-shuffle and turn", detail: "Shuffle 5m, turn and sprint 10m. 6 reps." },
          { name: "Cone footwork", detail: "Quick feet through 6 cones, then a 10m sprint. 4 rounds." },
          { name: "Header practice", detail: "With a coach, practise timing a jump to meet a thrown ball. 8 reps." }
        ]
      }
    }
  },

  "midfielder": {
    label: "Midfielder",
    hydrationNote: "Midfielders run more than almost anyone on the pitch, so start sessions well hydrated and sip at every break.",
    dietFocus: "You cover the most ground in a match, so carbohydrate is your main fuel. Do not skip meals before training.",
    injuryRisks: [
      "Hamstring strains from long periods of running",
      "Groin pain from lots of passing and turning",
      "Overuse pain in the shins or knees from heavy running loads"
    ],
    sessions: {
      speed: {
        title: "Speed",
        focus: "Quick bursts to get on the ball and support play",
        exercises: [
          { name: "Short bursts", detail: "8 x 15m from a jog. Walk back to recover." },
          { name: "Pass and sprint", detail: "Pass to a partner, sprint 20m to receive it back. 6 reps." },
          { name: "Third-man run", detail: "Jog, then sprint 25m into space on a signal. 5 reps." }
        ]
      },
      endurance: {
        title: "Endurance",
        focus: "Box-to-box running for the whole match",
        exercises: [
          { name: "Long intervals", detail: "5 x 3 minutes steady-hard running, 1 minute walking between." },
          { name: "Shuttle runs", detail: "20m out and back 6 times without stopping. Rest 60 seconds. Repeat 5 times." },
          { name: "Steady run", detail: "20 minutes at a pace where you can still talk." }
        ]
      },
      strength: {
        title: "Strength",
        focus: "A strong base for running, turning and tackling",
        exercises: [
          { name: "Squats", detail: "Feet shoulder-width apart. Keep your chest up." },
          { name: "Reverse lunges", detail: "Step back and keep your front knee over your ankle." },
          { name: "Step-ups", detail: "Use a sturdy step or bench. Drive through your heel." },
          { name: "Dead bug", detail: "Lie on your back and move opposite arm and leg slowly. Keep your back flat." }
        ]
      },
      agility: {
        title: "Agility",
        focus: "Turning quickly and finding space",
        exercises: [
          { name: "Dribble and turn", detail: "Dribble 10m, turn, dribble back. 6 reps." },
          { name: "Cone weave", detail: "Weave through 6 cones with the ball, then pass. 4 rounds." },
          { name: "Check-and-go", detail: "Jog forwards, check back, then sprint away on a signal. 6 reps." }
        ]
      }
    }
  },

  "goalkeeper": {
    label: "Goalkeeper",
    hydrationNote: "Goalkeepers run less than outfield players, but concentration drops quickly when you are short of fluid. Keep a bottle in your goal and drink at every stoppage.",
    dietFocus: "Your work comes in short, explosive bursts, so eat protein and carbohydrate regularly and keep your meals balanced.",
    injuryRisks: [
      "Finger and wrist injuries from catching and punching the ball",
      "Shoulder strain from diving and throwing",
      "Knee and ankle injuries from landing after dives and jumps"
    ],
    sessions: {
      speed: {
        title: "Speed and reactions",
        focus: "Fast first steps and quick reactions",
        exercises: [
          { name: "Short sprints", detail: "8 x 5m from a ready stance. Walk back to recover." },
          { name: "Reaction catches", detail: "A partner throws a ball off a wall for you to catch. 10 reps, 3 rounds." },
          { name: "Sprint to claim", detail: "Start on your line, sprint 10m to claim a cross. 6 reps." },
          { name: "Jump and catch", detail: "Jump to catch a thrown ball at full stretch. 8 reps." }
        ]
      },
      endurance: {
        title: "Endurance",
        focus: "Staying alert and sharp for the whole match",
        exercises: [
          { name: "Easy base jog", detail: "15 minutes at a comfortable pace." },
          { name: "Interval runs", detail: "4 x 1 minute steady running, 90 seconds walking between." },
          { name: "Shuttle runs", detail: "10m out and back for 30 seconds. Rest 60 seconds. Repeat 4 times." }
        ]
      },
      strength: {
        title: "Strength",
        focus: "Strong legs, shoulders and core for diving and jumping",
        exercises: [
          { name: "Squats", detail: "Feet shoulder-width apart. Keep your chest up." },
          { name: "Push-ups", detail: "Use your knees or a wall at first. Keep your body in a straight line." },
          { name: "Plank", detail: "Hold a straight line from head to heels." },
          { name: "Single-leg balance", detail: "30 seconds each leg. Close your eyes once it feels easy." }
        ]
      },
      agility: {
        title: "Agility and handling",
        focus: "Moving across the goal and getting down to the ball",
        exercises: [
          { name: "Goal-width shuffles", detail: "Shuffle side to side across the goal without crossing your feet. 6 rounds." },
          { name: "Cone footwork", detail: "Quick feet through 6 cones, then set and catch a ball. 4 rounds." },
          { name: "Diving practice", detail: "Only on soft grass or a mat, with a coach there. 5 dives each side." }
        ]
      }
    }
  },

  "winger": {
    label: "Winger",
    hydrationNote: "Wingers sprint again and again, so sweat a lot. Drink at every break and finish your bottle before you start the next session.",
    dietFocus: "Repeated sprinting uses a lot of energy, so carbohydrate before training and a protein-and-carbohydrate meal after are both important.",
    injuryRisks: [
      "Hamstring strains from top-speed sprinting",
      "Ankle sprains when dribbling and being tackled",
      "Knee strain from sharp turns and cuts"
    ],
    sessions: {
      speed: {
        title: "Speed",
        focus: "Top speed and repeated sprints down the wing",
        exercises: [
          { name: "Acceleration sprints", detail: "6 x 20m from a standing start. Walk back to recover." },
          { name: "Flying sprints", detail: "5 x 30m, building to top speed. Rest 90 seconds." },
          { name: "Sprint with the ball", detail: "Push the ball 10m ahead and sprint after it. 6 reps." },
          { name: "Repeat sprints", detail: "6 x 20m with 30 seconds rest between. Rest 2 minutes, then repeat once." }
        ]
      },
      endurance: {
        title: "Endurance",
        focus: "Keeping your sprint speed late in the match",
        exercises: [
          { name: "Interval runs", detail: "6 x 1 minute hard running, 1 minute walking between." },
          { name: "Shuttle runs", detail: "20m out and back 4 times without stopping. Rest 60 seconds. Repeat 5 times." },
          { name: "Easy base jog", detail: "15-20 minutes at a comfortable pace." }
        ]
      },
      strength: {
        title: "Strength",
        focus: "Strong legs for sprinting and turning",
        exercises: [
          { name: "Squats", detail: "Feet shoulder-width apart. Keep your chest up." },
          { name: "Reverse lunges", detail: "Step back and keep your front knee over your ankle." },
          { name: "Single-leg calf raises", detail: "Hold a wall for balance. Lift slowly." },
          { name: "Glute bridges", detail: "Squeeze at the top for 2 seconds." }
        ]
      },
      agility: {
        title: "Agility",
        focus: "Beating a defender with quick changes of direction",
        exercises: [
          { name: "Dribble and cut", detail: "Dribble at a cone, cut sharply past it and sprint 10m. 6 reps each side." },
          { name: "Zig-zag runs", detail: "Run a zig-zag through 6 cones as fast as you can. 4 rounds." },
          { name: "1v1 practice", detail: "Take on a partner defender for 10 seconds, then swap. 6 rounds." }
        ]
      }
    }
  },

  "striker": {
    label: "Striker",
    hydrationNote: "Strikers sprint in short bursts and then wait for the ball, so it is easy to forget to drink. Sip at every break in play.",
    dietFocus: "Your explosive finishing needs good energy, so eat carbohydrate before training and include protein after matches to help your muscles recover.",
    injuryRisks: [
      "Hamstring strains from sudden sprints",
      "Ankle sprains when shooting and being challenged",
      "Knee and groin strain from twisting to shoot"
    ],
    sessions: {
      speed: {
        title: "Speed",
        focus: "A sharp first step to get away from defenders",
        exercises: [
          { name: "Short sprints", detail: "8 x 10m from a standing start. Walk back to recover." },
          { name: "Run in behind", detail: "Jog, then sprint 25m onto a pass from a partner. 6 reps." },
          { name: "Sprint and shoot", detail: "Sprint 15m onto a rolled ball and shoot. 6 reps." }
        ]
      },
      endurance: {
        title: "Endurance",
        focus: "Pressing and making repeated runs",
        exercises: [
          { name: "Interval runs", detail: "5 x 1 minute hard running, 90 seconds walking between." },
          { name: "Shuttle runs", detail: "20m out and back 4 times without stopping. Rest 60 seconds. Repeat 4 times." },
          { name: "Easy base jog", detail: "15 minutes at a comfortable pace." }
        ]
      },
      strength: {
        title: "Strength",
        focus: "Power to hold off defenders and shoot",
        exercises: [
          { name: "Squats", detail: "Feet shoulder-width apart. Keep your chest up." },
          { name: "Step-ups", detail: "Use a sturdy step or bench. Drive through your heel." },
          { name: "Glute bridges", detail: "Squeeze at the top for 2 seconds." },
          { name: "Plank and side plank", detail: "Hold 20-30 seconds each side." },
          { name: "Soft-landing jumps", detail: "Jump up and land softly with bent knees. 6 reps." }
        ]
      },
      agility: {
        title: "Agility",
        focus: "Turning quickly and finishing",
        exercises: [
          { name: "Check and turn", detail: "Jog forwards, check back, turn and sprint 10m. 6 reps." },
          { name: "Cone footwork and shot", detail: "Quick feet through 5 cones, then shoot. 6 rounds." },
          { name: "Hold-up turn", detail: "With a partner pressing lightly, receive the ball, turn and pass. 8 reps." }
        ]
      }
    }
  },

  "not-sure": {
    label: "All-rounder",
    hydrationNote: "Since you play in different areas, drink at every break and keep a bottle close during sessions.",
    dietFocus: "A balanced mix of carbohydrate, protein and fruit and vegetables works well while you are working out which position suits you.",
    injuryRisks: [
      "Hamstring strains from sprinting",
      "Ankle sprains from tackling and changing direction",
      "Overuse pain in the shins or knees if you increase training too quickly"
    ],
    sessions: {
      speed: {
        title: "Speed",
        focus: "A quick first step and good top speed",
        exercises: [
          { name: "Acceleration sprints", detail: "6 x 20m from a standing start. Walk back to recover." },
          { name: "Flying sprints", detail: "4 x 30m, building to top speed. Rest 90 seconds." },
          { name: "Sprint with the ball", detail: "Push the ball 10m ahead and sprint after it. 5 reps." }
        ]
      },
      endurance: {
        title: "Endurance",
        focus: "Staying strong for the whole match",
        exercises: [
          { name: "Interval runs", detail: "5 x 1 minute hard running, 90 seconds walking between." },
          { name: "Shuttle runs", detail: "20m out and back 4 times without stopping. Rest 60 seconds. Repeat 4 times." },
          { name: "Steady run", detail: "15-20 minutes at a pace where you can still talk." }
        ]
      },
      strength: {
        title: "Strength",
        focus: "A strong base for every position",
        exercises: [
          { name: "Squats", detail: "Feet shoulder-width apart. Keep your chest up." },
          { name: "Walking lunges", detail: "Step forward and keep your front knee over your ankle." },
          { name: "Glute bridges", detail: "Squeeze at the top for 2 seconds." },
          { name: "Plank", detail: "Hold a straight line from head to heels." }
        ]
      },
      agility: {
        title: "Agility",
        focus: "Quick feet and changes of direction",
        exercises: [
          { name: "Side-shuffle cones", detail: "5 cones, 2m apart. Shuffle through facing forward. 4 rounds." },
          { name: "Zig-zag runs", detail: "Run a zig-zag through 6 cones as fast as you can. 4 rounds." },
          { name: "Dribble and turn", detail: "Dribble 10m, turn, dribble back. 6 reps." }
        ]
      }
    }
  }

};