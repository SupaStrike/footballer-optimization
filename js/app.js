/* =====================================================
   app.js
   Connects the page to the engine: reads the form,
   shows the results, and switches between the screens.
   ===================================================== */

const welcomeView = document.getElementById("view-welcome");
const formView = document.getElementById("view-form");
const resultsView = document.getElementById("view-results");
const form = document.getElementById("player-form");
const formError = document.getElementById("form-error");
const summaryBox = document.getElementById("player-summary");
const startBtn = document.getElementById("start-btn");
const backBtn = document.getElementById("back-btn");
const editBtn = document.getElementById("edit-btn");

const tabButtons = document.querySelectorAll(".tab");
const tabPanels = document.querySelectorAll(".tab-panel");

const exercisePanel = document.getElementById("tab-exercise");
const dietPanel = document.getElementById("tab-diet");
const hydrationPanel = document.getElementById("tab-hydration");
const injuryPanel = document.getElementById("tab-injury");

// The plan currently on screen (so the week buttons can redraw it)
let currentPlan = null;

/* ---------- HELPERS ---------- */
// Creates an element with optional class and text.
// Uses textContent (not innerHTML), which is safer.
function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function addHeading(parent, text) {
  parent.appendChild(el("h3", "section-heading", text));
}

function addList(parent, items) {
  const list = el("ul", "plain-list");
  items.forEach(function (text) {
    list.appendChild(el("li", null, text));
  });
  parent.appendChild(list);
}

function addSource(parent, text) {
  parent.appendChild(el("p", "source-line", "Based on: " + text));
}

function daysText(count) {
  return count + (count === 1 ? " day" : " days");
}

/* ---------- SCREENS AND TABS ---------- */
// Only one of the three screens is visible at a time.
function showScreen(name) {
  welcomeView.classList.toggle("hidden", name !== "welcome");
  formView.classList.toggle("hidden", name !== "form");
  resultsView.classList.toggle("hidden", name !== "results");
}

// Shows one tab and hides the others.
function showTab(name) {
  tabButtons.forEach(function (btn) {
    const isActive = btn.dataset.tab === name;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-selected", isActive ? "true" : "false");
  });

  tabPanels.forEach(function (panel) {
    const isMatch = panel.id === "tab-" + name;
    panel.classList.toggle("hidden", !isMatch);
    if (isMatch) panel.scrollTop = 0;
  });
}

tabButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    showTab(btn.dataset.tab);
  });
});

/* ---------- RENDER: EXERCISE TAB (four weeks) ---------- */
function renderExercisePlan(plan) {
  currentPlan = plan;
  showWeek(0);
}

// Draws one week of the plan, with buttons to jump between weeks.
function showWeek(weekIndex) {
  const plan = currentPlan;
  const week = plan.weeks[weekIndex];

  exercisePanel.textContent = "";

  // Week buttons
  const weekTabs = el("div", "week-tabs");
  plan.weeks.forEach(function (w, i) {
    const btn = el("button", "week-tab", "Week " + w.week);
    btn.type = "button";
    btn.classList.toggle("active", i === weekIndex);
    btn.addEventListener("click", function () {
      showWeek(i);
    });
    weekTabs.appendChild(btn);
  });
  exercisePanel.appendChild(weekTabs);

  // Intro for this week
  exercisePanel.appendChild(el(
    "h3", "section-heading",
    "Week " + week.week + ": " + week.name
  ));
  exercisePanel.appendChild(el("p", "plan-intro", week.note));

  let intro = "This week has " + daysText(plan.daysPerWeek) + ". Rest on the other days.";
  if (plan.daysPerWeek === 7) {
    intro = "This week covers all 7 days. The recovery days are light, so do not skip them.";
  }
  exercisePanel.appendChild(el("p", "plan-intro", intro));

  // The training days
  week.days.forEach(function (day) {
    const block = el("div", "day-block");
    block.appendChild(el("h3", "day-title", day.day + ": " + day.title));
    block.appendChild(el("p", "day-focus", day.focus));

    if (day.sets) {
      block.appendChild(el("p", "day-sets", day.sets + ". " + day.ageNote));
    }

    const list = el("ul", "exercise-list");
    day.exercises.forEach(function (ex) {
      const item = el("li");
      item.appendChild(el("strong", null, ex.name));
      item.appendChild(document.createTextNode(" - " + ex.detail));
      list.appendChild(item);
    });
    block.appendChild(list);

    exercisePanel.appendChild(block);
  });

  // Runs once, after all the days have been added
  addSource(exercisePanel, plan.source);

  exercisePanel.scrollTop = 0;
}

