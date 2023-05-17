<script lang="ts">
  import { interactionSounds } from "$lib/actions/interactionSounds";
  import { Scroll } from "@steeze-ui/lucide-icons";
  import { Icon } from "@steeze-ui/svelte-icon";
</script>

<div class="mx-auto max-w-4xl h-full flex flex-col select-none">
  <div class="fade-in flex-1 mt-2 px-4 py-8" style:--delay="2s">
    <div class="flex items-center">
      <a href="https://epfl.ch">
        <img alt="EPFL" class="h-14 inline-block" src="/images/epfl-logo.svg" />
      </a>
      <span class="flex-1 flex justify-end">
        <a
          class="p-2 opacity-70 hover:opacity-100 hover:bg-zinc-100 transition-all duration-100 rounded"
          href="/bloopers">🥕</a
        >
      </span>
    </div>
  </div>

  <div class="flex flex-col items-center">
    <h1 class="fade-in mb-2 text-4xl font-bold" style:--delay="0.2s">End of the World</h1>

    <p class="fade-in mb-8 text-zinc-600" style:--delay="0.4s">
      An interactive film project for a modern day apocalypse
    </p>

    <a
      use:interactionSounds
      href="/story"
      class="fade-in px-6 py-3 text-zinc-700 hover:bg-zinc-200 active:bg-zinc-300 font-semibold text-xl transition-colors duration-100 rounded"
      style:--delay="0.8s"
    >
      <Icon class="inline mr-1 w-6 h-6" src={Scroll} />
      Start
    </a>
  </div>

  <div
    class="fade-in flex-1 mb-2 py-8 px-4 flex flex-col justify-end items-center text-sm text-zinc-600"
    style="animation-delay: 2s;"
  >
    HUM-452 &nbsp;&mdash;&nbsp; Myths of the ancient Mediterranean Sea
  </div>
</div>
