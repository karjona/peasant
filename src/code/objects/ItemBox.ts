import { Entity } from "./Entity.js";
import { Layer } from "./Layer.js";
import { ctx } from "../data/Instances.js";

export class ItemBox extends Entity {
  screenX: number;
  screenY: number;
  constructor(x: number, y: number, layer: Layer) {
    super(x, y);
    this.screenX = 0;
    this.screenY = 0;
    this.width = 16;
    this.height = 16;

    layer.setTile(x, y, 3);

    this.render = () => {
      ctx.fillStyle = "blue";
      ctx.fillRect(this.screenX, this.screenY, this.width, this.height);
    };
  }
}
