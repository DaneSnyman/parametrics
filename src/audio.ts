// Setup the new Howl.
import { Howler, Howl } from "howler";

class AudioC {
  private readonly jamSecret = "506bbfa5efdcbfe6aa7c867d96b76bce";
  private readonly jamID = 85982307;
  tracks: string[] | string;
  stream: Howl;
  analyser: AnalyserNode;
  bufferLength: number;
  dataArr: Uint8Array;

  constructor(tracks: string[] | string) {
    this.tracks = tracks;
    this.stream = this.createHowl();
  }

  private createHowl(): Howl {
    return new Howl({
      src: this.tracks,
      autoplay: true,
      format: ["mp3", "aac"],
    });
  }

  private connectAnalyser(): void {
    this.analyser = Howler.ctx.createAnalyser();
    Howler.masterGain.connect(this.analyser);
    this.analyser.connect(Howler.ctx.destination);
    this.analyser.fftSize = 32;
    this.bufferLength = this.analyser.frequencyBinCount;
    this.dataArr = new Uint8Array(this.bufferLength);
    this.analyser.getByteTimeDomainData(this.dataArr);
  }

  private async getSong() {
    const url = `https://api.jamendo.com/v3.0/tracks/file/?client_id=${this.jamID}&id=10`;
    const res = await fetch(url);
    return res.url;
  }

  play(): void {
    this.stream.play();
    this.connectAnalyser();
    this.getSong();
  }

  getAudioData(): Uint8Array {
    this.analyser.getByteTimeDomainData(this.dataArr);
    return this.dataArr;
  }
}

export { AudioC };
