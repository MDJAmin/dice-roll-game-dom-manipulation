let rolls = 0;
let wins = 0;

document.getElementById("rollBtn").addEventListener("click", rollDice);

function rollDice() {
  let dice = document.getElementById("dice");
  let result = document.getElementById("result");
  result.innerHTML = "Rolling... 🎲";

  dice.classList.add("roll");
  setTimeout(() => dice.classList.remove("roll"), 300);

  let roll = Math.floor(Math.random() * 6) + 1;
  dice.innerHTML = getDiceFace(roll);

  rolls++;
  if (roll === 6) {
    result.innerHTML = "🎉 You rolled a 6! Congratulations!";
    wins++;
  } else {
    result.innerHTML = "You rolled a " + roll;
  }
  updateScore();
}

function getDiceFace(number) {
  switch (number) {
    case 1:
      return "⚀";
    case 2:
      return "⚁";
    case 3:
      return "⚂";
    case 4:
      return "⚃";
    case 5:
      return "⚄";
    case 6:
      return "⚅";
    default:
      return "🎲";
  }
}

function updateScore() {
  document.getElementById("score").innerHTML = `Rolls: ${rolls} | Wins: ${wins}`;
}
