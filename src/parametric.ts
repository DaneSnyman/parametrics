import { Shape } from "./shape";

class Parametric extends Shape {
  x: number;
  y: number;
  frequency: number;
  increment: number;
  waveLength: number;
  amplitude: number;
  color: string;

  constructor(
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    waveLength: number,
    color: string
  ) {
    super(canvas, ctx);
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.frequency = 0.03;
    this.increment = this.frequency;
    this.waveLength = waveLength;
    this.amplitude = 800;
    this.color = color;
  }

  private randomCosSin(randomInt: number): number {
    const internalSum = randomInt * this.waveLength + this.increment;
    return Math.random() > 0.5
      ? Math.sin(internalSum) * this.waveLength
      : Math.cos(internalSum) * this.waveLength;
  }

  private sin = (i: number): number => {
    return Math.sin(i * this.waveLength + this.increment) * this.amplitude;
  };

  private cos = (i: number): number => {
    return Math.cos(i * this.waveLength + this.increment) * this.amplitude;
  };

  private draw(): void {
    this.ctx.beginPath();
    this.ctx.moveTo(this.x + this.sin(100), this.y + this.cos(100));
    this.ctx.lineTo(this.x + this.cos(200), this.y + this.cos(200));
    this.ctx.strokeStyle = this.color;
    this.ctx.lineWidth = 5;
    this.ctx.stroke();
  }

  update(): void {
    this.increment += this.frequency;

    this.draw();
  }
}

export { Parametric };
