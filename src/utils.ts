import { WalletGetNetworkError } from "@hadron-connect/abstract-adapter";
import { NetworkType, TronWeb } from "./types";

export const CHAIN_ID_MAP: Record<string, NetworkType> = {
  "0x2b6653dc": NetworkType.Mainnet,
  "0x94a9059e": NetworkType.Shasta,
  "0xcd8690dc": NetworkType.Nile,
};


export async function getNetworkInfoByTronWeb(tw: TronWeb): Promise<{
  chainId: string;
  networkType: NetworkType;
}> {
  try {
    const { blockID = "" } = await tw.trx.getBlockByNumber(0);
    const chainId = `0x${blockID.slice(-8)}`;
    return {
      chainId,
      networkType: CHAIN_ID_MAP[chainId] ?? NetworkType.Unknown,
    };
  } catch (error) {
    throw new WalletGetNetworkError("Failed to get network info", error);
  }
}