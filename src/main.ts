import {
  msPerFrame,
  canvasWidth,
  canvasHeight,
  playerSpeed,
} from "./code/data/Constants.ts";
import { GameConfig } from "./code/data/GameConfig.ts";
import {
  canvas,
  ctx,
  player,
  keys,
  mouse,
  camera,
} from "./code/data/Instances.ts";
import drawText from "./code/functions/drawText.ts";
import { initControls } from "./code/functions/Controls.ts";
import { playMusic, playClick } from "./code/functions/Sound.ts";
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
  camera.update();
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

  const maxX = map.cols * map.tileSize;
  const maxY = map.rows * map.tileSize;
  player.x = Math.max(0, Math.min(player.x, maxX));
  player.y = Math.max(0, Math.min(player.y, maxY));

  if (mouse.Main) {
    if (!GameConfig.musicPlaying && GameConfig.soundEnabled) {
      GameConfig.musicPlaying = true;
      playMusic();
    }

    drawText("Click", mouse.x, mouse.y, "white");
    if (GameConfig.soundEnabled) {
      playClick();
    }
  }
}

function drawPlayer() {
  ctx.fillStyle = "red";
  ctx.fillRect(
    player.screenX - player.width / 2,
    player.screenY - player.height / 2,
    player.width,
    player.height,
  );
}

function render() {
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
  drawText(`Time: ${time.toString()}`, 0, 0);
}

window.setInterval(gameLoop, msPerFrame);
