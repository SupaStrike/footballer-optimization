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
const exercisePanel = document.getElementById("tab-exercise");
const editBtn = document.getElementById("edit-btn");

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

function showResultsScreen() {
  formView.classList.add("hidden");
  resultsView.classList.remove("hidden");
}

function showFormScreen() {
  resultsView.classList.add("hidden");
  formView.classList.remove("hidden");
}

/* ---------- RENDER THE EXERCISE TAB ---------- */
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

  if (!plan) {
    formError.textContent = "Something is not right with your details. Please check them and try again.";
    return;
  }

  summaryBox.textContent =
    plan.positionLabel + " | Age " + Number(age) + " | " +
    Number(weight) + " kg | " + Number(height) + " cm | " +
    capitalise(fitness);

  renderExercisePlan(plan);
  showResultsScreen();
});

/* ---------- EDIT MY DETAILS ---------- */
// Goes back to the form with the old values still filled in,
// so the player can change one thing and generate a new plan.
editBtn.addEventListener("click", showFormScreen);