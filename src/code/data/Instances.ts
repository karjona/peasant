import { initFont, font } from "tinyfont";
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
