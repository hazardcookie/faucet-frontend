<script lang="ts">
  export let wallet: any;
</script>

<div class="card">
  <div class="card-body">
    <h5 class="card-title">Wallet</h5>
    <p class="card-text"><b>Address:</b> {wallet.address}</p>
    <p class="card-text"><b>Secret:</b> {wallet.secret}</p>
    <p class="card-text"><b>Balance:</b> {wallet.balance}</p>
  </div>
</div>

<style>
  .card {
    background-color: rgb(229, 30, 255);
  }
</style>
