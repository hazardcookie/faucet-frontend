<script lang="ts">
  import Card from '$lib/components/Card.svelte';
  import Loading from '$lib/components/Loading.svelte';
  import Connect from '$lib/components/Connect.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import type { Faucet } from '$lib/types/';
  import { loading } from '$lib/components/loading';

  let load = true;
  let fetching = false;
  let wallet: any;

  async function create() {
    fetching = true;
    const response = await fetch('/api/fund');
    const data = await response.json();
    if (response.ok) {
      wallet = data;
      fetching = false;
      load = false;
      return data as Faucet;
    } else {
      return { address: 'error', secret: 'error', balance: 0 } as Faucet;
    }
  }
</script>

<button
  class="faucet_button"
  on:click={() => {
    if (load === false) {
      load = true;
    }
    create();
    loading.setLoading(true, '💰 Generating funded wallet, one moment please!');
  }}
>
  Generate Wallet
</button>

{#if load}
  <p />
  {#if fetching === true}
    <Loading />
  {/if}
{:else}
  <p>✅ Success!</p>
  <p>👉 Click on the keys to copy to your clipboard.</p>
  <Card {wallet} />
  <p>ℹ️ Add the devnet to Metamask with the settings below.</p>
  <Connect />
{/if}
<Footer />

<style>
  .faucet_button {
    background-color: rgb(200, 0, 255);
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 10px;
    width: 200px;
  }
  .faucet_button:hover {
    background-color: rgb(255, 0, 251);
  }
</style>
