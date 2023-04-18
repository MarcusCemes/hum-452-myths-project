<script lang="ts">
  function handleKeypress(event: KeyboardEvent) {
    switch (event.key) {
      case "f":
        if (document.fullscreenElement) {
          document.exitFullscreen();
        } else {
          document.body.requestFullscreen();
        }

        break;
    }
  }
</script>

<svelte:window on:keypress={handleKeypress} />

<div class="h-full bg-black">
  <slot />
</div>
