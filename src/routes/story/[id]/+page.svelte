<script lang="ts">
  import { afterNavigate } from "$app/navigation";
  import ScenePlayer from "$c/dynamic/ScenePlayer.svelte";
  import { pushSceneToHistory } from "$lib/stores.js";

  export let data;

  $: console.log(data.scene.id);

  afterNavigate(() => {
    pushSceneToHistory(data.scene);
  });
</script>

<div class="h-full bg-black">
  <ScenePlayer scene={data.scene} />
</div>
