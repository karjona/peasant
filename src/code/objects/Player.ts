import { playerHeight, playerWidth } from "../data/Constants.js";

interface Player {
  x: number;
  y: number;
  width: number;
  height: number;
}

export function createPlayer(x: number, y: number): Player {
  return {
    x,
    y,
    width: playerWidth,
    height: playerHeight,
  };
}
