<script lang="ts">
  import "@fontsource/cinzel";
  import "../app.css";
  import { page } from "$app/stores";

  const SUFFIX = "End of the World";

  $: pageTitle = $page.data.title;
  $: title = pageTitle ? `${pageTitle} | ${SUFFIX}` : SUFFIX;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class="relative h-screen text-zinc-800 font-cinzel">
  <slot />
</div>
