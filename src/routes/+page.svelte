<script lang="ts">
  import type { PageData } from './$types';
  import Card from '../lib/components/Card.svelte';

  export let data: PageData;
  $: ({ wallet } = data);
</script>

<form method="GET" action="/fund">
  <button class="faucet_button" type="submit">Send 1</button>
</form>

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
  }
  .faucet_button:hover {
    background-color: rgb(150, 0, 255);
  }
</style>
