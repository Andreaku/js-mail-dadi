const userResult = document.getElementById("user-result");
const cpuResult = document.getElementById("cpu-result");
const startGameBtn = document.getElementById("start-game");
const gameResult = document.getElementById("game-result");

let messageResult = "";

startGameBtn.addEventListener("click", function(){
  const randomUser = Math.floor(Math.random() * 6) + 1;
  const randomCPU = Math.floor(Math.random() * 6) + 1;
  if (randomUser > randomCPU) messageResult = `Complimenti, ${randomUser} è maggiore di ${randomCPU}. Hai Vinto!`;
  if (randomUser < randomCPU) messageResult = `Spiacente, ${randomUser} è minore di ${randomCPU}. Hai Perso!`;

  if (randomUser == randomCPU) messageResult = `Ops, ${randomUser} e ${randomCPU} sono uguali. Pareggio!`;
  userResult.innerText = randomUser;
  cpuResult.innerText = randomCPU;
  gameResult.innerText = messageResult;
})



