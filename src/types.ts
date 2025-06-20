export enum NetworkType {
  Mainnet = "Mainnet",
  Shasta = "Shasta",
  Nile = "Nile",
  Unknown = "Unknown",
}

export enum WalletReadyState {
  Loading = "Loading",
  NotFound = "NotFound",
  Found = "Found",
}

export enum AdapterState {
  Loading = "Loading",
  NotFound = "NotFound",
  Disconnect = "Disconnected",
  Connected = "Connected",
}

export interface TronResponse {
  code:number,
  message:string
}

export interface WatchAssetParams {
  type: "TRC10" | "TRC20" | "TRC721";
  options: {
    address: string;
    symbol?: string;
    decimals?: number;
    image?: string;
  };
}

export interface TronWeb {
  trx: {
    sign: (data: unknown) => Promise<string>;
    sendRawTransaction: (
      signed: string | object
    ) => Promise<{ txid?: string; result: boolean }>;
    getBlockByNumber: (n: number) => Promise<{ blockID?: string }>;
  };
  transactionBuilder: {
    sendTrx: (to: string, amount: number, from: string) => Promise<object>;
  };
  request?: (args: { method: string; params?: unknown }) => Promise<unknown>;
  defaultAddress: {
    base58:string,
    hex:string,
    name:string,
    type:number
  };
  fullNode?: { host: string };
  solidityNode?: { host: string };
  eventServer?: { host: string };
}

export interface TronProvider {
  request: (args: { method: string; params?: unknown }) => Promise<unknown >;
  tronWeb: TronWeb;
  ready:boolean;
  tronlinkParams:{
    websiteIcon:string,
    websiteName:string,
  }
}

export interface TronLinkMessageData {
  isTronLink?: boolean;
  message?: {
    action?: string;
    data?: unknown;
  };
}


