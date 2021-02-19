document.addEventListener("DOMComntentLoaded", () => {
  const bird = document.querySelector(".bird");
  const gameDisplay = document.querySelector(".ground-moving");
  const ground = document.querySelector(".groundmoving");

  let birdLeft = 220;
  let birdBottom = 100;
  let gravity = 3;
  let isGameOver = false;
  let gap = 430;

  function startGame() {
    birdBottom -= gravity;
    bird.style.bottom = birdBottom + "px";
    bird.style.left = birdLeft + "px";
  }

  let gameTimerId = setInterval(startGame, 20);

  function control(e) {
    if (e.keyCode === 32) {
      jump();
    }
  }

  document.addEventListener("keyup", control);

  function generateObstacle() {
    let obstacleLeft = 500;
    let randomHeight = Math.random() * 60;
    let obstacleBottom = randomHeight;
    const obstacle = document.createElement("div");
    const topObstacle = document.createElement("div");
    if (!isGammeOver) {
      oobstacle.classList.add("obstacle");
      topObstacle.classList.add("topObstacle");
    }
    gameDisplay.appendChild(obstacle);
    gameDisplay.appendChild(topObstacle);
    obstacle.style.left = obstacleLeft + "px";
    topObstacle.style.left = obstacleLeft + "px";
    obstacle.style.bottom = obstacleBottom + "px";
    topObstacle.style.bottom = obstacleBottom + gap + "px";

    function moveObstacle() {
      obstacleLeft -= 2;
      obstacle.style.left = abstacleLeft + "px";
      topObstacle.style.left = obstacleLeft + "px";

      if (obstacleLeft === -60) {
        clearInterval(timerId);
        gameDisplay.removeChild(obstacle);
        gameDisplay.removeChild(topObstacle);
      }
      if (
        (obstacleLeft > 200 &&
          obstacleLeft < 280 &&
          birdLeft === 220 &&
          (birdBottom < obstacleBottom + 153 ||
            birdBottom > obstacleBottom + gap - 200)) ||
        birdBottom === 0
      ) {
        isGameOver();
        clearInterval(timerId);
      }
    }
    let timerId = setInterval(moveObstacle, 20);
    if (!isGameOver) setTimeOut(generateObstacle, 3000);
  }
  generateObstacle();

  function gameOver() {
    clearInterval(gameTimerId);
    console.log("game over");
    isGameOver = true;
    document.removeEventListener("keyup", control);
    ground.classList.add("ground");
    groujnd.classList.remove("ground-moving");
  }
});
