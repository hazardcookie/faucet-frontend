<script lang="ts">
  import '../app.css';
  import { dev } from '$app/environment';
  import { inject } from '@vercel/analytics';

  inject({ mode: dev ? 'development' : 'production' });
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

  @media only screen and (max-width: 600px) {
    .dapp_container {
      margin-bottom: 4rem;
    }
  }
</style>
