<script lang="ts">
  import MyWorker from "./worker?worker";

  const worker = new MyWorker();
</script>

<button
  on:click={() => {
    worker.postMessage({});
  }}>Open the console</button
>
