<script lang="ts">
  import Card from '$lib/components/Card.svelte';
  import type { Faucet } from '$lib/types/';

  let loading = true;
  let fetching = 'no';
  let wallet: any;

  async function create() {
    fetching = 'yes';
    const response = await fetch('/api/fund');
    const data = await response.json();
    if (response.ok) {
      wallet = data;
      fetching = 'no';
      loading = false;
      return data as Faucet;
    } else {
      return { address: 'error', secret: 'error', balance: 0 } as Faucet;
    }
  }
</script>

<button class="faucet_button" on:click={create}>Fund Wallet</button>
{#if loading}
  <p />
  {#if fetching === 'yes'}
    <p>Generating wallet, please wait...</p>
  {/if}
{:else}
  <Card {wallet} />
{/if}

<style>
  .faucet_button {
    background-color: rgb(200, 0, 255);
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 10px;
  }
  .faucet_button:hover {
    background-color: rgb(150, 0, 255);
  }
</style>
