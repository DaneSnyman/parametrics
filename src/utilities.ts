interface RGBA {
  r: number;
  g: number;
  b: number;
  a?: number;
}

const randomNum = (max: number, min?: number): number => {
  return Math.floor(
    min ? Math.random() * (max - min) + min : Math.random() * max
  );
};

const randomPosNeg = (num: number): number => {
  return Math.random() > 0.5 ? num : -num;
};

const setCanvasHeight = (canvas: HTMLCanvasElement) => {
  if (canvas.width !== innerWidth || canvas.height !== innerHeight) {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
  }
};

const average = (nums: Uint8Array): number => {
  return nums.reduce((a, b) => a + b) / nums.length;
};

const randomColor = (alpha: boolean = false): RGBA => {
  const r = randomNum(255);
  const g = randomNum(255);
  const b = randomNum(255);
  const a = alpha ? Math.random() : 1;
  const color: RGBA = { r, g, b, a };
  return color;
};

export { randomNum, randomPosNeg, setCanvasHeight, average, randomColor, RGBA };
