import {
  msPerFrame,
  canvasWidth,
  canvasHeight,
} from "./code/data/Constants.ts";
import { GameConfig } from "./code/data/GameConfig.ts";
import { canvas, ctx, entities, camera } from "./code/data/Instances.ts";
import drawText from "./code/functions/drawText.ts";
import { initControls, handleInput } from "./code/functions/Controls.ts";
import tileMap from "./img/tilemap.webp";
import { map } from "./code/modules/Map/Map.ts";

GameConfig.startTime = Date.now();
initControls(canvas);

const img = new Image();
img.src = tileMap;

let time = 0;

function gameLoop() {
  update();
  render();
  handleInput();
  camera.update();
}

function update() {
  time = Math.floor((Date.now() - GameConfig.startTime) / 1000);

  entities.forEach((entity) => {
    entity.update();
  });
}

function render() {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);

  const startCol = Math.ceil(camera.x / map.tileSize) - 1;
  const endCol = startCol + camera.width / map.tileSize + 1;
  const startRow = Math.ceil(camera.y / map.tileSize) - 1;
  const endRow = startRow + camera.height / map.tileSize + 1;
  const offsetX = -camera.x + startCol * map.tileSize;
  const offsetY = -camera.y + startRow * map.tileSize;

  for (let c = startCol; c < endCol; c++) {
    for (let r = startRow; r < endRow; r++) {
      const tile = map.getTile(c, r);
      const x = (c - startCol) * map.tileSize + offsetX;
      const y = (r - startRow) * map.tileSize + offsetY;
      if (tile !== 0) {
        ctx.drawImage(
          img,
          (tile - 1) * map.tileSize,
          0,
          map.tileSize,
          map.tileSize,
          Math.round(x),
          Math.round(y),
          map.tileSize,
          map.tileSize,
        );
      }
    }
  }

  entities.forEach((entity) => {
    entity.render();
  });

  drawText(`Time: ${time.toString()}`, 0, 0);
}

window.setInterval(gameLoop, msPerFrame);
