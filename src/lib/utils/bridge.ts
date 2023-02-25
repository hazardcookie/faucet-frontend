import type { Mapped_Keys } from '../types';
import { bridge } from './transaction';
import { mapXrplSecretToEvm } from 'xrpl-evm-mapping';
import { Client, Wallet } from 'xrpl';
import type { AccountTxRequest } from 'xrpl';
import { generateFundedWallet } from '@thebettermint/xrpl-auto-funder';

export const wait = async (time: number) => {
  await new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

export async function createAndBridge() {
  const client: Client = new Client('wss://s.devnet.rippletest.net:51233');
  await client.connect();

  const faucet = await generateFundedWallet('devnet');
  const xrpl_wallet = Wallet.fromSeed(faucet.account.secret);
  const evm_wallet = mapXrplSecretToEvm(faucet.account.secret) as Mapped_Keys;

  console.log('XRPL Wallet generated, funded and mapped to a EVM keypair');
  console.log(evm_wallet);
  console.log('Bridging xrp from the generated XRPL wallet to the mapped EVM wallet');
  console.log('Please wait for the transaction to be confirmed...');

  const request: AccountTxRequest = { command: 'account_tx', account: xrpl_wallet.address };
  // eslint-disable-next-line no-constant-condition
  while (true) {
    // eslint-disable-next-line prefer-const
    let r = await client.request(request);
    await wait(500);
    if (r.result.transactions.length > 0) break;
  }

  const result = await bridge(client, xrpl_wallet, evm_wallet.mapped_evm_public_address, 100);
  console.log(result);

  client.disconnect();
  return evm_wallet;
}
