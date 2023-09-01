export class Entity {
  x: number;
  y: number;
  width: number;
  height: number;
  render: () => void;
  update: () => void;

  constructor(x = 0, y = 0, width = 16, height = 16) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.render = () => {};
    this.update = () => {};
  }
}
