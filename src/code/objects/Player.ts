import { Entity } from "./Entity.js";
import { playerHeight, playerWidth } from "../data/Constants.js";
import { ctx, player } from "../data/Instances.js";

export class Player extends Entity {
  screenX: number;
  screenY: number;

  constructor(x: number, y: number) {
    super();
    this.x = x;
    this.y = y;
    this.screenX = 0;
    this.screenY = 0;
    this.width = playerWidth;
    this.height = playerHeight;

    this.render = () => {
      ctx.fillStyle = "red";
      ctx.fillRect(
        player.screenX - player.width / 2,
        player.screenY - player.height / 2,
        player.width,
        player.height,
      );
    };
  }
}
