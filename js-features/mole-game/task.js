let getHole = index => document.getElementById(`hole${index}`);
let deadMoles = document.getElementById('dead');
let lostMoles = document.getElementById('lost');
let winG = parseInt(deadMoles.textContent);
let lostG = parseInt(lostMoles.textContent);

for (let i = 1; i <= 9; i++) {
  getHole(i).onclick = function () {
    if (this.className.includes('hole_has-mole')) {
        winG += 1;
        deadMoles.textContent = winG;
    } else {
        lostG += 1;
        lostMoles.textContent = lostG;
    }
    checkGameWinner(winG, lostG);
  };
}

function checkGameWinner(deadMoles, lostMoles) {
  console.log(deadMoles, lostMoles);
  if (deadMoles === 10) {
    alert("Победа!");
    location.reload();
  } else if (lostMoles === 5) {
    alert("Проигрыш!");
    location.reload();
  };
};

