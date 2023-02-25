// This file is used to get the data from the contract and return it as a json object
import type { PageServerLoad } from './$types';

export const ssr = true;
export const load: PageServerLoad = async ({ fetch }) => {
	const response = await fetch(`/api/fund`);
	const wallet = await response.json();
	return { wallet };
};
