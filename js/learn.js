/* =====================================================
   learn.js
   The "Learn the theory" screen: the teaching content
   and the code that draws it. Separate from data.js so
   the theory can be edited on its own.
   ===================================================== */

/* ---------- FORMATIONS (drawn as simple pitch diagrams) ---------- */
// lines = number of players in each line, from defence to attack.
// The goalkeeper is not counted.
const FORMATIONS = [
  {
    name: "4-4-2",
    lines: [4, 4, 2],
    shape: "Two strikers and two banks of four. A classic, balanced shape that is easy to organise.",
    roles: "The two strikers work together, one often dropping to link play. The wide midfielders run up and down the touchline.",
    strengths: ["Solid and easy to understand", "Two strikers can share the work of pressing and finishing"],
    weaknesses: ["The midfield can be outnumbered by a team with three central players", "Wide midfielders must work hard to track back"],
    suits: "Teams with two good strikers and wide midfielders who are fit enough to run all match."
  },
  {
    name: "4-3-3",
    lines: [4, 3, 3],
    shape: "Three attackers, with wingers who stretch the defence and create space in the middle.",
    roles: "The wingers stay wide, the striker leads the line, and one central midfielder can drop deep to receive the ball.",
    strengths: ["Width and threat from the wingers", "Three midfielders help in both defence and attack"],
    weaknesses: ["Wingers must track back, or the full-backs are left exposed", "The central midfield can be outnumbered"],
    suits: "Teams with quick wingers and a mobile midfield."
  },
  {
    name: "4-2-3-1",
    lines: [4, 2, 3, 1],
    shape: "Two holding midfielders protect the back line, with three attacking midfielders behind one striker.",
    roles: "The two holding midfielders cover the space in front of the defence. The three attacking midfielders play between the lines.",
    strengths: ["Solid protection in front of the defence", "Creative players close to the striker"],
    weaknesses: ["The striker can be isolated if the midfield does not support", "The holding pair must cover a lot of ground"],
    suits: "Teams with a creative number 10 and a disciplined holding pair."
  },
  {
    name: "3-5-2",
    lines: [3, 5, 2],
    shape: "Three centre-backs, with wing-backs who cover the width of the pitch.",
    roles: "The wing-backs go up and down the touchlines. The central midfielders provide a strong middle, and two strikers lead the attack.",
    strengths: ["An extra central defender for physical battles", "Wing-backs give width in attack"],
    weaknesses: ["Wing-backs need very high endurance", "Exposed if a wing-back is beaten on the flank"],
    suits: "Teams with strong centre-backs and wing-backs who have high endurance."
  },
  {
    name: "4-1-4-1",
    lines: [4, 1, 4, 1],
    shape: "One holding midfielder protects the back four, and a lone striker leads the attack.",
    roles: "The holding midfielder sits in front of the defence. The four midfielders form a compact line that is hard to break through.",
    strengths: ["Very compact and hard to break through", "Clear jobs for every player"],
    weaknesses: ["The lone striker can be isolated", "Little width, so goals often come from midfield runs"],
    suits: "Teams that defend well as a unit and counter-attack quickly."
  }
];

