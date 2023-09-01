import { tinyfont } from "../data/Instances.js";

export default function drawText(
  text: string,
  x: number,
  y: number,
  color?: string,
  size?: number,
) {
  size = size ? size : 5;
  color = color ? color : "white";

  tinyfont(text.toUpperCase(), x, y, size, color);
}
