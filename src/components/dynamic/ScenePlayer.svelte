<script lang="ts">
  import { goto } from "$app/navigation";
  import Choices from "$c/common/Choices.svelte";
  import Player from "$c/dynamic/Player.svelte";
  import type { Choice, Scene } from "$lib/types.js";
  import History from "./History.svelte";

  /* == Props == */

  export let scene: Scene;

  /* == State == */

  let showChoices = false;
  let showControls = false;
  let showHistory = false;

  /* == Functions == */

  async function onSelect(choice: CustomEvent<Choice>) {
    showChoices = false;
    const { target } = choice.detail;
    await goto(`/story/${target}`, { replaceState: true });
  }

  function onKeyPress(event: KeyboardEvent) {
    switch (event.key) {
      case "c":
        showControls = !showControls;
        break;

      case "f":
        if (document.fullscreenElement) {
          document.exitFullscreen();
        } else {
          document.body.requestFullscreen();
        }

        break;

      case "h":
        showHistory = !showHistory;
        break;
    }
  }

  function onEnded() {
    showChoices = true;
  }
</script>

<svelte:window on:keypress={onKeyPress} />

<Player on:ended={onEnded} {scene} {showControls} />

{#if showChoices}
  <Choices on:select={onSelect} choices={scene.choices} />
{/if}

{#if showHistory}
  <div
    class="fixed top-0 left-0 w-full h-full flex justify-center items-center pointer-events-none"
  >
    <div class="contents pointer-events-auto">
      <History on:hide={() => (showHistory = false)} />
    </div>
  </div>
{/if}
