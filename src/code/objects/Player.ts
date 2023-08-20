import { playerHeight, playerWidth } from "../data/Constants.js";

interface Player {
  x: number;
  y: number;
  screenX: number;
  screenY: number;
  width: number;
  height: number;
}

export function createPlayer(x: number, y: number): Player {
  return {
    x,
    y,
    screenX: 0,
    screenY: 0,
    width: playerWidth,
    height: playerHeight,
  };
}
