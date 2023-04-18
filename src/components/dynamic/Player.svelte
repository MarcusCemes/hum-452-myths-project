<script lang="ts">
  import { MEDIA_URL } from "$lib/config";
  import type { Scene } from "$lib/types";

  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  /* == Props == */

  export let scene: Scene;
  export let showControls = false;

  /* == State == */

  let error = false;

  /* == Computed == */

  $: src = `${MEDIA_URL}/${scene.id}.mp4`;
</script>

<!-- svelte-ignore a11y-media-has-caption -->
{#key scene.id}
  <video
    on:play
    on:ended
    on:error={() => (error = true)}
    autoplay
    class="w-full h-full"
    class:opacity-0={error}
    controls={showControls}
  >
    <source type="video/mp4" {src} />
  </video>
{/key}

{#if error}
  <div class="absolute inset-0 flex flex-col justify-center items-center">
    <h1 class="mb-2 font-semibold">Error loading video</h1>
    <button
      on:click={() => dispatch("retry")}
      class="px-6 py-3 bg-white hover:bg-rose-600 hover:text-white font-semibold text-4xl rounded transition-colors duration-100 shadow-xl"
    >
      Retry
    </button>
  </div>
{/if}
