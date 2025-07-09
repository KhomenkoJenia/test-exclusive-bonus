window.addEventListener("load", function () {
  const loader = document.getElementById("preloader");
  loader.style.opacity = "0";
  setTimeout(() => {
    loader.style.display = "none";
  }, 500);
});

let dice = document.getElementById("dice");
var outputDiv = document.getElementById("diceResult");

function rollDice() {
  let result = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  dice.dataset.side = result;
  dice.classList.toggle("reRoll");
}

dice.addEventListener("click", rollDice);
