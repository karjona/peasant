import { keys, mouse } from "../data/Instances.js";

export function initControls(canvas: HTMLCanvasElement) {
  canvas.addEventListener("click", handleClick);
  canvas.addEventListener("mousedown", (event) =>
    handleMouseButton(event, true),
  );
  canvas.addEventListener("mouseup", (event) =>
    handleMouseButton(event, false),
  );
  canvas.addEventListener("mousemove", (event) =>
    handleMouseMovement(event, canvas),
  );

  canvas.addEventListener("keydown", (event) => handleKeyboard(event, true));
  canvas.addEventListener("keyup", (event) => handleKeyboard(event, false));
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

function handleMouseButton(event: MouseEvent, pressed: boolean) {
  if (event.button === 0) {
    mouse["Main"] = pressed;
  }
}

function handleMouseMovement(event: MouseEvent, canvas: HTMLCanvasElement) {
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;
  mouse.x = Math.floor((event.pageX - canvas.offsetLeft) * scaleX);
  mouse.y = Math.floor((event.pageY - canvas.offsetTop) * scaleY);
}

function handleClick(event: MouseEvent) {
  event.preventDefault();
  event.stopPropagation();
  (event.currentTarget as HTMLCanvasElement).focus();
}
