// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { add } from "@vpwtest/tester";

class WhiteNoiseProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
  }

  process(_inputs, outputs, _params) {
    const output = outputs[0];
    // @ts-ignore
    output.forEach((channel) => {
      for (let i = 0; i < channel.length; i++) {
        const res = Math.random() * 2 - 1;
        channel[i] = res;
      }
    });
    return true;
  }
}

registerProcessor("white-noise-proc", WhiteNoiseProcessor);
