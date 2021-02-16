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
    this.amplitude = 300;
    this.color = color;
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
    this.ctx.lineWidth = 2;
    this.ctx.stroke();
  }

  private draw2(): void {
    this.ctx.beginPath();
    this.ctx.moveTo(
      this.x / 2 + this.sin(200) / 2,
      this.y * 1.5 + this.cos(200) / 2
    );
    this.ctx.lineTo(
      this.x / 2 + this.cos(200) / 2,
      this.y * 1.5 + this.cos(100) / 2
    );
    this.ctx.strokeStyle = this.color;
    this.ctx.stroke();
  }

  private draw3(): void {
    this.ctx.beginPath();
    this.ctx.moveTo(
      this.x / 2 + this.cos(100) / 2,
      this.y / 2 + this.cos(100) / 2
    );
    this.ctx.lineTo(
      this.x / 2 + this.cos(200) / 2,
      this.y / 2 + this.sin(200) / 2
    );
    this.ctx.strokeStyle = this.color;
    this.ctx.stroke();
  }

  private effect2(): void {
    this.ctx.beginPath();
    this.ctx.moveTo(
      this.x * 1.5 + this.cos(200) / 2,
      this.y + this.sin(100) / 2
    );
    this.ctx.lineTo(
      this.x * 1.5 + this.sin(100) / 2,
      this.y + this.cos(100) / 2
    );
    this.ctx.strokeStyle = this.color;
    this.ctx.stroke();
  }

  update(color?: string): void {
    this.increment += this.frequency;
    this.color = color ?? color;
    this.effect2();
    this.draw2();
    this.draw3();
    this.draw();
  }
}

export { Parametric };
