import { Entity } from "../../objects/Entity.js";
import drawText from "../../functions/drawText.js";
import { GameConfig } from "../../data/GameConfig.js";

export class Scoreboard extends Entity {
  private time: number = 0;

  constructor() {
    super();

    this.update = () => {
      this.time = Math.floor((Date.now() - GameConfig.startTime) / 1000);
    };

    this.render = () => {
      drawText(`Time: ${this.time.toString()}`, 0, 0);
    };
  }
}
