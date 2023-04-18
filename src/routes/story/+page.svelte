<script>
  import { goto } from "$app/navigation";
  import Controls from "$c/common/Controls.svelte";
  import { interactionSounds } from "$lib/actions/interactionSounds";
  import { HandMetal, Headphones, Volume2 } from "@steeze-ui/lucide-icons";
  import { Icon } from "@steeze-ui/svelte-icon";
  import { cubicIn } from "svelte/easing";
  import { fade } from "svelte/transition";

  let dark = false;

  function onPlay() {
    dark = true;

    setTimeout(() => {
      document.documentElement.requestFullscreen();
      goto("/story/intro");
    }, 1500);
  }
</script>

<svelte:window
  on:keypress={(e) => {
    if (e.key === "Enter") {
      onPlay();
    }
  }}
/>

<div class="relative h-full flex flex-col justify-center items-center">
  <div class="max-w-md">
    <h1 class="mb-4 text-xl font-semibold">How it works</h1>

    <p class="mb-6 text-sm text-justify">
      You will be presented with a situation and a set of choices. Choose wisely, because your
      decisions will affect the outcome of the story.
    </p>

    <div class="mb-8">
      <h2 class="mb-4 font-semibold text-sm">Controls</h2>
      <div class="pl-2">
        <Controls />
      </div>
    </div>

    <div class="mb-8 text-zinc-600 text-sm text-center select-none">
      <Icon src={Headphones} class="mr-1 inline w-4 h-4" />
      turn up your volume
    </div>

    <div class="text-center select-none">
      <button
        use:interactionSounds
        on:click={onPlay}
        class="px-4 py-2 text-zinc-600 hover:bg-zinc-200 font-semibold transition-colors duration-100 rounded"
      >
        <Icon class="inline relative -top-0.5 mr-1 w-4 h-4" src={HandMetal} />
        Got it
      </button>
    </div>
  </div>

  {#if dark}
    <div in:fade={{ duration: 1000, easing: cubicIn }} class="absolute inset-0 bg-black z-10" />
  {/if}
</div>
