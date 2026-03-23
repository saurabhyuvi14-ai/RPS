const buttons = document.querySelectorAll("button");
const result1 = document.getElementById("result");
const playerscore = document.getElementById("user-score");
const computerscore = document.getElementById("computer-score");
let playerscore1 = 0;
let computerscore1 = 0;
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const result = playround(button.id, computerplay());
    result1.textContent = result;
    
  });
});
function computerplay() {
  const choices = ["rock", "paper", "scissors"];
  const randomchoice = Math.floor(Math.random() * choices.length);
  return choices[randomchoice];
}
function playround(playerselection, computerselection) {
  if (playerselection === computerselection) {
    return "It's a tie!";
  } else if (
    (playerselection === "rock" && computerselection === "scissors") ||
    (playerselection === "paper" && computerselection === "rock") ||
    (playerselection === "scissors" && computerselection === "paper")
  ) {
    playerscore1++;
    playerscore.textContent = playerscore1;
    return "AAP Jeet Gye! " + playerselection + " beats " + computerselection;
  } else {
    computerscore1++;
    computerscore.textContent = computerscore1;
    return "AAP Haar Gye! " + computerselection + " beats " + playerselection;
  }
}