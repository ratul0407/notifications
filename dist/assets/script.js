"use strict";
const markBtn = document.querySelector(".mark_read");
const highlight = document.querySelectorAll(".card_highlight");
const roundedRedDot = document.querySelectorAll(".rounded_red");

markBtn.addEventListener("click", () => {
  highlight.forEach((card) => card.classList.remove("card_highlight"));
  roundedRedDot.forEach((dot) => dot.classList.add("hidden"));
});
highlight.forEach((card, index) => {
  card.addEventListener("click", () => {
    card.classList.remove("card_highlight");
    roundedRedDot[index].classList.add("hidden");
  });
});
