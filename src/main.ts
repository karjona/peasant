const canvas = document.querySelector("#g") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

ctx.fillStyle = "red";
ctx.fillRect(0, 0, 100, 100);
