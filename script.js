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

// function to fill the cells
const fillCells = function (elem) {
  let el = document.getElementById(elem);
  if (activePlayer == 0) {
    el.innerHTML = xMarkSrc;
    activePlayer = 1;
  } else {
    el.innerHTML = oMarkSrc;
    activePlayer = 0;
  }
};
// looping through each rows and adding an event listener to each cells
for (let i = 0; i < cells.length; i++) {
  let box = cells[i].id;
  cells[i].addEventListener(
    "click",
    function () {
      fillCells(box);
    },
    { once: true }
  );
}
