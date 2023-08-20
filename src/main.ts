import {
  msPerFrame,
  canvasWidth,
  canvasHeight,
  playerSpeed,
} from "./code/data/Constants.ts";
import { GameConfig } from "./code/data/GameConfig.ts";
import { canvas, ctx, player } from "./code/data/Instances.ts";
import drawText from "./code/functions/drawText.ts";
import { keys, mouse } from "./code/data/Instances.ts";
import { initControls } from "./code/functions/Controls.ts";
import tileMap from "./img/tilemap.webp";
import { map } from "./code/modules/Map/Map.ts";

GameConfig.startTime = Date.now();
initControls(canvas);

const img = new Image();
img.src = tileMap;

let time = 0;

function gameLoop() {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  time = Math.floor((Date.now() - GameConfig.startTime) / 1000);

  render();
  drawPlayer();
  handleInput();
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

  if (mouse.Main) {
    drawText("Click", mouse.x, mouse.y, "white");
  }
}

function drawPlayer() {
  ctx.fillStyle = "red";
  ctx.fillRect(player.x, player.y, player.width, player.height);
}

function render() {
  for (let c = 0; c < map.cols; c++) {
    for (let r = 0; r < map.rows; r++) {
      const tile = map.getTile(c, r);
      if (tile !== 0) {
        ctx.drawImage(
          img,
          (tile - 1) * map.tileSize,
          0,
          map.tileSize,
          map.tileSize,
          c * map.tileSize,
          r * map.tileSize,
          map.tileSize,
          map.tileSize,
        );
      }
    }
  }
  drawText(`Time: ${time.toString()}`, 0, 0);
}

window.setInterval(gameLoop, msPerFrame);
