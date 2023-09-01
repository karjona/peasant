import {
  msPerFrame,
  canvasWidth,
  canvasHeight,
} from "./code/data/Constants.ts";
import { GameConfig } from "./code/data/GameConfig.ts";
import { canvas, ctx, entities, camera, map } from "./code/data/Instances.ts";
import { initControls, handleInput } from "./code/functions/Controls.ts";

GameConfig.startTime = Date.now();
initControls(canvas);

function gameLoop() {
  update();
  render();
}

function update() {
  handleInput();
  camera.update();

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
}

window.setInterval(gameLoop, msPerFrame);
