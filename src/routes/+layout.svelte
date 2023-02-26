<script lang="ts">
  import '../app.css';
</script>

<div class="dapp_container">
  <h1>Cookie's Faucet 🍪</h1>
  <p>Click to create a funded XRPL EVM-Devnet wallet.</p>
  <slot />
</div>

<style>
  .dapp_container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 6rem;
    max-width: 800px;
  }
</style>
