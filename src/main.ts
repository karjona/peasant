import {
  msPerFrame,
  canvasWidth,
  canvasHeight,
  playerWidth,
  playerHeight,
} from "./code/data/Constants.ts";
import { GameConfig } from "./code/data/GameConfig.js";
import { canvas, ctx } from "./code/data/Instances.ts";
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

  if (keys["ArrowUp"]) {
    drawText("Up", 0, 16);
  }

  ctx.fillStyle = "red";
  ctx.fillRect(80, 32, playerWidth, playerHeight);
}

window.setInterval(gameLoop, 1000 / msPerFrame);
