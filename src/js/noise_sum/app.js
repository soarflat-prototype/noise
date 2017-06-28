import Canvas from '../modules/Canvas';
import getRandomArbitrary from '../modules/getRandomArbitrary';

class noiseCanvas extends Canvas {
  constructor(option) {
    super(option);
    this.amplitude = option.amplitude;
    this.frequency = option.frequency;
  }

  draw() {
    const widthPerPoint = this.cw / this.frequency;
    const halfHeight = this.ch / 2;
    const max = (this.amplitude / 2);
    const min = -(this.amplitude / 2);

    console.log('max', max);
    console.log('min', min);

    this.ctx.beginPath();
    this.ctx.moveTo(0, halfHeight);
    for (let i = 1; i < this.frequency + 1; i += 1) {
      this.ctx.lineTo(widthPerPoint * i, halfHeight - getRandomArbitrary(min, max));
    }
    this.ctx.stroke();

    this.ctx.lineWidth = 2;
    this.ctx.strokeRect(0, 0, this.cw, this.ch);
  }
}

class NoiseSum {
  constructor() {
    this.canvases = [];
    this.setupCanvas();
  }

  setupCanvas() {
    const amplitudes = [128, 64, 32, 16, 8, 4];
    const frequencies = [4, 8, 16, 32, 64, 128];

    for (let i = 0, length = 6; i < length; i += 1) {
      this.canvases.push(
        new noiseCanvas({
          el: `canvas${i + 1}`,
          width: window.innerWidth / 3,
          height: window.innerHeight / 3,
          amplitude: amplitudes[i],
          frequency: frequencies[i],
        }),
      );
    }

    // this.noiseSumCanvas = new Canvas({
    //   el: `canvas7`,
    //   width: window.innerWidth / 3,
    //   height: window.innerHeight / 3,
    // });
  }

  draw() {
    this.canvases.forEach((canvas) => {
      canvas.draw();
    });
  }
}

const noiseSum = new NoiseSum();

noiseSum.draw();
