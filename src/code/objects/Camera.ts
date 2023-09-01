import { player } from "../data/Instances.ts";
import { map } from "../modules/Map/Map.ts";

export class Camera {
  x: number;
  y: number;
  maxX: number;
  maxY: number;
  width: number;
  height: number;
  update: () => void;
  constructor(width: number, height: number) {
    this.x = 0;
    this.y = 0;
    this.width = width;
    this.height = height;
    this.maxX = map.cols * map.tileSize - width;
    this.maxY = map.rows * map.tileSize - height;

    this.update = () => {
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
    };
  }
}
