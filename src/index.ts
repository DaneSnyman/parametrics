import { Swarm } from "./swarm";
import "./style.scss";
import { randomNum, setCanvasHeight } from "./utilities";
import anime from "animejs/lib/anime.es.js";

// Canvas Vars
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = true;
let swarm: Swarm;

// const animate = (): void => {
//   setCanvasHeight(canvas);
//   requestAnimationFrame(animate);
//   // ctx.fillStyle = `rgba(10, 10, 20, 0.3)`;
//   // ctx.fillRect(0, 0, canvas.width, canvas.height);
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   swarm.update();
// };

const init = (): void => {
  setCanvasHeight(canvas);
  swarm = new Swarm(canvas, ctx, 50);
  anime({
    loop: true,
    easing: "linear",
    direction: "alternate",
    update: function () {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      swarm.update();
    },
  });
};

init();
