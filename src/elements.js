import getPuzzleRequestsData from "./requests";
import Hangman from "./hangman";
export let puzzleEl = document.querySelector("#puzzle");
export let guessEl = document.querySelector("#guesses");
export let resetButton = document.querySelector("#reset");
export let game1;
export const renderData = () => {
  puzzleEl.innerHTML = "";
  let puzzleLength = game1.getPuzzle.split("");
  puzzleLength.forEach(ele => {
    let spanNode = document.createElement("span");
    spanNode.textContent = ele;
    puzzleEl.appendChild(spanNode);
  });
};
export const startGame = () => {
  getPuzzleRequestsData("2")
    .then(data => {
      game1 = new Hangman(data, 5);
      renderData();
      guessEl.textContent = `Guesses left: ${game1.remainingGuessed}`;
    })
    .catch(e => {
      guessEl.textContent = e;
    });
};
