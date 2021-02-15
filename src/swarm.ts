import { Parametric } from "./parametric";
import { randomColor } from "./utilities";

class Swarm {
  swarmArr: Parametric[] = [];
  nAmount: number;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

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
    const color = randomColor();
    for (let i = 0; i < this.nAmount; i++) {
      const waveLength = i / 1000;
      this.swarmArr.push(
        new Parametric(this.canvas, this.ctx, waveLength, color)
      );
    }
  }

  update(): void {
    this.swarmArr.forEach((member) => {
      member.update();
    });
  }
}
export { Swarm };
