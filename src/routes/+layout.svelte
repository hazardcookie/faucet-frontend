<script lang="ts">
  import '../app.css';
</script>

<div class="dapp_container">
  <h1>Cookie's Faucet 🍪</h1>
  <p>Fund an existing evm devnet wallet or create + fund a new one below</p>
  <slot />
</div>

<style>
  .dapp_container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
  }
  @media only screen and (min-width: 900px) {
    .dapp_container {
      flex-direction: row;
    }
  }
</style>
