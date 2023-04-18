<script lang="ts">
  import { page } from "$app/stores";
</script>

<div class="h-full flex flex-col justify-center items-center">
  <h1 class="mb-2 font-semibold">{$page.error?.message ?? "Unknown error"}</h1>
</div>
