<script lang="ts">
  import ScenePlayer from "$c/dynamic/ScenePlayer.svelte";
</script>

<div class="h-full bg-black">
  <ScenePlayer
    scene={{
      end: true,
      id: "bloopers",
      src: "Bloopers",
    }}
  />
</div>
