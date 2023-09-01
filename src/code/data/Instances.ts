import { initFont, font } from "tinyfont";
import { Entity } from "../objects/Entity.js";
import { Player } from "../objects/Player.js";
import { Map } from "../objects/Map.js";
import { Camera } from "../objects/Camera.js";
import type Key from "../types/Keys.d.ts";
import type Mouse from "../types/Mouse.d.ts";
import { playerHeight, playerWidth } from "./Constants.js";
import { Scoreboard } from "../modules/Scoreboard/Scoreboard.js";

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

export const entities: Entity[] = [];

export const player = new Player(
  canvas.width / 2 - playerWidth / 2,
  canvas.height / 2 - playerHeight / 2,
);
entities.push(player);

export const map = new Map();
export const camera = new Camera(320, 180);

export const scoreboard = new Scoreboard();
entities.push(scoreboard);
