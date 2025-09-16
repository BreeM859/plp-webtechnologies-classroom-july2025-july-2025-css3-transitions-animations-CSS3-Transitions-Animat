// --------------------------
// GLOBAL VARIABLE
// --------------------------
let globalCounter = 0;

// --------------------------
// CUSTOM FUNCTIONS
// --------------------------

// Multiply two numbers (parameter + return value)
function multiplyNumbers(a, b) {
  return a * b;
}

// Increase global counter (scope demonstration)
function increaseCounter() {
  globalCounter++;
  let localMessage = `Modal opened ${globalCounter} time(s).`;
  return localMessage;
}

// Toggle loader animation dynamically
function toggleLoader(loaderId, buttonId) {
  const loader = document.getElementById(loaderId);
  const btn = document.getElementById(buttonId);

  if (loader.classList.contains("spin")) {
    loader.classList.remove("spin");
    btn.textContent = "Start Loading";
    return "Loader stopped";
  } else {
    loader.classList.add("spin");
    btn.textContent = "Stop Loading";
    return "Loader started";
  }
}

// --------------------------
// DOM ELEMENTS
// --------------------------
const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementById("closeModalBtn");
const calcResult = document.getElementById("calcResult");
const toggleLoadingBtn = document.getElementById("toggleLoadingBtn");

// --------------------------
// MODAL BEHAVIOR
// --------------------------
openBtn.addEventListener("click", () => {
  modal.classList.remove("fade-out");
  modal.classList.add("show");

  let product = multiplyNumbers(5, 4); // returns 20
  let counterMessage = increaseCounter();

  calcResult.textContent = `5 × 4 = ${product}. ${counterMessage}`;
});

closeBtn.addEventListener("click", () => {
  modal.classList.add("fade-out");
  setTimeout(() => {
    modal.classList.remove("show", "fade-out");
  }, 400);
});

window.addEventListener("click", (e) => {
  if (e.target === modal) closeBtn.click();
});

// --------------------------
// LOADER CONTROL
// --------------------------
toggleLoadingBtn.addEventListener("click", () => {
  let statusMessage = toggleLoader("loader", "toggleLoadingBtn");
  console.log(statusMessage);
});
