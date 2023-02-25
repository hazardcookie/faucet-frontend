export type Faucet = {
  address: string;
  secret: string;
  balance: number;
};

export type Mapped_Keys = {
  xrpl_address: string;
  xrpl_secret: string;
  mapped_evm_private_key: string;
  mapped_evm_public_key: string;
  mapped_evm_public_address: string;
};

export type XRPL_Faucet = {
  xAddress: string;
  secret: string;
  classicAddress: string;
  address: string;
};
