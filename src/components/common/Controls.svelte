<script lang="ts">
  import Control from "./Control.svelte";
</script>

<div class="inline-grid grid-cols-[auto_auto] gap-y-2 gap-x-3">
  <Control>
    <svelte:fragment slot="key">f</svelte:fragment>
    toggle fullscreen
  </Control>

  <Control>
    <svelte:fragment slot="key">h</svelte:fragment>
    show/hide history
  </Control>

  <Control>
    <svelte:fragment slot="key">c</svelte:fragment>
    toggle playback controls
  </Control>

  <Control>
    <svelte:fragment slot="key">s</svelte:fragment>
    skip to end of scene
  </Control>
</div>