/* ---------- RENDER: DIET TAB ---------- */
function renderDiet(diet) {
  dietPanel.textContent = "";

  dietPanel.appendChild(el("p", "lead", diet.focus));

  if (diet.bmiNote) {
    dietPanel.appendChild(el("p", "day-sets", diet.bmiNote));
  }

  addHeading(dietPanel, "What to eat and when");
  const mealList = el("ul", "plain-list");
  diet.meals.forEach(function (meal) {
    const item = el("li");
    item.appendChild(el("strong", null, meal.when + ": "));
    item.appendChild(document.createTextNode(meal.ideas));
    mealList.appendChild(item);
  });
  dietPanel.appendChild(mealList);

  addHeading(dietPanel, "Good habits");
  addList(dietPanel, diet.tips);

  addSource(dietPanel, diet.source);
}

/* ---------- RENDER: HYDRATION TAB ---------- */
function renderHydration(h) {
  hydrationPanel.textContent = "";

  hydrationPanel.appendChild(el(
    "p", "big-amount",
    "About " + h.amountMl + " ml every " + h.everyMinutes + " minutes"
  ));
  hydrationPanel.appendChild(el(
    "p", "amount-detail",
    "while training or playing, based on your weight and climate. Drink more if you are very thirsty."
  ));

  hydrationPanel.appendChild(el("p", "lead", h.positionNote));

  addHeading(hydrationPanel, "Check your own sweat loss");
  hydrationPanel.appendChild(el("p", "lead", h.weighTip));

  addHeading(hydrationPanel, "Good habits");
  addList(hydrationPanel, h.general.concat([h.climateNote]));

  addSource(hydrationPanel, h.source);
}

/* ---------- RENDER: INJURY PREVENTION TAB ---------- */
function renderInjury(inj) {
  injuryPanel.textContent = "";

  injuryPanel.appendChild(el("p", "lead", inj.evidence));
  injuryPanel.appendChild(el("p", "day-sets", inj.schedule));

  addHeading(injuryPanel, "Common injury risks for your position");
  addList(injuryPanel, inj.risks);

  addHeading(injuryPanel, "Your warm-up");
  inj.parts.forEach(function (part) {
    injuryPanel.appendChild(el("h4", "part-title", part.title));
    addList(injuryPanel, part.exercises);
  });

  addHeading(injuryPanel, "Good habits");
  addList(injuryPanel, inj.prevention);

  addSource(injuryPanel, inj.source);
}

/* ---------- WELCOME AND BACK BUTTONS ---------- */
startBtn.addEventListener("click", function () {
  showScreen("form");
  document.getElementById("age").focus();
});

backBtn.addEventListener("click", function () {
  showScreen("welcome");
});

/* ---------- WHEN THE FORM IS SUBMITTED ---------- */
form.addEventListener("submit", function (event) {
  event.preventDefault();   // stops the page from reloading
  formError.textContent = "";

  const age = document.getElementById("age").value;
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;
  const days = document.getElementById("days").value;
  const position = document.getElementById("position").value;
  const climate = document.getElementById("climate").value;
  const food = document.getElementById("food").value;

  const plan = buildWeeklyPlan(position, days, age);
  const diet = buildDiet(position, weight, height, food);
  const hydration = buildHydration(position, weight, climate);
  const injury = buildInjury(position);

  if (!plan || !diet || !hydration || !injury) {
    formError.textContent = "Something is not right with your details. Please check them and try again.";
    return;
  }

  summaryBox.textContent =
    plan.positionLabel + " | Age " + Number(age) + " | " +
    Number(weight) + " kg | " + Number(height) + " cm | " +
    daysText(plan.daysPerWeek) + " a week";

  renderExercisePlan(plan);
  renderDiet(diet);
  renderHydration(hydration);
  renderInjury(injury);

  showTab("exercise");
  showScreen("results");
});

/* ---------- EDIT MY DETAILS ---------- */
// Goes back to the form with the old values still filled in,
// so the player can change one thing and generate a new plan.
editBtn.addEventListener("click", function () {
  showScreen("form");
});