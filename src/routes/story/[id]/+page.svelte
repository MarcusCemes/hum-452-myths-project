<script lang="ts">
  import { goto } from "$app/navigation";
  import Choices from "$c/common/Choices.svelte";
  import Player from "$c/dynamic/Player.svelte";
  import { pushHistory } from "$lib/stores.js";
  import type { Choice } from "$lib/types.js";

  /* == Props == */

  export let data;

  /* == State == */

  let showChoices = false;
  let showControls = false;

  /* == Effects == */

  $: pushHistory(data.scene);

  /* == Functions == */

  async function onSelect(choice: CustomEvent<Choice>) {
    showChoices = false;
    const { target } = choice.detail;
    await goto(`/story/${target}`);
  }

  function onKeyPress(event: KeyboardEvent) {
    switch (event.key) {
      case "c":
        showControls = !showControls;
        break;
    }
  }

  function onEnded() {
    showChoices = true;
  }
</script>

<svelte:window on:keypress={onKeyPress} />

<Player on:ended={onEnded} scene={data.scene} {showControls} />

{#if showChoices}
  <Choices on:select={onSelect} choices={data.scene.choices} />
{/if}
