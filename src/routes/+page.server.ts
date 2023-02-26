// This file is used to get the data from the contract and return it as a json object
import { json } from '@sveltejs/kit'
import type { PageServerLoad } from './$types';
import { fundWallet } from '../lib/utils/fundWallet';

export const ssr = true;
export const load: PageServerLoad = async () => {
  const wallets = await fundWallet();
  return { wallets };
};
