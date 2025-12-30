<script lang="ts">
  import type { PageData } from './$types';
  import CoffeeViewer from '$lib/components/viewer/RecordViewer.svelte';

  // Svelte 5 Runes 방식: data 프롭 수신
  let { data }: { data: PageData } = $props();
</script>

<main class="main flex flex-col w-full max-w-7xl mx-auto p-5 gap-5">
  <CoffeeViewer record={data.record} />
</main>
