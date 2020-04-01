import { startGame, game1, renderData, guessEl, resetButton } from "./elements";

startGame();
window.addEventListener("keypress", e => {
  let guess = String.fromCharCode(e.keyCode);
  game1.Guess(guess);
  renderData();
  guessEl.textContent = game1.getBackStatus;
});

resetButton.addEventListener("click", startGame);
