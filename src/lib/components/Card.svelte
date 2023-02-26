<script lang="ts">
  import type { Faucet } from '../../lib/types/';
  export let wallet: Faucet;
</script>

<div class="card">
  <div class="card-body">
	<h4>Address</h4> <code>{wallet.address}</code>
	<h4>Secret Key</h4>  <code>{wallet.secret}</code>
	<p class="card-text"><b>Balance</b>: {wallet.balance} xrp</p>
  </div>
</div>

<style>
  .card {
    background-color: rgb(229, 30, 255);
	border: none;
	color: white;
	padding: 15px 15px;
	text-decoration: none;
	display: inline-block;
	font-size: 1rem;
	margin: 4px 2px;
	border-radius: 10px;
	width:auto;
	inline-size: min-content;
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
  }
</style>
