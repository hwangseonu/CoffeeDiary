<script lang="ts">
  import favicon from '$lib/assets/favicon.svg';
  import '../app.css';
  import Header from '$lib/components/Header.svelte';
  import AlertModal from '$lib/components/modal/AlertModal.svelte';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<Header />

<AlertModal />

{@render children()}
