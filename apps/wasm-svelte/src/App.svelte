<script lang="ts">
  import Window from "./lib/window/Window.svelte";
  import Worker from "./lib/worker/Worker.svelte";
  import Worklet from "./lib/worklet/Worklet.svelte";

  let path = window.location.pathname;

  console.log("Path: ", path);
</script>

<main>
  <a href="/window">Window scope</a><a href="/worker">Worker scope</a><a
    href="/worklet">Worklet scope</a
  >
  {#if path === "/window"}
    <Window />
  {:else if path === "/worker"}
    <Worker />
  {:else if path === "/worklet"}
    <Worklet />
  {/if}
</main>

<style>
  a {
    display: inline-block;
    margin: 2rem;
    font-size: 1.25rem;
  }
</style>
