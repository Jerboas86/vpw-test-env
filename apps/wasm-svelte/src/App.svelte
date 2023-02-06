<script lang="ts">
  import Window from "./lib/window/Window.svelte";
  import Worker from "./lib/worker/Worker.svelte";
  import Worklet from "./lib/worklet/Worklet.svelte";

  let path = window.location.pathname;
</script>

<main>
  <div class="scopes">
    <a href="/">Window scope</a>
    <a href="/worker">Worker scope</a>
    <a href="/worklet">Worklet scope</a>
  </div>
  <div class="result">
    {#if path === "/"}
      <Window />
    {:else if path === "/worker"}
      <Worker />
    {:else if path === "/worklet"}
      <Worklet />
    {/if}
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  a {
    display: inline-block;
    margin: 2rem;
    font-size: 1.25rem;
  }
</style>
