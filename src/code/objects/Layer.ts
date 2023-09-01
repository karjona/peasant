import { camera, ctx } from "../data/Instances.js";
import tileMap from "../../img/tilemap.webp";

export class Layer {
  private img = new Image();

  cols: number = 40;
  rows: number = 20;
  tileSize: number = 16;
  tiles: number[] = new Array(this.cols * this.rows).fill(0);
  getTile: (col: number, row: number) => number;
  setTile: (col: number, row: number, tile: number) => void;
  render: () => void;

  constructor(tiles?: number[]) {
    if (tiles) {
      this.tiles = tiles;
    }

    this.img.src = tileMap;

    this.getTile = (col: number, row: number) => {
      return this.tiles[row * this.cols + col];
    };

    this.setTile = (col: number, row: number, tile: number) => {
      this.tiles[row * this.cols + col] = tile;
    };

    this.render = () => {
      const startCol = Math.ceil(camera.x / this.tileSize) - 1;
      const endCol = startCol + camera.width / this.tileSize + 1;
      const startRow = Math.ceil(camera.y / this.tileSize) - 1;
      const endRow = startRow + camera.height / this.tileSize + 1;
      const offsetX = -camera.x + startCol * this.tileSize;
      const offsetY = -camera.y + startRow * this.tileSize;

      for (let c = startCol; c < endCol; c++) {
        for (let r = startRow; r < endRow; r++) {
          const tile = this.getTile(c, r);
          const x = (c - startCol) * this.tileSize + offsetX;
          const y = (r - startRow) * this.tileSize + offsetY;
          if (tile !== 0) {
            ctx.drawImage(
              this.img,
              (tile - 1) * this.tileSize,
              0,
              this.tileSize,
              this.tileSize,
              Math.round(x),
              Math.round(y),
              this.tileSize,
              this.tileSize,
            );
          }
        }
      }
    };
  }
}
