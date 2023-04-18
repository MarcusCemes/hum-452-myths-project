<script lang="ts">
  import Kbd from "./Kbd.svelte";
</script>

<Kbd><slot name="key" /></Kbd>
<span class="self-center text-zinc-600 text-sm"><slot /></span>
