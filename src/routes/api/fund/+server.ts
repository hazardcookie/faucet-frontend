import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { Faucet } from '../../../lib/types';

export const GET: RequestHandler = async () => {
    const faucet: Faucet = {
        message: 'Hello world!'
    };
    return json(faucet);
};