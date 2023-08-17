import { initFont, font } from "tinyfont";
import { createPlayer } from "../objects/Player.js";
import type Key from "../types/Keys.d.ts";

export const canvas = document.querySelector("#g") as HTMLCanvasElement;
export const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

export const tinyfont = initFont(font, ctx);

export const keys: Key = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRight: false,
  KeyW: false,
  KeyS: false,
  KeyA: false,
  KeyD: false,
};

// create player in the center of the canvas
// keep in mind that the player width is 16 and the height is 32

export const player = createPlayer(
  canvas.width / 2 - 8,
  canvas.height / 2 - 16,
);
