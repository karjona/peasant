/* eslint-disable no-sparse-arrays */
import { zzfxM } from "../lib/zzfxm.ts";
import { zzfx, zzfxP } from "../lib/zzfx.ts";

export function playMusic() {
  zzfxP(...music).loop = true;
}

export function playClick() {
  zzfx(...[2.27, , 1782, , , 0, , 0.01, -4.6, -0.2, , , , , -1.2, , 0.03]);
}

const music = zzfxM(
  [[undefined, 0, 400]],
  [
    [
      [
        undefined,
        undefined,
        1,
        3,
        5,
        6,
        8,
        10,
        12,
        13,
        15,
        13,
        12,
        10,
        8,
        6,
        5,
        3,
        1,
      ],
    ],
  ],
  [0],
  90,
);
