import {
  Connection,
  PublicKey,
  Transaction,
  clusterApiUrl,
  SystemProgram,
} from "@solana/web3.js";

type DisplayEncoding = "utf8" | "hex";
type PhantomEvent = "connect";

type PhantomRequestMethod = "connect" | "signTransaction" | "signMessage";

interface ConnectOpts {
  onlyIfTrusted: boolean;
}

interface PhantomProvider {
  publicKey: PublicKey | null;
  signTransaction: (transaction: Transaction) => Promise<Transaction>;
  signMessage: (
    message: Uint8Array | string,
    display?: DisplayEncoding
  ) => Promise<any>;
  // onlyIfTrusted가 true이면 퍼블릭키 받음
  connect: () => Promise<{ publicKey: PublicKey }>;
  on: (event: PhantomEvent, handler: (args: any) => void) => void;
  request: (method: PhantomRequestMethod, params: any) => Promise<unknown>;
}

export const getProvider = (): PhantomProvider | undefined => {
  if ("solana" in window) {
    const anyWindow: any = window;
    const provider = anyWindow.solana;
    if (provider.isPhantom) {
      return provider;
    }
  }
  window.open("https://phantom.app/", "_blank");
};
