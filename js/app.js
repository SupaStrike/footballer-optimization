/* =====================================================
   app.js
   Connects the page to the engine: reads the form,
   shows the results, and switches between the screens.
   ===================================================== */

const formView = document.getElementById("view-form");
const resultsView = document.getElementById("view-results");
const form = document.getElementById("player-form");
const formError = document.getElementById("form-error");
const summaryBox = document.getElementById("player-summary");
const editBtn = document.getElementById("edit-btn");

const tabButtons = document.querySelectorAll(".tab");
const tabPanels = document.querySelectorAll(".tab-panel");

const exercisePanel = document.getElementById("tab-exercise");
const dietPanel = document.getElementById("tab-diet");
const hydrationPanel = document.getElementById("tab-hydration");
const injuryPanel = document.getElementById("tab-injury");

/* ---------- HELPERS ---------- */
// Creates an element with optional class and text.
// Uses textContent (not innerHTML), which is safer.
function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function capitalise(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
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

/* ---------- SCREENS AND TABS ---------- */
function showResultsScreen() {
  formView.classList.add("hidden");
  resultsView.classList.remove("hidden");
}

function showFormScreen() {
  resultsView.classList.add("hidden");
  formView.classList.remove("hidden");
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

/* ---------- RENDER: EXERCISE TAB ---------- */
function renderExercisePlan(plan) {
  exercisePanel.textContent = "";

  exercisePanel.appendChild(el(
    "p", "plan-intro",
    "Your weekly plan has " + plan.days.length + " training days. Rest on the other days."
  ));

  plan.days.forEach(function (day) {
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
}

/* ---------- RENDER: DIET TAB ---------- */
function renderDiet(diet) {
  dietPanel.textContent = "";

  dietPanel.appendChild(el("p", "lead", diet.focus));

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
    "while training or playing (weight group: " + h.weightGroup + "). This is a guide, so drink more if you are very thirsty."
  ));

  hydrationPanel.appendChild(el("p", "lead", h.positionNote));

  addHeading(hydrationPanel, "Good habits");
  addList(hydrationPanel, h.general.concat([h.hotWeather]));

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

/* ---------- WHEN THE FORM IS SUBMITTED ---------- */
form.addEventListener("submit", function (event) {
  event.preventDefault();   // stops the page from reloading
  formError.textContent = "";

  const age = document.getElementById("age").value;
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;
  const fitness = document.getElementById("fitness").value;
  const position = document.getElementById("position").value;

  const plan = buildWeeklyPlan(position, fitness, age);
  const diet = buildDiet(position);
  const hydration = buildHydration(position, weight);
  const injury = buildInjury(position);

  if (!plan || !diet || !hydration || !injury) {
    formError.textContent = "Something is not right with your details. Please check them and try again.";
    return;
  }

  summaryBox.textContent =
    plan.positionLabel + " | Age " + Number(age) + " | " +
    Number(weight) + " kg | " + Number(height) + " cm | " +
    capitalise(fitness);

  renderExercisePlan(plan);
  renderDiet(diet);
  renderHydration(hydration);
  renderInjury(injury);

  showTab("exercise");
  showResultsScreen();
});

/* ---------- EDIT MY DETAILS ---------- */
// Goes back to the form with the old values still filled in,
// so the player can change one thing and generate a new plan.
editBtn.addEventListener("click", showFormScreen);