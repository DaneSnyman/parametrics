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

const randomColor = (alpha: boolean = false): string => {
  const r = randomNum(255);
  const g = randomNum(255);
  const b = randomNum(255);
  const a = Math.random();
  return `rgba(${r},${g},${b},${alpha ? a : 1})`;
};

export { randomNum, randomPosNeg, setCanvasHeight, average, randomColor };
