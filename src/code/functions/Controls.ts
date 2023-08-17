import { keys } from "../data/Instances.js";

export function initControls(canvas: HTMLCanvasElement) {
  canvas.addEventListener("keydown", (e) => handleKeyboard(e, true));
  canvas.addEventListener("keyup", (e) => handleKeyboard(e, false));
}

function handleKeyboard(event: KeyboardEvent, pressed: boolean) {
  event.preventDefault();
  event.stopPropagation();

  if (
    event.code === "ArrowUp" ||
    event.code === "ArrowDown" ||
    event.code === "ArrowLeft" ||
    event.code === "ArrowRight" ||
    event.code === "KeyW" ||
    event.code === "KeyS" ||
    event.code === "KeyA" ||
    event.code === "KeyD"
  ) {
    keys[event.code] = pressed;
  }
}
