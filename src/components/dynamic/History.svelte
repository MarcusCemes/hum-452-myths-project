<script lang="ts">
  import { goto } from "$app/navigation";
  import { interactionSounds } from "$lib/actions/interactionSounds";
  import { history } from "$lib/stores";
  import { X } from "@steeze-ui/lucide-icons";
  import { Icon } from "@steeze-ui/svelte-icon";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  $: scenes = $history.reverse();

  function onClick(index: number) {
    const next = scenes[index];
    $history = scenes.slice(index + 1).reverse();
    goto(`/story/${next.id}`, { replaceState: true });
    dispatch("hide");
  }
</script>

<div class="relative w-full max-h-full max-w-md px-6 py-2 bg-white border rounded overflow-y-auto">
  <button on:click={() => dispatch("hide")} class="absolute top-2 right-3 p-2 cursor-pointer">
    <Icon class="w-4 h-4 text-zinc-600" src={X} />
  </button>

  <h1 class="font-bold text-xl">History</h1>

  <div class="mt-8 flex flex-col gap-y-4">
    {#each scenes as scene, i}
      <button
        on:click={() => onClick(i)}
        use:interactionSounds
        class="px-3 py-1.5 hover:bg-zinc-200 transition-colors duration-100 rounded"
        >{scene.id}</button
      >
    {/each}
  </div>
</div>
