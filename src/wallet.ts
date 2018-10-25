import { crc32 } from "crc";
import { enc, RIPEMD160 } from "crypto-js";
import {  } from "elliptic";

export default class Wallet {
  private key: crypto.CryptoKeyPair;
  private shard: number;

  public async getAddress() {
    const shardHex = getHexFixedLen(this.shard, 2);
    const pubKey = await this.getPubKey();
    const firstHash = await crypto.subtle.digest("SHA-256", pubKey);

    // CryptoJS doesn't like arraybuffers, so we convert it to hex and then
    // convert it to a WordList
    const hexFirst = hexdump(firstHash);
    const coreHash = RIPEMD160(hexFirst, { format: enc.Hex });
    const core = coreHash.toString(enc.Hex);

    const checkSum = crc32(core);
    const paddedSum = getHexFixedLen(checkSum, 8).toUpperCase();

    return `Dexm${shardHex}${core}${paddedSum}`;
  }

  // getPubKey returns a spki encoded pubKey
  public getPubKey() {
    return crypto.subtle.exportKey("spki", this.key.publicKey);
  }

  // shards are in the range 0-255
  public setShard(s: number) {
    if (s < 0 || s > 255) {
      throw new Error("Invalid shard range");
    }

    this.shard = s;
  }

  // generate creates a new keypair and thus a wallet
  public async generate() {
    const key = await crypto.subtle.generateKey(
      {
        name: "ECDSA",
        namedCurve: "P-256"
      },
      true, // Make the key extractable
      ["sign", "verify"]
    );

    this.key = key;
  }
}

function getHexFixedLen(n: number, len: number): string {
  const padded = "0".repeat(n) + n.toString(16);

  return padded.slice(-n);
}

function hexdump(buf: ArrayBuffer): string {
  const buffer = new Uint8Array(buf);
  const hex = Array.from(buffer).map(v => getHexFixedLen(v, 2));

  return hex.join("");
}
