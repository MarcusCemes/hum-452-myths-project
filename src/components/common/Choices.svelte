<script lang="ts">
  import type { Choice } from "$lib/types";
  import { Coins } from "@steeze-ui/lucide-icons";
  import { Icon } from "@steeze-ui/svelte-icon";
  import { createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";

  const dispatch = createEventDispatcher();

  export let choices: Choice[];
</script>

{#key choices}
  <div
    out:fade
    class="absolute inset-0 flex flex-col gap-y-8 justify-center items-center bg-black bg-opacity-90"
  >
    <h1 class="fade-in mb-4 text-4xl text-white">How will you proceed?</h1>

    {#each choices as choice, i (choice.target)}
      <button
        on:click={() => dispatch("select", choice)}
        class="fade-in px-6 py-3 inline-flex items-center bg-white hover:bg-rose-600 hover:text-white font-semibold text-4xl rounded transition-colors duration-200 shadow-xl"
        style:--delay="{0.2 + i * 0.1}s"
      >
        <span class="flex-1 pr-2">
          <Icon class=" w-8 h-8" src={Coins} />
        </span>
        <span>{choice.text}</span>
        <span class="flex-1" />
      </button>
    {/each}
  </div>
{/key}
