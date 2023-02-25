<script lang="ts">
	export let wallet: any;
</script>

<div class="card">
	<div class="card-body">
		<h5 class="card-title">Wallet</h5>
		<p class="card-text">{wallet.address}</p>
		<p class="card-text">{wallet.secret}</p>
		<p class="card-text">{wallet.balance}</p>
	</div>
</div>
