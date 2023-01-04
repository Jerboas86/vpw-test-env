<script lang="ts">
  import WhiteNoiseProcUrl from "./WhiteNoiseProc?worker&url";
  const ctxt = new AudioContext();
  ctxt.audioWorklet
    .addModule(WhiteNoiseProcUrl)
    .then(() => {
      const white = new AudioWorkletNode(ctxt, "white-noise-proc");
      white.connect(ctxt.destination);
    })
    .catch((e) => console.log(e));

  function start() {
    ctxt.resume();
  }
</script>

<button on:click={start}>Start</button>
