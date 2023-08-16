import {
  msPerFrame,
  canvasWidth,
  canvasHeight,
  playerWidth,
  playerHeight,
} from "./code/data/Constants.ts";
import { GameConfig } from "./code/data/GameConfig.js";
import { ctx } from "./code/data/Instances.ts";
import drawText from "./code/functions/drawText.ts";

// set startTime to right now
GameConfig.startTime = Date.now();

function gameLoop() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  const time = Math.floor((Date.now() - GameConfig.startTime) / 1000);
  drawText(`Time: ${time.toString()}`, 0, 0);

  ctx.fillStyle = "red";
  ctx.fillRect(80, 32, playerWidth, playerHeight);
}

window.setInterval(gameLoop, 1000 / msPerFrame);
