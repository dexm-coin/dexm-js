import { crc32 } from "crc";
import { enc, RIPEMD160, SHA256} from "crypto-js";
import { ec } from "elliptic";
import {} from "./protobuf/proto"

export class Wallet {
  private shard: number;
  private key: ec.KeyPair;

  // Returns the address of the wallet in the format Dexm{Checksum
  public async getAddress() {
    const shardHex = getHexFixedLen(this.shard, 2);
    const pubKey = await this.getPubKey();
    const firstHash = SHA256(pubKey).toString(enc.Hex);

    const coreHash = RIPEMD160(firstHash);
    const core = coreHash.toString(enc.Hex);

    const checkSum = crc32(core);
    const paddedSum = getHexFixedLen(checkSum, 8).toUpperCase();

    return `Dexm${shardHex}${core}${paddedSum}`;
  }

  // getPubKey returns a spki encoded pubKey
  public getPubKey() {
    return this.key.getPublic();
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
    const context = new ec('p256');

    this.key = context.genKeyPair();
  }

}

function getHexFixedLen(n: number, len: number): string {
  const padded = "0".repeat(n) + n.toString(16);

  return padded.slice(-n);
}

/*function hexdump(buf: ArrayBuffer): string {
  const buffer = new Uint8Array(buf);
  const hex = Array.from(buffer).map(v => getHexFixedLen(v, 2));

  return hex.join("");
}*/