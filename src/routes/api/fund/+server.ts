import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { Faucet } from '../../../lib/types';

export const GET: RequestHandler = async () => {
	const faucet: Faucet = {
		address: '0xPuBlIcAdDrEsS',
		secret: '0xSeCrEtKeY',
		balance: 950
	};
	return json(faucet);
};
