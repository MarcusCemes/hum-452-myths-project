<script lang="ts">
  import { goto } from "$app/navigation";
  import Intro from "$c/Intro.svelte";

  async function onStart() {
    await document.documentElement.requestFullscreen();
    goto("/story/intro");
  }
</script>

<Intro on:start={onStart} />
