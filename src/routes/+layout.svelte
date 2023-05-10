<script lang="ts">
  import { page } from "$app/stores";
  import "@fontsource/cinzel";
  import { dev } from "$app/environment";
  import { inject } from "@vercel/analytics";

  import "../app.css";

  const SUFFIX = "End of the World";

  $: pageTitle = $page.data.title;
  $: title = pageTitle ? `${pageTitle} | ${SUFFIX}` : SUFFIX;

  inject({ mode: dev ? "development" : "production" });
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class="relative h-screen text-zinc-800 font-cinzel">
  <slot />
</div>
