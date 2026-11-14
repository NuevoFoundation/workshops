const snacks = [
  { id: "tteokbokki", order: "I'd like the spicy rice cakes, please!", hint: "Find the card that says spicy rice cakes." },
  { id: "kimbap", order: "May I have rice rolls wrapped in seaweed?", hint: "Look for the rice rolls on the menu." },
  { id: "hotteok", order: "I'd love some sweet filled pancakes.", hint: "Which card describes pancakes?" },
  { id: "bingsu", order: "A shaved-ice dessert for me, please!", hint: "Look for the shaved-ice dessert." },
  { id: "pepero", order: "I'd like chocolate-coated biscuit sticks.", hint: "Find the biscuit sticks, not the cakes." },
  { id: "yakgwa", order: "Some traditional sweet cookies, please.", hint: "Look for the card that describes traditional cookies." },
  { id: "choco-pie", order: "May I have the chocolate-coated cakes with marshmallow?", hint: "Find the cakes with marshmallow, not the biscuit sticks." },
  { id: "bungeoppang", order: "I'd like the fish-shaped filled bread!", hint: "Which card describes bread shaped like a fish?" }
];

const totalVisitors = 5;
let served = 0;
let currentOrder = snacks[0];

const orderText = document.getElementById("order-text");
const feedback = document.getElementById("feedback");
const visitorLabel = document.getElementById("visitor-label");
const progress = document.getElementById("progress");
const progressLabel = document.getElementById("progress-label");
const nextButton = document.getElementById("next-visitor");
const snackButtons = document.querySelectorAll(".snack-button");
const gamePanel = document.getElementById("game-panel");
const finishPanel = document.getElementById("finish-panel");

function showOrder() {
  const index = 0;
  currentOrder = snacks[index];
  orderText.textContent = currentOrder.order;
  visitorLabel.textContent = "Visitor " + (served + 1);
  feedback.textContent = "Choose a snack from the menu.";
  feedback.dataset.kind = "info";
  nextButton.hidden = true;
  setMenuEnabled(true);
}

function checkAnswer(snackId) {
  feedback.textContent = "You selected " + snackId + ". In Activity 3, make the game check your choice!";
  feedback.dataset.kind = "info";
}

// These page helpers are provided so students can focus on the game rules.
function setMenuEnabled(enabled) {
  snackButtons.forEach(function (button) {
    button.disabled = !enabled;
  });
}

function updateProgress() {
  progress.max = totalVisitors;
  progress.value = served;
  progressLabel.textContent = served + " of " + totalVisitors + " visitors served";
  document.getElementById("visitor-goal").textContent = totalVisitors;
}

function finishOrder() {
  feedback.textContent = "That's the one! Visitor " + served + " is served.";
  feedback.dataset.kind = "success";
  setMenuEnabled(false);
  nextButton.hidden = false;
  nextButton.focus();
}

function finishGame() {
  setMenuEnabled(false);
  gamePanel.hidden = true;
  finishPanel.hidden = false;
  document.getElementById("finish-message").textContent = "You served all " + totalVisitors + " visitors!";
  document.getElementById("finish-heading").focus();
}

function restartGame() {
  served = 0;
  gamePanel.hidden = false;
  finishPanel.hidden = true;
  updateProgress();
  showOrder();
  document.getElementById("order-heading").focus();
}

snackButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    checkAnswer(button.dataset.snack);
  });
});
nextButton.addEventListener("click", function () {
  showOrder();
  document.getElementById("order-heading").focus();
});
document.getElementById("restart").addEventListener("click", restartGame);

updateProgress();
showOrder();