/* ---------- THE TEACHING CONTENT ---------- */
const LEARN_SECTIONS = [
  {
    id: "cycles",
    label: "Cycles",
    title: "Periodisation: planning training in cycles",
    intro: "Periodisation means splitting training into planned blocks, so the hardest work comes at the right time and the team peaks for the matches that matter. There are three main cycle lengths.",
    groups: [
      {
        heading: "The three cycles",
        items: [
          {
            title: "Macrocycle (the big picture)",
            text: "The longest plan, usually a whole season or a long preparation period of several months. It sets the main goal, such as being fit and sharp for a league or tournament, and splits the year into preseason, competition and off-season."
          },
          {
            title: "Mesocycle (a training block)",
            text: "A block of about 3 to 6 weeks with one main focus, such as building endurance, then building speed, then sharpening before a tournament. As competition gets closer, intensity rises and the amount of work falls."
          },
          {
            title: "Microcycle (one week)",
            text: "Usually one week, built around the match. Hard sessions are usually placed 2 to 3 days before a match, a lighter session comes the day before, and the day after is for recovery."
          }
        ]
      },
      {
        heading: "How this links to your plan",
        items: [
          {
            title: "Your four-week plan is a mesocycle",
            text: "Weeks 1 to 3 build from easy to harder, and Week 4 is a lighter week so your body can recover. Each week is a microcycle, and your whole season is the macrocycle."
          }
        ]
      }
    ],
    check: [
      "Name the three cycles, from longest to shortest.",
      "Why is the hardest session usually placed 2 to 3 days before a match?",
      "Which cycle does your four-week plan belong to?"
    ],
    source: "General sports science terms used in football coaching courses, and your expert interview."
  },

  {
    id: "functional",
    label: "Positions",
    title: "Functional training: what each position needs",
    intro: "Functional training copies the demands of the position, so the body is trained for the actions it will really do in a match. Warm-ups are the same for everyone, but the main training should differ.",
    groups: [
      {
        heading: "By position",
        items: [
          {
            title: "Goalkeeper",
            text: "Explosive first steps, quick reactions to shots, diving, and accurate throwing and kicking. Useful work includes reaction catches and short, explosive jumps."
          },
          {
            title: "Centre-back",
            text: "Jumping and landing for heading duels, plyometric power such as hops and bounds, strength to win physical battles, and short bursts to recover when a ball is played behind you. Your expert described centre-backs as jump-heavy and physically strong."
          },
          {
            title: "Full-back",
            text: "Repeated sprints up and down the touchline, agility to stay with a winger, and endurance for the whole match. Full-backs had the best repeated-sprint results in the Bujnovsky (2019) study, and side defenders covered the most sprint distance in the Causevic (2025) GPS study."
          },
          {
            title: "Central midfielder",
            text: "Endurance above all, because central midfielders covered the most total distance in the Causevic (2025) GPS study. Also fast changes of direction, and passing and control while tired."
          },
          {
            title: "Winger",
            text: "Top speed and acceleration, repeated sprints, and 1v1 dribbling to beat a defender. Side players were among the highest for high-speed running in the GPS study."
          },
          {
            title: "Striker",
            text: "A sharp first step over 5 to 15 metres, finishing while tired, movement off the ball, and awareness of where defenders are. Forwards had high sprint counts in the GPS study, and your expert stressed awareness of where you are."
          },
          {
            title: "All-rounder",
            text: "Train the common base first, then try each position's sessions in a match-like game to find where you are strongest."
          }
        ]
      }
    ],
    check: [
      "Why should the main training differ by position, when the warm-up is the same?",
      "Which position covered the most total distance in the GPS study?",
      "What does a centre-back's plyometric training look like?"
    ],
    source: "Position demands from Bujnovsky et al. (2019) and Causevic et al. (2025), and your expert interview."
  },

  {
    id: "principles",
    label: "Principles",
    title: "Attacking, defending and transition principles",
    intro: "Principles are the ideas behind every decision on the pitch. Each card below explains one principle: what it means, why it matters, what it looks like, a short coaching cue, and a drill to practise it. Attacking and defending principles are two sides of one game, so read the transition principles last.",
    groups: [
      {
        heading: "Attacking principles",
        items: [
          {
            title: "Penetration",
            summary: "Get the ball past the defence, not just across it.",
            meaning: "Passes or dribbles that move the ball forward into the space between the defenders and the goal.",
            why: "Sideways passing lets the defence settle into shape. A forward pass that is accepted breaks that shape.",
            look: "A central midfielder plays a pass through the gap between two defenders to a striker running in.",
            cue: "Look forward first.",
            drill: "3 v 2 in the far half: attackers score a point by playing a pass through a gate of two cones."
          },
          {
            title: "Mobility and movement",
            summary: "Move to make the defender move.",
            meaning: "Players change position or swap roles, so defenders have to decide who follows them.",
            why: "Static players are easy to mark. Movement creates confusion for markers and opens gaps.",
            look: "A striker drops deep, and a winger runs into the space the full-back leaves behind.",
            cue: "Move before the pass, not after it.",
            drill: "Swap game: on a coach's signal, each attacker moves into the space the nearest defender has left."
          },
          {
            title: "Width",
            summary: "Stretch the defence to open space in the middle.",
            meaning: "Attackers stay near the touchlines, so the defence has to spread out to cover them.",
            why: "Wide players pull defenders out of the middle, which creates room for runs, through balls and crosses.",
            look: "In a 4-3-3, the full-backs push high and the wingers stay on the touchlines.",
            cue: "Stay wide until you need to come in.",
            drill: "Cross and cutback: a wide player receives the ball, runs to the byline and delivers a cross to a runner."
          },
          {
            title: "Depth",
            summary: "Have a player ahead of the ball.",
            meaning: "Attackers position themselves in front of the ball carrier, or run beyond the defence, so there is always a forward option.",
            why: "Without depth, the attack has no runner, and the passing options are all short and sideways.",
            look: "A winger starts level with the striker, and a midfielder arrives late from deeper.",
            cue: "Be the forward option.",
            drill: "Run in behind: a partner plays a ball over a line of two cones for a player who times a run to meet it."
          },
          {
            title: "Support",
            summary: "Always be available for a pass.",
            meaning: "Offering the player on the ball an angle to pass, in front, to the side or behind.",
            why: "A player with options is hard to pressure, so the team keeps the ball and controls the game.",
            look: "A central midfielder moves to a diagonal angle about 10 metres from the ball carrier.",
            cue: "Make a triangle, not a line.",
            drill: "Triangle passing: three players must make passing angles. Rotate roles after every 10 passes."
          },
          {
            title: "Creativity",
            summary: "Find an answer when the planned move is blocked.",
            meaning: "Taking a calculated risk, such as a dribble, a surprise pass or a shot, when the planned pattern is closed down.",
            why: "Opponents can organise against a pattern. Creativity is what breaks a well-organised defence.",
            look: "A winger cuts inside the defender and plays a through pass for a striker.",
            cue: "Take the risk at the right moment, not every moment.",
            drill: "Free play with a rule: in the final third, the attacker who finds a solution that scores earns a point."
          }
        ]
      },
      {
        heading: "Defending principles",
        items: [
          {
            title: "Pressure",
            summary: "Stop the ball moving forward.",
            meaning: "The nearest defender closes down the ball carrier quickly, to slow the attack or win the ball back.",
            why: "Pressure turns the ball over high up the pitch, close to the opponent's goal.",
            look: "A centre-back steps out to challenge a striker who is receiving the ball with their back to goal.",
            cue: "Press when the trigger happens, not just because you can.",
            drill: "1v1 closing game: the defender starts 5 metres away and must close the attacker down without a foul."
          },
          {
            title: "Cover",
            summary: "Be ready if the first defender is beaten.",
            meaning: "A team-mate positions behind the presser, ready to step in if the ball carrier gets past.",
            why: "Cover stops one beaten defender from giving away a goal.",
            look: "When a full-back presses wide, the nearest central defender moves across to cover the space behind.",
            cue: "Two players behind the ball.",
            drill: "Presser and cover: a defender presses a dribbler, and a team-mate behind steps in when the dribbler gets past."
          },
          {
            title: "Balance",
            summary: "Cover the space on the far side.",
            meaning: "A defender stays away from the ball, ready to cover if it switches to the other side.",
            why: "Balance stops the whole team being pulled to one side and leaving the other open.",
            look: "When the ball is on the left, the far-side full-back stays slightly deeper on the right.",
            cue: "Watch the far side.",
            drill: "Switch-play game: attackers pass the ball wide, and defenders must shift across to keep balance."
          },
          {
            title: "Compactness",
            summary: "Keep the team close together.",
            meaning: "Keeping the lines close, with little space between players.",
            why: "Less space between players means fewer passes can get through the defence.",
            look: "The four defenders and four midfielders stay within about 15 metres of each other.",
            cue: "Shorter gaps, not longer lines.",
            drill: "Shape check: the defending side holds a shape for 30 seconds while the coach checks the gaps between players."
          },
          {
            title: "Delay",
            summary: "Slow the attack down when you are outnumbered.",
            meaning: "Stop the ball moving forward while team-mates get back into position.",
            why: "A rushed challenge when outnumbered gives the attacking team an easy pass through.",
            look: "The nearest defender backs off, jogs, keeps the attacker in front, and waits for team-mates to return.",
            cue: "Slow it down, do not dive in.",
            drill: "Two versus one recovery: the lone defender delays for 5 seconds until a team-mate arrives."
          },
          {
            title: "Goal-side",
            summary: "Stay between the attacker and your goal.",
            meaning: "Being positioned so that the attacker has to get past you to score.",
            why: "It keeps the goal protected, even if you lose the ball.",
            look: "A centre-back stays goal-side when a striker drops off into the space behind.",
            cue: "Between them and the goal.",
            drill: "Shadow runs: a defender follows an attacker's runs and always stays goal-side."
          },
          {
            title: "Communication",
            summary: "Tell each other what to do.",
            meaning: "Calling out who presses, who covers and who balances.",
            why: "Defenders cannot see everything. A clear call stops two players going to the same ball, or nobody going at all.",
            look: "A centre-back shouts 'Press!' and the nearest team-mate shouts 'Cover!'.",
            cue: "Name the job, then do it.",
            drill: "Call and move: on each touch, a defender calls a role, and the others react straight away."
          }
        ]
      },
      {
        heading: "Transition principles (switching between attack and defence)",
        items: [
          {
            title: "Counter-pressing",
            summary: "Win the ball back straight away.",
            meaning: "Pressing the ball immediately after losing it.",
            why: "The opponent is least organised in the first few seconds after winning the ball.",
            look: "Two or three players close in on the player who has just won the ball.",
            cue: "Win it back in five seconds.",
            drill: "Turnover game: after each lost ball, the team has 5 seconds to win it back."
          },
          {
            title: "Counter-attacking",
            summary: "Attack fast after winning the ball.",
            meaning: "Moving forward quickly while the opponent is still out of position.",
            why: "Space is most open in the first few seconds after a turnover.",
            look: "A defender who wins the ball plays early to a winger running into the space ahead.",
            cue: "Forward first, if it is on.",
            drill: "3 v 2 counter: after winning the ball, 3 attackers must score against 2 defenders within 8 seconds."
          }
        ]
      }
    ],
    check: [
      "What is the difference between pressure and cover?",
      "Why does width help the team score, not just stretch the defence?",
      "What should happen in the first 5 seconds after losing the ball?"
    ],
    source: "General football coaching principles, as taught in coaching courses, and your expert interview (pressure, cover and balance)."
  },

  {
    id: "formations",
    label: "Formations",
    title: "Formations: the shapes teams play",
    intro: "A formation is a starting shape, not a rule. The numbers show how many players are in each line, from defence to attack. No formation is best. The best one suits the players you have.",
    formations: FORMATIONS,
    groups: [],
    check: [
      "How many players are in a 4-2-3-1, and where are they?",
      "Why do wing-backs in a 3-5-2 need high endurance?",
      "Which formation would you choose for a team with fast wingers, and why?"
    ],
    source: "General football coaching concepts and common formation descriptions, as taught in coaching courses. Check these diagrams with your coach."
  },

  {
    id: "tactics",
    label: "Tactics",
    title: "Hard tactics: the detail behind the game",
    intro: "This is the detail that separates good teams from average ones. A shape is a starting point, not a rule, so think about what each player should do when the ball moves.",
    groups: [
      {
        heading: "Shape and structure",
        items: [
          {
            title: "Half-spaces",
            text: "The channels between the middle of the pitch and the wide players. Teams aim to get the ball there because it is hard for both central and wide defenders to cover."
          },
          {
            title: "Overloads and underloads",
            text: "Sending more attackers into one area than the defence has (for example 3 against 2) to beat a press, while leaving another area lightly covered on purpose."
          },
          {
            title: "Double pivot",
            text: "Two holding midfielders in front of the back line. One protects the centre, while the other supports the attack and receives the ball from the defenders."
          }
        ]
      },
      {
        heading: "Pressing and transitions",
        items: [
          {
            title: "Pressing triggers",
            text: "The moments the team should press: a poor first touch, a backward pass, or a pass to a wide player with their back to goal. Press together, never alone."
          },
          {
            title: "Mid-block versus high press",
            text: "When the opponent is quicker, sit in a compact shape in your own half rather than chasing the ball across the pitch."
          },
          {
            title: "Transitions",
            text: "The first few seconds after winning or losing the ball often decide the moment. Many coaches use a short window of about 5 seconds to counter-press after losing the ball, or to attack quickly after winning it."
          }
        ]
      },
      {
        heading: "Build-up and set pieces",
        items: [
          {
            title: "Build-up play",
            text: "Playing out from the back. The goalkeeper and centre-backs are the first passers, and full-backs can step inside to make a passing triangle."
          },
          {
            title: "Set pieces",
            text: "Decide who attacks the near post, who stays at the back, and who marks each opponent. A large share of goals come from set pieces, so practise them."
          }
        ]
      },
      {
        heading: "Game management",
        items: [
          {
            title: "When you are leading",
            text: "Slow the tempo, keep the ball, and reduce risk."
          },
          {
            title: "When you are behind",
            text: "Play more directly and accept more risk, while staying compact enough to avoid conceding more."
          }
        ]
      }
    ],
    check: [
      "What is a half-space, and why do teams want the ball there?",
      "What are the pressing triggers, and why should a team press together?",
      "What should a team do when it is leading late in a match?"
    ],
    source: "General football coaching concepts, as taught in national coaching courses. Check these with your coach."
  },

  {
    id: "recovery",
    label: "Recovery",
    title: "Recovery, eating around matches and travel",
    intro: "Training only works if the body recovers. Your expert stressed rest, knowing your own body, and getting the timing of meals right.",
    groups: [
      {
        heading: "Recovery",
        items: [
          {
            title: "Rest and recovery",
            text: "Sleep, food and rest days are part of training. Intensity rises as a competition gets closer, so recovery must keep up."
          },
          {
            title: "Know your body",
            text: "Learn the difference between normal tiredness and pain. Tell your coach or physio about pain that lasts or gets worse."
          }
        ]
      },
      {
        heading: "Eating around a match",
        items: [
          {
            title: "Pre-match meal",
            text: "A balanced meal about 3 to 4 hours before kick-off, mostly carbohydrate with some protein, and low in grease. Your expert suggested at least three and a half hours."
          },
          {
            title: "The last hour",
            text: "Only a small snack, such as a banana, a cereal bar or a protein bar. Avoid a heavy or large meal, which digests slowly."
          },
          {
            title: "After the match",
            text: "Refuel and rehydrate with carbohydrate and protein, so the body can replace what it used."
          }
        ]
      },
      {
        heading: "Travelling to heat or altitude",
        items: [
          {
            title: "Arrive early",
            text: "Professional teams travel one to two weeks before a match in heat or at altitude, so their bodies can adjust. Expect to sweat more and drink more in the first few days."
          }
        ]
      }
    ],
    check: [
      "How long before kick-off should the main pre-match meal be eaten?",
      "What is the difference between normal tiredness and pain?",
      "Why do teams travel early to play in heat or at altitude?"
    ],
    source: "Your expert interview, and the Gatorade Sports Science Institute SSE #128 on rehydration."
  }
];

