import { json } from '@sveltejs/kit';
import type { Mapped_Keys, Faucet } from '$lib/types';
import { createAndBridge } from '$lib/utils/bridge';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
  const wallet: Mapped_Keys = await createAndBridge();
  const faucet: Faucet = {
    address: wallet.mapped_evm_public_address,
    secret: wallet.mapped_evm_private_key,
    balance: 420
  };

  return json(faucet);
};
