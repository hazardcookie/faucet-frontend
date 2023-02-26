<script lang="ts">
  import { clickToCopy } from '$lib/utils/copy';
</script>

<div class="card">
  <div class="card-body">
    <h4>Network Name</h4>
    <p>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <code on:click={clickToCopy}>EVM Sidechain - Devnet</code>
    </p>
    <h4>RPC URL</h4>
    <p>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <code on:click={clickToCopy}>https://rpc-evm-sidechain.xrpl.org</code>
    </p>
    <h4>Chain ID</h4>
    <p>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <code on:click={clickToCopy}>1440001</code>
    </p>
    <h4>Currency symbol</h4>
    <p>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <code on:click={clickToCopy}>XRP</code>
    </p>
    <h4>Block explorer URL</h4>
    <p>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <code on:click={clickToCopy}>https://evm-sidechain.xrpl.org</code>
    </p>
  </div>
</div>

<style>
  .card {
    background-color: rgb(30, 169, 255);
    border: none;
    color: white;
    padding: 15px 15px;
    text-decoration: none;
    display: inline-block;
    font-size: 1rem;
    margin: 4px 2px;
    border-radius: 10px;
    width: 100%;
  }

  .card code {
    background-color: rgba(109, 82, 113, 0.366);
    border: none;
    color: white;
    padding: 15px 10px;
    text-decoration: none;
    display: inline-block;
    font-size: 1em;
    border-radius: 10px;
    cursor: pointer;
    word-break: break-all;
  }

  .card code:hover {
    background-color: rgba(57, 36, 61, 0.304);
  }

  @media only screen and (max-width: 600px) {
    .card code {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 73vw;
    }
  }
</style>
