<script lang="ts">
  import { MEDIA_URL } from "$lib/config";
  import type { Scene } from "$lib/types";

  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  /* == Props == */

  export let scene: Scene;
  export let showControls = false;

  /* == State == */

  let element: HTMLVideoElement;
  let error = false;

  /* == Computed == */

  $: {
    if (scene) {
      error = Boolean(element?.error);
    }
  }

  $: src = `${MEDIA_URL}/${scene.src ?? scene.id}.mp4`;

  /* == Functions == */

  function onKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case "s":
        element.pause();
        dispatch("ended");
        break;

      case " ":
        if (element.paused) {
          element.play();
        } else {
          element.pause();
        }
    }
  }
</script>

<svelte:window on:keydown={onKeyDown} />

<!-- svelte-ignore a11y-media-has-caption -->
{#key scene.id}
  <video
    bind:this={element}
    on:play
    on:ended
    on:error={() => (error = true)}
    autoplay
    class="w-full h-full"
    controls={showControls}
    controlsList="nofullscreen"
  >
    <source type="video/mp4" {src} />
  </video>
{/key}

{#if error}
  <div class="absolute inset-0 flex flex-col justify-center items-center bg-white">
    <h1 class="mb-8 text-3xl font-semibold">Error loading video</h1>

    <button
      on:click={() => dispatch("ended")}
      class="px-6 py-3 text-zinc-700 hover:bg-zinc-200 active:bg-zinc-300 font-semibold text-xl transition-colors duration-100 rounded"
    >
      Skip
    </button>
  </div>
{/if}
