<script lang="ts">
  import type { PageData } from './$types';
  import Card from '../lib/components/Card.svelte';

  export let data: PageData;
  $: ({ wallet } = data);

  

</script>

<h1>Cookie's Faucet 🍪</h1>
<p>Fund an existing evm devnet wallet or create + fund a new one below</p>
<Card {wallet} />
