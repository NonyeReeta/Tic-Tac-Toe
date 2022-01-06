"use strict";
// selecting the elements
const scoreElX = document.querySelector("#score--x");
const scoreElO = document.querySelector("#score--o");
const scoreElTie = document.querySelector("#score--tie");
const resetBtn = document.getElementById("reset");
const gameBoard = document.querySelector("#board");
const cells = document.querySelectorAll(".columns");
console.log(cells.length);
let activePlayer, currentScoreX, currentScoreO, currentScoreTie, gameOn;

const cellSpot = document.createElement("img");
cellSpot.className = "mark";

const xMarkSrc = "<img id='letter-x' src='letter1.png' alt='x' class='mark'>";
const oMarkSrc = "<img id='letter-o' src='letter2.png' alt='o' class='mark'>";
// // setting the score  elements to zero
// scoreElX.value = 0;
// scoreElO.value = 0;
// scoreElTie.value = 0;

// game init/restarting function
const init = function () {
  gameOn = true;
  activePlayer = 0;
  scoreElX.textContent = 0;
  scoreElO.textContent = 0;
  scoreElTie.textContent = 0;
  currentScoreO = 0;
  currentScoreTie = 0;
  currentScoreX = 0;
};

init();

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

// to do: check no winner. why the loop wont break out.
const xWin = function () {
  const x = document.getElementById("letter-x").id;
  if (
    (cells[0].innerHTML.substring(9, 17) === x &&
      cells[1].innerHTML.substring(9, 17) === x &&
      cells[2].innerHTML.substring(9, 17) === x) ||
    (cells[3].innerHTML.substring(9, 17) === x &&
      cells[4].innerHTML.substring(9, 17) === x &&
      cells[5].innerHTML.substring(9, 17) === x) ||
    (cells[6].innerHTML.substring(9, 17) === x &&
      cells[7].innerHTML.substring(9, 17) === x &&
      cells[8].innerHTML.substring(9, 17) === x) ||
    (cells[0].innerHTML.substring(9, 17) === x &&
      cells[3].innerHTML.substring(9, 17) === x &&
      cells[6].innerHTML.substring(9, 17) === x) ||
    (cells[1].innerHTML.substring(9, 17) === x &&
      cells[4].innerHTML.substring(9, 17) === x &&
      cells[7].innerHTML.substring(9, 17) === x) ||
    (cells[2].innerHTML.substring(9, 17) === x &&
      cells[5].innerHTML.substring(9, 17) === x &&
      cells[8].innerHTML.substring(9, 17) === x) ||
    (cells[0].innerHTML.substring(9, 17) === x &&
      cells[4].innerHTML.substring(9, 17) === x &&
      cells[8].innerHTML.substring(9, 17) === x) ||
    (cells[2].innerHTML.substring(9, 17) === x &&
      cells[4].innerHTML.substring(9, 17) === x &&
      cells[6].innerHTML.substring(9, 17) === x)
  ) {
    return true;
  } else {
    return false;
  }
};
const oWin = function () {
  const o = document.getElementById("letter-o").id;
  if (
    (cells[0].innerHTML.substring(9, 17) === o &&
      cells[1].innerHTML.substring(9, 17) === o &&
      cells[2].innerHTML.substring(9, 17) === o) ||
    (cells[3].innerHTML.substring(9, 17) === o &&
      cells[5].innerHTML.substring(9, 17) === o &&
      cells[5].innerHTML.substring(9, 17) === o) ||
    (cells[6].innerHTML.substring(9, 17) === o &&
      cells[7].innerHTML.substring(9, 17) === o &&
      cells[8].innerHTML.substring(9, 17) === o) ||
    (cells[0].innerHTML.substring(9, 17) === o &&
      cells[3].innerHTML.substring(9, 17) === o &&
      cells[6].innerHTML.substring(9, 17) === o) ||
    (cells[1].innerHTML.substring(9, 17) === o &&
      cells[4].innerHTML.substring(9, 17) === o &&
      cells[7].innerHTML.substring(9, 17) === o) ||
    (cells[2].innerHTML.substring(9, 17) === o &&
      cells[5].innerHTML.substring(9, 17) === o &&
      cells[8].innerHTML.substring(9, 17) === o) ||
    (cells[0].innerHTML.substring(9, 17) === o &&
      cells[4].innerHTML.substring(9, 17) === o &&
      cells[8].innerHTML.substring(9, 17) === o) ||
    (cells[2].innerHTML.substring(9, 17) === o &&
      cells[4].innerHTML.substring(9, 17) === o &&
      cells[6].innerHTML.substring(9, 17) === o)
  ) {
    return true;
  } else {
    return false;
  }
};
const cellFilled = (selector) => {
  return Array.from(document.querySelectorAll(selector)).every(
    (cell) => cell.textContent.trim() !== ""
  );
};

const checkwinner = function () {
  if (xWin()) {
    currentScoreX += 1;
    scoreElX.textContent = currentScoreX;
    console.log("X wins");
  } else if (oWin()) {
    currentScoreO += 1;
    scoreElO.textContent = currentScoreO;
    console.log("O wins");
  } else {
    console.log(cellFilled("#board td"));
  }
};

// looping through each rows and adding an event listener to each cells
for (let i = 0; i < cells.length; i++) {
  let box = cells[i].id;
  cells[i].addEventListener(
    "click",
    function () {
      fillCells(box);
      checkwinner();
    },
    { once: true }
  );
}

resetBtn.addEventListener("click", function () {
  window.location.href = "index.html";
});
