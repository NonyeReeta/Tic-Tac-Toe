"use strict";
// selecting the elements
const scoreElX = document.getElementById("score--x");
const scoreElO = document.getElementById("score--o");
const scoreElTie = document.getElementById("score--tie");
let cellSpot, activePlayer, scores, tie, gameOn;

cellSpot = document.createElement("img");
cellSpot.className = "mark";

const xMarkSrc = "<img src='letter1.png' alt='x' class='mark'/>";
const oMarkSrc = "<img src='letter2.png' alt='o' class='mark'/>";
// setting the score  elements to zero
scoreElX.textContent = 0;
scoreElO.textContent = 0;
scoreElTie.textContent = 0;

// creating a function that checks iff all cells have been filled
const cellFilled = function () {
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].textContent !== "") {
      return true;
    } else {
      return false;
    }
  }
};
// game init/restarting function
const init = function () {
  gameOn = true;
  activePlayer = 0;
  scores = [0, 0, 0];
  scoreElX.textContent = 0;
  scoreElO.textContent = 0;
  scoreElTie.textContent = 0;
};

init();

// query selecting all cells in the table
let cells = document.querySelectorAll(".columns");

// looping through each rows and adding an event listener to each cells
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function () {
    if (activePlayer == 0 && cellFilled() === false) {
      cells[i].innerHTML = xMarkSrc;
      activePlayer = 1;
    } else if (activePlayer == 1 && cellFilled() === false) {
      cells[i].innerHTML = oMarkSrc;
      activePlayer = 0;
    }
  });
}
