import { Parametric } from "./parametric";
import { randomColor, randomNum, randomPosNeg, RGBA } from "./utilities";

class Swarm {
  private swarmArr: Parametric[] = [];
  private nAmount: number;
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private color: RGBA;
  private colorSpeeds: RGBA;

  constructor(
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    nAmount: number
  ) {
    this.nAmount = nAmount;
    this.canvas = canvas;
    this.ctx = ctx;
    this.spawnSwarm();
  }

  private spawnSwarm(): void {
    this.color = randomColor();
    this.colorSpeeds = {
      r: randomPosNeg(randomNum(2, 1)),
      g: randomPosNeg(randomNum(2, 1)),
      b: randomPosNeg(randomNum(2, 1)),
    };
    for (let i = 0; i < this.nAmount; i++) {
      const waveLength = i / 1000;
      this.swarmArr.push(
        new Parametric(
          this.canvas,
          this.ctx,
          waveLength,
          this.getColorString(this.color)
        )
      );
    }
  }

  private getColorString(color: RGBA): string {
    const { r, g, b, a } = color;
    return `rgba(${r},${g},${b},${a})`;
  }

  private updateColor(): void {
    if (this.color.r <= 15 || this.color.r >= 240) {
      this.colorSpeeds.r = -this.colorSpeeds.r;
    }

    if (this.color.g <= 15 || this.color.g >= 240) {
      this.colorSpeeds.g = -this.colorSpeeds.g;
    }

    if (this.color.b <= 15 || this.color.b >= 240) {
      this.colorSpeeds.b = -this.colorSpeeds.b;
    }

    this.color.r += this.colorSpeeds.r;
    this.color.g += this.colorSpeeds.g;
    this.color.b += this.colorSpeeds.b;
  }

  update(): void {
    this.updateColor();
    this.swarmArr.forEach((member) => {
      member.update(this.getColorString(this.color));
    });
  }
}
export { Swarm };
