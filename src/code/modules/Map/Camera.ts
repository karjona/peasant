import { player } from "../../data/Instances.js";
import { map } from "./Map.js";

interface Camera {
  x: number;
  y: number;
  width: number;
  height: number;
  maxX: number;
  maxY: number;
  update: () => void;
}

export function createCamera(width: number, height: number): Camera {
  return {
    x: 0,
    y: 0,
    width,
    height,
    maxX: map.cols * map.tileSize - width,
    maxY: map.rows * map.tileSize - height,
    update() {
      player.screenX = this.width / 2;
      player.screenY = this.height / 2;
      this.x = player.x - this.width / 2;
      this.y = player.y - this.height / 2;

      this.x = Math.max(0, Math.min(this.x, this.maxX));
      this.y = Math.max(0, Math.min(this.y, this.maxY));

      if (player.x < this.width / 2 || player.x > this.maxX + this.width / 2) {
        player.screenX = player.x - this.x;
      }

      if (
        player.y < this.height / 2 ||
        player.y > this.maxY + this.height / 2
      ) {
        player.screenY = player.y - this.y;
      }
    },
  };
}
