import {RIPEMD160, enc} from 'crypto-js';
import {crc32} from 'crc';

class Wallet {
    private key: CryptoKeyPair;
    private shard: number;

    async getAddress() {
        const shardHex = getHexFixedLen(this.shard, 2)
        const pubKey = await this.getPubKey()
        const firstHash = await crypto.subtle.digest("SHA-256", pubKey)
        
        // CryptoJS doesn't like arraybuffers, so we convert it to hex and then
        // convert it to a WordList
        const hexFirst = hexdump(firstHash)
        const coreHash = RIPEMD160(hexFirst, {format: enc.Hex})
        const core = coreHash.toString(enc.Hex)

        const checkSum = crc32(core)
        const paddedSum = getHexFixedLen(checkSum, 8).toUpperCase()

        return `Dexm${shardHex}${core}${paddedSum}`
    }

    
    // getPubKey returns a spki encoded pubKey
    getPubKey() {
        return crypto.subtle.exportKey(
            "spki", 
            this.key.publicKey,
        )
    }

    // shards are in the range 0-255
    setShard(s: number) {
        if (s < 0 || s > 255) {
            throw("Invalid shard range")
        }

        this.shard = s
    }

    // generate creates a new keypair and thus a wallet
    async generate() {
        let key = await window.crypto.subtle.generateKey({
            name: "ECDSA",
            namedCurve: "P-256",
        },
        true, // Make the key extractable
        ["sign", "verify"]);
    
        this.key = key
    }
}

function getHexFixedLen(n: number, len: number) :string {
    let padded =  "0".repeat(n) + n.toString(16)

    return padded.slice(-n)
}

function hexdump(buf: ArrayBuffer): string {
    const v = new Uint8Array(buf);
    const hex = Array.from(v).map(v => getHexFixedLen(v, 2))

    return hex.join("")
}