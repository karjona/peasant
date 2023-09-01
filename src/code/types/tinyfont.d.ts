declare module "tinyfont" {
  function initFont(
    font: string,
    canvasContext: CanvasRenderingContext2D,
  ): (text: string, x: number, y: number, size: number, color: string) => void;
  let font: string;
}
