import {
  msPerFrame,
  canvasWidth,
  canvasHeight,
  playerSpeed,
} from "./code/data/Constants.ts";
import { GameConfig } from "./code/data/GameConfig.js";
import { canvas, ctx, player } from "./code/data/Instances.ts";
import drawText from "./code/functions/drawText.ts";
import { keys } from "./code/data/Instances.ts";
import { initControls } from "./code/functions/Controls.ts";

// set startTime to right now
GameConfig.startTime = Date.now();
initControls(canvas);

function gameLoop() {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);

  const time = Math.floor((Date.now() - GameConfig.startTime) / 1000);
  drawText(`Time: ${time.toString()}`, 0, 0);

  handleInput();
  drawPlayer();
}

function handleInput() {
  if (keys.ArrowUp || keys.KeyW) {
    player.y -= playerSpeed;
  }

  if (keys.ArrowDown || keys.KeyS) {
    player.y += playerSpeed;
  }

  if (keys.ArrowLeft || keys.KeyA) {
    player.x -= playerSpeed;
  }

  if (keys.ArrowRight || keys.KeyD) {
    player.x += playerSpeed;
  }
}
function drawPlayer() {
  ctx.fillStyle = "red";
  ctx.fillRect(player.x, player.y, player.width, player.height);
}

window.setInterval(gameLoop, 1000 / msPerFrame);
