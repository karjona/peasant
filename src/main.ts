import {
  msPerFrame,
  canvasWidth,
  canvasHeight,
} from "./code/data/Constants.ts";
import { GameConfig } from "./code/data/GameConfig.ts";
import { canvas, ctx, entities, camera, map } from "./code/data/Instances.ts";
import drawText from "./code/functions/drawText.ts";
import { initControls, handleInput } from "./code/functions/Controls.ts";

GameConfig.startTime = Date.now();
initControls(canvas);

let time = 0;

function gameLoop() {
  update();
  render();
}

function update() {
  handleInput();
  camera.update();

  time = Math.floor((Date.now() - GameConfig.startTime) / 1000);

  entities.forEach((entity) => {
    entity.update();
  });
}

function render() {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  map.render();

  entities.forEach((entity) => {
    entity.render();
  });

  drawText(`Time: ${time.toString()}`, 0, 0);
}

window.setInterval(gameLoop, msPerFrame);
