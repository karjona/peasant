import { initFont, font } from "tinyfont";
import { createPlayer } from "../objects/Player.js";
import type Key from "../types/Keys.d.ts";
import type Mouse from "../types/Mouse.d.ts";
import { playerHeight, playerWidth } from "./Constants.js";

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

export const mouse: Mouse = {
  x: 0,
  y: 0,
  Main: false,
};

export const player = createPlayer(
  canvas.width / 2 - playerWidth / 2,
  canvas.height / 2 - playerHeight / 2,
);