/* ---------- DRAWING THE SCREEN ---------- */
const learnWelcomeEl = document.getElementById("view-welcome");
const learnScreenEl = document.getElementById("view-learn");
const learnOpenEl = document.getElementById("learn-btn");
const learnBackEl = document.getElementById("learn-back-btn");
const learnTabsEl = document.getElementById("learn-tabs");
const learnBodyEl = document.getElementById("learn-content");

// Creates an element with optional class and text (textContent, so it is safe)
function learnEl(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

// Adds a simple bulleted list to a parent element
function learnList(parent, items) {
  const list = learnEl("ul", "plain-list");
  items.forEach(function (text) {
    list.appendChild(learnEl("li", null, text));
  });
  parent.appendChild(list);
}

// Draws a pitch diagram for a formation. The SVG is built only from our own
// numbers and names, never from user input.
function formationSvg(name, lines) {
  const W = 320;
  const H = 210;
  const parts = [];

  // Pitch and markings
  parts.push('<rect x="2" y="2" width="316" height="206" fill="#14532d" stroke="#ffffff" stroke-width="2"/>');
  parts.push('<line x1="160" y1="2" x2="160" y2="208" stroke="#ffffff" stroke-opacity="0.6" stroke-width="1.5"/>');
  parts.push('<circle cx="160" cy="105" r="26" fill="none" stroke="#ffffff" stroke-opacity="0.6" stroke-width="1.5"/>');
  parts.push('<rect x="2" y="55" width="44" height="100" fill="none" stroke="#ffffff" stroke-opacity="0.6" stroke-width="1.5"/>');
  parts.push('<rect x="274" y="55" width="44" height="100" fill="none" stroke="#ffffff" stroke-opacity="0.6" stroke-width="1.5"/>');

  // Players: goalkeeper first, then each line spread across the width
  const players = [{ x: 24, y: 105, gk: true }];
  const count = lines.length;
  lines.forEach(function (n, i) {
    const x = count === 1 ? 170 : 80 + i * (200 / (count - 1));
    for (let j = 0; j < n; j++) {
      players.push({ x: x, y: (j + 1) * H / (n + 1), gk: false });
    }
  });

  players.forEach(function (p) {
    parts.push(
      '<circle cx="' + p.x.toFixed(1) + '" cy="' + p.y.toFixed(1) + '" r="10" fill="' +
      (p.gk ? "#ffffff" : "#22c55e") + '" stroke="#0d0d0d" stroke-width="2"/>'
    );
  });

  return '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram of a ' +
    name + ' formation">' + parts.join("") + "</svg>";
}

// Draws one principle as a card with labelled rows
function renderPrinciple(item) {
  const block = learnEl("div", "principle");
  block.appendChild(learnEl("h3", "day-title", item.title));
  block.appendChild(learnEl("p", "principle-summary", item.summary));

  const rows = [
    ["What it means", item.meaning],
    ["Why it matters", item.why],
    ["What you see", item.look],
    ["Coach's cue", item.cue],
    ["Practise it", item.drill]
  ];

  rows.forEach(function (row) {
    const p = learnEl("p", "principle-row");
    p.appendChild(learnEl("strong", null, row[0] + ": "));
    p.appendChild(document.createTextNode(row[1]));
    block.appendChild(p);
  });

  learnBodyEl.appendChild(block);
}

// Draws the groups of a section: principles get cards, other items get plain blocks
function renderGroups(section) {
  section.groups.forEach(function (group) {
    learnBodyEl.appendChild(learnEl("h4", "part-title", group.heading));

    group.items.forEach(function (item) {
      if (item.summary) {
        renderPrinciple(item);
      } else {
        const block = learnEl("div", "day-block");
        block.appendChild(learnEl("h3", "day-title", item.title));
        block.appendChild(learnEl("p", "day-focus", item.text));
        learnBodyEl.appendChild(block);
      }
    });
  });
}

// Draws the formation cards: diagram, shape, roles, strengths, weaknesses
function renderFormations(list) {
  learnBodyEl.appendChild(learnEl(
    "p", "plan-intro",
    "Attack is to the right. The numbers show how many players are in each line, from defence to attack. The goalkeeper is not counted."
  ));

  list.forEach(function (f) {
    const card = learnEl("div", "formation-card");
    card.appendChild(learnEl("h3", "day-title", f.name));

    const pitch = learnEl("div", "pitch");
    pitch.innerHTML = formationSvg(f.name, f.lines);
    card.appendChild(pitch);

    card.appendChild(learnEl("p", "day-focus", f.shape));

    const roles = learnEl("p", "principle-row");
    roles.appendChild(learnEl("strong", null, "Roles: "));
    roles.appendChild(document.createTextNode(f.roles));
    card.appendChild(roles);

    card.appendChild(learnEl("h4", "part-title", "Strengths"));
    learnList(card, f.strengths);

    card.appendChild(learnEl("h4", "part-title", "Weaknesses"));
    learnList(card, f.weaknesses);

    const suits = learnEl("p", "principle-row");
    suits.appendChild(learnEl("strong", null, "Suits: "));
    suits.appendChild(document.createTextNode(f.suits));
    card.appendChild(suits);

    learnBodyEl.appendChild(card);
  });
}

// Shows the self-check questions at the end of a section
function renderCheck(section) {
  if (!section.check || section.check.length === 0) return;
  learnBodyEl.appendChild(learnEl("h4", "part-title", "Check yourself"));
  learnList(learnBodyEl, section.check);
}

// Shows one section of the theory and highlights its tab
function drawLearnSection(id) {
  const section = LEARN_SECTIONS.find(function (s) { return s.id === id; });
  if (!section) return;

  learnTabsEl.querySelectorAll(".week-tab").forEach(function (btn) {
    btn.classList.toggle("active", btn.dataset.section === id);
  });

  learnBodyEl.textContent = "";
  learnBodyEl.appendChild(learnEl("h3", "section-heading", section.title));
  learnBodyEl.appendChild(learnEl("p", "plan-intro", section.intro));

  renderGroups(section);

  if (section.formations) {
    renderFormations(section.formations);
  }

  renderCheck(section);

  learnBodyEl.appendChild(learnEl("p", "source-line", "Based on: " + section.source));
  learnBodyEl.scrollTop = 0;
}

// Builds one tab button per section
function buildLearnTabs() {
  learnTabsEl.textContent = "";

  LEARN_SECTIONS.forEach(function (section) {
    const btn = learnEl("button", "week-tab", section.label);
    btn.type = "button";
    btn.dataset.section = section.id;
    btn.addEventListener("click", function () {
      drawLearnSection(section.id);
    });
    learnTabsEl.appendChild(btn);
  });
}

// Opens the Learn screen on its first section
function openLearn() {
  learnWelcomeEl.classList.add("hidden");
  learnScreenEl.classList.remove("hidden");
  drawLearnSection(LEARN_SECTIONS[0].id);
}

// Returns to the welcome screen
function closeLearn() {
  learnScreenEl.classList.add("hidden");
  learnWelcomeEl.classList.remove("hidden");
}

buildLearnTabs();
learnOpenEl.addEventListener("click", openLearn);
learnBackEl.addEventListener("click", closeLearn);