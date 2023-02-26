<script lang="ts">
  import Card from '$lib/components/Card.svelte';
  import type { Faucet } from '$lib/types/';

  let loading = false;

  let wallet: Faucet | undefined;

  async function create() {
    loading = true;
    const response = await fetch('/api/fund');
    const data = await response.json();
    wallet = data;
    console.log(data)
    return data;
  }
</script>

<button class="faucet_button" on:click={create}>Fund Wallet</button>
{#if loading === true}
  Creating and funding wallet, please wait...
{:else if wallet !== undefined}
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
