"use strict";

const textAreaEl = document.getElementById("textarea");
const totalCharEl = document.getElementById("total-counter");
const remainCharEl = document.getElementById("remaining-counter");
const maxLength = 50;

textAreaEl.addEventListener("keyup", () => {
  updateCounter();
  updateRemaining();
});

function updateCounter() {
  totalCharEl.innerText = textAreaEl.value.length;
}

function updateRemaining() {
  remainCharEl.innerText = maxLength - textAreaEl.value.length;
}
