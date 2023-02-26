<script lang="ts">
  import type { PageData } from './$types';
  import { invalidateAll } from '$app/navigation';
  import Card from '../lib/components/Card.svelte';
  import type { Faucet } from '../lib/types/';

  type Data = {
    success: boolean;
    errors: Record<string, string>;
  };

  export let data: PageData;
  let wallet: Faucet;

  // used in the template
  let form: Data;
  async function create(event: Event) {
    const formEl = event.target as HTMLFormElement;
    const data = new FormData(formEl);
    // you can see everything about the form
    console.dir(form);

    const response = await fetch(formEl.action, {
      method: 'POST',
      body: data
    });
    const responseData = await response.json();
    wallet = responseData;
    // { success: true, errors: {} } object
    form = responseData;

    // reset form
    formEl.reset();

    // rerun `load` function for the page
    await invalidateAll();
  }
</script>

<form on:submit|preventDefault={create} method="POST">
  <button class="faucet_button" type="submit">Fund Wallet</button>
</form>

{#if form?.success}
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
