/**
 * app.js — Flashcard app logic
 */

"use strict";

const state = {
  category: "javascript",
  deck: [],
  index: 0,
  flipped: false,
  correct: 0,
  incorrect: 0,
  seen: new Set(),
};

const cardEl         = document.getElementById("card");
const cardFront      = document.getElementById("card-front");
const cardBack       = document.getElementById("card-back");
const progressEl     = document.getElementById("progress");
const progressBar    = document.getElementById("progress-bar");
const correctCount   = document.getElementById("correct-count");
const incorrectCount = document.getElementById("incorrect-count");
const categoryBtns   = document.querySelectorAll(".cat-btn");
const btnCorrect     = document.getElementById("btn-correct");
const btnIncorrect   = document.getElementById("btn-incorrect");
const btnShuffle     = document.getElementById("btn-shuffle");
const btnReset       = document.getElementById("btn-reset");
const completionEl   = document.getElementById("completion");
const completionMsg  = document.getElementById("completion-msg");
const btnRestart     = document.getElementById("btn-restart");

function init() {
  state.deck = shuffle([...CARDS[state.category]]);
  state.index = 0;
  state.flipped = false;
  state.correct = 0;
  state.incorrect = 0;
  state.seen = new Set();
  updateScores();
  showCard();
  completionEl.classList.add("hidden");
}

function showCard() {
  const card = state.deck[state.index];
  cardFront.querySelector(".card-text").textContent = card.q;
  cardBack.querySelector(".card-text").textContent  = card.a;
  cardEl.classList.remove("is-flipped");
  state.flipped = false;
  const total = state.deck.length;
  const done  = state.seen.size;
  progressEl.textContent = done + " / " + total;
  progressBar.style.width = Math.round((done / total) * 100) + "%";
  btnCorrect.classList.add("hidden");
  btnIncorrect.classList.add("hidden");
}

function flipCard() {
  if (state.flipped) return;
  state.flipped = true;
  cardEl.classList.add("is-flipped");
  btnCorrect.classList.remove("hidden");
  btnIncorrect.classList.remove("hidden");
}

function advance(correct) {
  state.seen.add(state.index);
  if (correct) state.correct++;
  else state.incorrect++;
  updateScores();
  if (state.seen.size === state.deck.length) { showCompletion(); return; }
  let next = (state.index + 1) % state.deck.length;
  while (state.seen.has(next)) next = (next + 1) % state.deck.length;
  state.index = next;
  showCard();
}

function showCompletion() {
  const pct = Math.round((state.correct / state.deck.length) * 100);
  const emoji = pct >= 80 ? "🏆" : pct >= 50 ? "📈" : "💪";
  completionMsg.textContent = emoji + " You scored " + state.correct + "/" + state.deck.length + " (" + pct + "%). " +
    (pct >= 80 ? "Excellent work!" : pct >= 50 ? "Good effort — keep going!" : "Keep practicing!");
  completionEl.classList.remove("hidden");
  cardEl.style.opacity = "0.3";
  btnCorrect.classList.add("hidden");
  btnIncorrect.classList.add("hidden");
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function updateScores() {
  correctCount.textContent   = state.correct;
  incorrectCount.textContent = state.incorrect;
}

function setCategory(cat) {
  state.category = cat;
  categoryBtns.forEach(b => b.classList.toggle("active", b.dataset.cat === cat));
  init();
}

cardEl.addEventListener("click", () => {
  if (!state.flipped && completionEl.classList.contains("hidden")) flipCard();
});

btnCorrect.addEventListener("click", () => advance(true));
btnIncorrect.addEventListener("click", () => advance(false));

btnShuffle.addEventListener("click", () => {
  state.deck = shuffle([...state.deck]);
  state.index = 0;
  state.seen.clear();
  state.correct = 0;
  state.incorrect = 0;
  updateScores();
  cardEl.style.opacity = "1";
  showCard();
  completionEl.classList.add("hidden");
});

btnReset.addEventListener("click", () => {
  cardEl.style.opacity = "1";
  init();
});

btnRestart.addEventListener("click", () => {
  cardEl.style.opacity = "1";
  completionEl.classList.add("hidden");
  init();
});

categoryBtns.forEach(btn => btn.addEventListener("click", () => setCategory(btn.dataset.cat)));

document.addEventListener("keydown", (e) => {
  if ((e.key === " " || e.key === "Enter") && !state.flipped && completionEl.classList.contains("hidden")) {
    e.preventDefault();
    flipCard();
  }
  if (e.key === "ArrowRight" && state.flipped) advance(true);
  if (e.key === "ArrowLeft"  && state.flipped) advance(false);
});

init();
