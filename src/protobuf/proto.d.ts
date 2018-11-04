import * as $protobuf from "protobufjs";
/** Properties of a Request. */
export interface IRequest {

    /** Request type */
    type?: (Request.MessageTypes|null);

    /** Request data */
    data?: (Uint8Array|null);

    /** Request address */
    address?: (Uint8Array|null);

    /** Request shardAddress */
    shardAddress?: (number|null);
}

/** Represents a Request. */
export class Request implements IRequest {

    /**
     * Constructs a new Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRequest);

    /** Request type. */
    public type: Request.MessageTypes;

    /** Request data. */
    public data: Uint8Array;

    /** Request address. */
    public address: Uint8Array;

    /** Request shardAddress. */
    public shardAddress: number;

    /**
     * Creates a new Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Request instance
     */
    public static create(properties?: IRequest): Request;

    /**
     * Encodes the specified Request message. Does not implicitly {@link Request.verify|verify} messages.
     * @param message Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Request message, length delimited. Does not implicitly {@link Request.verify|verify} messages.
     * @param message Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Request;

    /**
     * Decodes a Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Request;

    /**
     * Verifies a Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Request
     */
    public static fromObject(object: { [k: string]: any }): Request;

    /**
     * Creates a plain object from a Request message. Also converts values to other types if specified.
     * @param message Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace Request {

    /** MessageTypes enum. */
    enum MessageTypes {
        GET_BLOCKCHAIN_LEN = 0,
        GET_BLOCK = 1,
        GET_PEERS = 2,
        GET_WALLET_STATUS = 3,
        GET_VERSION = 4,
        GET_CONTRACT_CODE = 5,
        GET_CONTRACT_STATE = 6,
        GET_INTERESTS = 7,
        HASH_EXIST = 8,
        GET_WALLET = 9
    }
}

/** Properties of an Envelope. */
export interface IEnvelope {

    /** Envelope type */
    type?: (Envelope.ContentType|null);

    /** Envelope data */
    data?: (Uint8Array|null);

    /** Envelope shard */
    shard?: (number|null);

    /** Envelope identity */
    identity?: (ISignature|null);

    /** Envelope TTL */
    TTL?: (number|null);
}

/** Represents an Envelope. */
export class Envelope implements IEnvelope {

    /**
     * Constructs a new Envelope.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEnvelope);

    /** Envelope type. */
    public type: Envelope.ContentType;

    /** Envelope data. */
    public data: Uint8Array;

    /** Envelope shard. */
    public shard: number;

    /** Envelope identity. */
    public identity?: (ISignature|null);

    /** Envelope TTL. */
    public TTL: number;

    /**
     * Creates a new Envelope instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Envelope instance
     */
    public static create(properties?: IEnvelope): Envelope;

    /**
     * Encodes the specified Envelope message. Does not implicitly {@link Envelope.verify|verify} messages.
     * @param message Envelope message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEnvelope, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Envelope message, length delimited. Does not implicitly {@link Envelope.verify|verify} messages.
     * @param message Envelope message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEnvelope, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Envelope message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Envelope
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Envelope;

    /**
     * Decodes an Envelope message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Envelope
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Envelope;

    /**
     * Verifies an Envelope message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an Envelope message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Envelope
     */
    public static fromObject(object: { [k: string]: any }): Envelope;

    /**
     * Creates a plain object from an Envelope message. Also converts values to other types if specified.
     * @param message Envelope
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Envelope, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Envelope to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace Envelope {

    /** ContentType enum. */
    enum ContentType {
        BROADCAST = 0,
        OTHER = 1,
        REQUEST = 2,
        INTERESTS = 3,
        NEIGHBOUR_INTERESTS = 4
    }
}

/** Properties of a Broadcast. */
export interface IBroadcast {

    /** Broadcast type */
    type?: (Broadcast.BroadcastType|null);

    /** Broadcast data */
    data?: (Uint8Array|null);

    /** Broadcast address */
    address?: (Uint8Array|null);

    /** Broadcast shardAddress */
    shardAddress?: (number|null);
}

/** Represents a Broadcast. */
export class Broadcast implements IBroadcast {

    /**
     * Constructs a new Broadcast.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBroadcast);

    /** Broadcast type. */
    public type: Broadcast.BroadcastType;

    /** Broadcast data. */
    public data: Uint8Array;

    /** Broadcast address. */
    public address: Uint8Array;

    /** Broadcast shardAddress. */
    public shardAddress: number;

    /**
     * Creates a new Broadcast instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Broadcast instance
     */
    public static create(properties?: IBroadcast): Broadcast;

    /**
     * Encodes the specified Broadcast message. Does not implicitly {@link Broadcast.verify|verify} messages.
     * @param message Broadcast message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Broadcast message, length delimited. Does not implicitly {@link Broadcast.verify|verify} messages.
     * @param message Broadcast message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Broadcast message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Broadcast
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Broadcast;

    /**
     * Decodes a Broadcast message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Broadcast
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Broadcast;

    /**
     * Verifies a Broadcast message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Broadcast message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Broadcast
     */
    public static fromObject(object: { [k: string]: any }): Broadcast;

    /**
     * Creates a plain object from a Broadcast message. Also converts values to other types if specified.
     * @param message Broadcast
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Broadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Broadcast to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace Broadcast {

    /** BroadcastType enum. */
    enum BroadcastType {
        TRANSACTION = 0,
        BLOCK_PROPOSAL = 1,
        CHECKPOINT_VOTE = 2,
        NEW_CONTRACT = 3,
        WITHDRAW = 4,
        MERKLE_ROOTS_SIGNED = 5,
        SCHNORR = 6,
        SIGN_SCHNORR = 7,
        MERKLE_PROOF = 8,
        MONEY_WITHDRAW = 9
    }
}

/** Properties of a Signature. */
export interface ISignature {

    /** Signature pubkey */
    pubkey?: (Uint8Array|null);

    /** Signature r */
    r?: (Uint8Array|null);

    /** Signature s */
    s?: (Uint8Array|null);

    /** Signature data */
    data?: (Uint8Array|null);
}

/** Represents a Signature. */
export class Signature implements ISignature {

    /**
     * Constructs a new Signature.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISignature);

    /** Signature pubkey. */
    public pubkey: Uint8Array;

    /** Signature r. */
    public r: Uint8Array;

    /** Signature s. */
    public s: Uint8Array;

    /** Signature data. */
    public data: Uint8Array;

    /**
     * Creates a new Signature instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Signature instance
     */
    public static create(properties?: ISignature): Signature;

    /**
     * Encodes the specified Signature message. Does not implicitly {@link Signature.verify|verify} messages.
     * @param message Signature message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISignature, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Signature message, length delimited. Does not implicitly {@link Signature.verify|verify} messages.
     * @param message Signature message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISignature, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Signature message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Signature
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Signature;

    /**
     * Decodes a Signature message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Signature
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Signature;

    /**
     * Verifies a Signature message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Signature message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Signature
     */
    public static fromObject(object: { [k: string]: any }): Signature;

    /**
     * Creates a plain object from a Signature message. Also converts values to other types if specified.
     * @param message Signature
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Signature, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Signature to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an Interests. */
export interface IInterests {

    /** Interests keys */
    keys?: (string[]|null);
}

/** Represents an Interests. */
export class Interests implements IInterests {

    /**
     * Constructs a new Interests.
     * @param [properties] Properties to set
     */
    constructor(properties?: IInterests);

    /** Interests keys. */
    public keys: string[];

    /**
     * Creates a new Interests instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Interests instance
     */
    public static create(properties?: IInterests): Interests;

    /**
     * Encodes the specified Interests message. Does not implicitly {@link Interests.verify|verify} messages.
     * @param message Interests message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IInterests, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Interests message, length delimited. Does not implicitly {@link Interests.verify|verify} messages.
     * @param message Interests message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IInterests, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Interests message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Interests
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Interests;

    /**
     * Decodes an Interests message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Interests
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Interests;

    /**
     * Verifies an Interests message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an Interests message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Interests
     */
    public static fromObject(object: { [k: string]: any }): Interests;

    /**
     * Creates a plain object from an Interests message. Also converts values to other types if specified.
     * @param message Interests
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Interests, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Interests to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Peers. */
export interface IPeers {

    /** Peers ip */
    ip?: (string[]|null);
}

/** Represents a Peers. */
export class Peers implements IPeers {

    /**
     * Constructs a new Peers.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPeers);

    /** Peers ip. */
    public ip: string[];

    /**
     * Creates a new Peers instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Peers instance
     */
    public static create(properties?: IPeers): Peers;

    /**
     * Encodes the specified Peers message. Does not implicitly {@link Peers.verify|verify} messages.
     * @param message Peers message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPeers, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Peers message, length delimited. Does not implicitly {@link Peers.verify|verify} messages.
     * @param message Peers message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPeers, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Peers message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Peers
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Peers;

    /**
     * Decodes a Peers message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Peers
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Peers;

    /**
     * Verifies a Peers message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Peers message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Peers
     */
    public static fromObject(object: { [k: string]: any }): Peers;

    /**
     * Creates a plain object from a Peers message. Also converts values to other types if specified.
     * @param message Peers
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Peers, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Peers to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PeersAndInterests. */
export interface IPeersAndInterests {

    /** PeersAndInterests keys */
    keys?: (string[]|null);

    /** PeersAndInterests ips */
    ips?: (string[]|null);
}

/** Represents a PeersAndInterests. */
export class PeersAndInterests implements IPeersAndInterests {

    /**
     * Constructs a new PeersAndInterests.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPeersAndInterests);

    /** PeersAndInterests keys. */
    public keys: string[];

    /** PeersAndInterests ips. */
    public ips: string[];

    /**
     * Creates a new PeersAndInterests instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PeersAndInterests instance
     */
    public static create(properties?: IPeersAndInterests): PeersAndInterests;

    /**
     * Encodes the specified PeersAndInterests message. Does not implicitly {@link PeersAndInterests.verify|verify} messages.
     * @param message PeersAndInterests message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPeersAndInterests, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PeersAndInterests message, length delimited. Does not implicitly {@link PeersAndInterests.verify|verify} messages.
     * @param message PeersAndInterests message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPeersAndInterests, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PeersAndInterests message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PeersAndInterests
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PeersAndInterests;

    /**
     * Decodes a PeersAndInterests message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PeersAndInterests
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PeersAndInterests;

    /**
     * Verifies a PeersAndInterests message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PeersAndInterests message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PeersAndInterests
     */
    public static fromObject(object: { [k: string]: any }): PeersAndInterests;

    /**
     * Creates a plain object from a PeersAndInterests message. Also converts values to other types if specified.
     * @param message PeersAndInterests
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PeersAndInterests, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PeersAndInterests to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RandomMessage. */
export interface IRandomMessage {

    /** RandomMessage pubkey */
    pubkey?: (Uint8Array|null);

    /** RandomMessage data */
    data?: (Uint8Array|null);
}

/** Represents a RandomMessage. */
export class RandomMessage implements IRandomMessage {

    /**
     * Constructs a new RandomMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRandomMessage);

    /** RandomMessage pubkey. */
    public pubkey: Uint8Array;

    /** RandomMessage data. */
    public data: Uint8Array;

    /**
     * Creates a new RandomMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RandomMessage instance
     */
    public static create(properties?: IRandomMessage): RandomMessage;

    /**
     * Encodes the specified RandomMessage message. Does not implicitly {@link RandomMessage.verify|verify} messages.
     * @param message RandomMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRandomMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RandomMessage message, length delimited. Does not implicitly {@link RandomMessage.verify|verify} messages.
     * @param message RandomMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRandomMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RandomMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RandomMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RandomMessage;

    /**
     * Decodes a RandomMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RandomMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RandomMessage;

    /**
     * Verifies a RandomMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RandomMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RandomMessage
     */
    public static fromObject(object: { [k: string]: any }): RandomMessage;

    /**
     * Creates a plain object from a RandomMessage message. Also converts values to other types if specified.
     * @param message RandomMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RandomMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RandomMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Transaction. */
export interface ITransaction {

    /** Transaction sender */
    sender?: (Uint8Array|null);

    /** Transaction recipient */
    recipient?: (string|null);

    /** Transaction nonce */
    nonce?: (number|null);

    /** Transaction amount */
    amount?: (number|Long|null);

    /** Transaction gas */
    gas?: (number|null);

    /** Transaction contractCreation */
    contractCreation?: (boolean|null);

    /** Transaction function */
    "function"?: (string|null);

    /** Transaction args */
    args?: ((number|Long)[]|null);

    /** Transaction data */
    data?: (Uint8Array|null);

    /** Transaction r */
    r?: (Uint8Array|null);

    /** Transaction s */
    s?: (Uint8Array|null);

    /** Transaction pubSchnorrKey */
    pubSchnorrKey?: (Uint8Array|null);

    /** Transaction pubBlsKey */
    pubBlsKey?: (Uint8Array|null);

    /** Transaction shard */
    shard?: (number|null);
}

/** Represents a Transaction. */
export class Transaction implements ITransaction {

    /**
     * Constructs a new Transaction.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITransaction);

    /** Transaction sender. */
    public sender: Uint8Array;

    /** Transaction recipient. */
    public recipient: string;

    /** Transaction nonce. */
    public nonce: number;

    /** Transaction amount. */
    public amount: (number|Long);

    /** Transaction gas. */
    public gas: number;

    /** Transaction contractCreation. */
    public contractCreation: boolean;

    /** Transaction function. */
    public function: string;

    /** Transaction args. */
    public args: (number|Long)[];

    /** Transaction data. */
    public data: Uint8Array;

    /** Transaction r. */
    public r: Uint8Array;

    /** Transaction s. */
    public s: Uint8Array;

    /** Transaction pubSchnorrKey. */
    public pubSchnorrKey: Uint8Array;

    /** Transaction pubBlsKey. */
    public pubBlsKey: Uint8Array;

    /** Transaction shard. */
    public shard: number;

    /**
     * Creates a new Transaction instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Transaction instance
     */
    public static create(properties?: ITransaction): Transaction;

    /**
     * Encodes the specified Transaction message. Does not implicitly {@link Transaction.verify|verify} messages.
     * @param message Transaction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITransaction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Transaction message, length delimited. Does not implicitly {@link Transaction.verify|verify} messages.
     * @param message Transaction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITransaction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Transaction message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Transaction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Transaction;

    /**
     * Decodes a Transaction message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Transaction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Transaction;

    /**
     * Verifies a Transaction message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Transaction message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Transaction
     */
    public static fromObject(object: { [k: string]: any }): Transaction;

    /**
     * Creates a plain object from a Transaction message. Also converts values to other types if specified.
     * @param message Transaction
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Transaction, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Transaction to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Block. */
export interface IBlock {

    /** Block index */
    index?: (number|Long|null);

    /** Block timestamp */
    timestamp?: (number|Long|null);

    /** Block prevHash */
    prevHash?: (Uint8Array|null);

    /** Block miner */
    miner?: (string|null);

    /** Block transactions */
    transactions?: (ITransaction[]|null);

    /** Block merkleRootReceipt */
    merkleRootReceipt?: (Uint8Array|null);

    /** Block shard */
    shard?: (number|null);
}

/** Represents a Block. */
export class Block implements IBlock {

    /**
     * Constructs a new Block.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBlock);

    /** Block index. */
    public index: (number|Long);

    /** Block timestamp. */
    public timestamp: (number|Long);

    /** Block prevHash. */
    public prevHash: Uint8Array;

    /** Block miner. */
    public miner: string;

    /** Block transactions. */
    public transactions: ITransaction[];

    /** Block merkleRootReceipt. */
    public merkleRootReceipt: Uint8Array;

    /** Block shard. */
    public shard: number;

    /**
     * Creates a new Block instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Block instance
     */
    public static create(properties?: IBlock): Block;

    /**
     * Encodes the specified Block message. Does not implicitly {@link Block.verify|verify} messages.
     * @param message Block message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBlock, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Block message, length delimited. Does not implicitly {@link Block.verify|verify} messages.
     * @param message Block message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBlock, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Block message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Block
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Block;

    /**
     * Decodes a Block message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Block
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Block;

    /**
     * Verifies a Block message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Block message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Block
     */
    public static fromObject(object: { [k: string]: any }): Block;

    /**
     * Creates a plain object from a Block message. Also converts values to other types if specified.
     * @param message Block
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Block, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Block to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a MerkleRootsSigned. */
export interface IMerkleRootsSigned {

    /** MerkleRootsSigned shard */
    shard?: (number|null);

    /** MerkleRootsSigned merkleRootsReceipt */
    merkleRootsReceipt?: (Uint8Array[]|null);

    /** MerkleRootsSigned rSignedMerkleRootsReceipt */
    rSignedMerkleRootsReceipt?: (Uint8Array|null);

    /** MerkleRootsSigned sSignedMerkleRootsReceipt */
    sSignedMerkleRootsReceipt?: (Uint8Array|null);

    /** MerkleRootsSigned rValidators */
    rValidators?: (Uint8Array[]|null);

    /** MerkleRootsSigned pValidators */
    pValidators?: (Uint8Array[]|null);
}

/** Represents a MerkleRootsSigned. */
export class MerkleRootsSigned implements IMerkleRootsSigned {

    /**
     * Constructs a new MerkleRootsSigned.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMerkleRootsSigned);

    /** MerkleRootsSigned shard. */
    public shard: number;

    /** MerkleRootsSigned merkleRootsReceipt. */
    public merkleRootsReceipt: Uint8Array[];

    /** MerkleRootsSigned rSignedMerkleRootsReceipt. */
    public rSignedMerkleRootsReceipt: Uint8Array;

    /** MerkleRootsSigned sSignedMerkleRootsReceipt. */
    public sSignedMerkleRootsReceipt: Uint8Array;

    /** MerkleRootsSigned rValidators. */
    public rValidators: Uint8Array[];

    /** MerkleRootsSigned pValidators. */
    public pValidators: Uint8Array[];

    /**
     * Creates a new MerkleRootsSigned instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MerkleRootsSigned instance
     */
    public static create(properties?: IMerkleRootsSigned): MerkleRootsSigned;

    /**
     * Encodes the specified MerkleRootsSigned message. Does not implicitly {@link MerkleRootsSigned.verify|verify} messages.
     * @param message MerkleRootsSigned message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMerkleRootsSigned, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified MerkleRootsSigned message, length delimited. Does not implicitly {@link MerkleRootsSigned.verify|verify} messages.
     * @param message MerkleRootsSigned message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMerkleRootsSigned, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MerkleRootsSigned message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MerkleRootsSigned
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MerkleRootsSigned;

    /**
     * Decodes a MerkleRootsSigned message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MerkleRootsSigned
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MerkleRootsSigned;

    /**
     * Verifies a MerkleRootsSigned message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a MerkleRootsSigned message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MerkleRootsSigned
     */
    public static fromObject(object: { [k: string]: any }): MerkleRootsSigned;

    /**
     * Creates a plain object from a MerkleRootsSigned message. Also converts values to other types if specified.
     * @param message MerkleRootsSigned
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: MerkleRootsSigned, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this MerkleRootsSigned to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a signSchnorr. */
export interface IsignSchnorr {

    /** signSchnorr wallet */
    wallet?: (string|null);

    /** signSchnorr rSchnorr */
    rSchnorr?: (Uint8Array|null);

    /** signSchnorr pSchnorr */
    pSchnorr?: (Uint8Array|null);

    /** signSchnorr signReceipt */
    signReceipt?: (Uint8Array|null);

    /** signSchnorr messageSignReceipt */
    messageSignReceipt?: (Uint8Array|null);
}

/** Represents a signSchnorr. */
export class signSchnorr implements IsignSchnorr {

    /**
     * Constructs a new signSchnorr.
     * @param [properties] Properties to set
     */
    constructor(properties?: IsignSchnorr);

    /** signSchnorr wallet. */
    public wallet: string;

    /** signSchnorr rSchnorr. */
    public rSchnorr: Uint8Array;

    /** signSchnorr pSchnorr. */
    public pSchnorr: Uint8Array;

    /** signSchnorr signReceipt. */
    public signReceipt: Uint8Array;

    /** signSchnorr messageSignReceipt. */
    public messageSignReceipt: Uint8Array;

    /**
     * Creates a new signSchnorr instance using the specified properties.
     * @param [properties] Properties to set
     * @returns signSchnorr instance
     */
    public static create(properties?: IsignSchnorr): signSchnorr;

    /**
     * Encodes the specified signSchnorr message. Does not implicitly {@link signSchnorr.verify|verify} messages.
     * @param message signSchnorr message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IsignSchnorr, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified signSchnorr message, length delimited. Does not implicitly {@link signSchnorr.verify|verify} messages.
     * @param message signSchnorr message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IsignSchnorr, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a signSchnorr message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns signSchnorr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): signSchnorr;

    /**
     * Decodes a signSchnorr message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns signSchnorr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): signSchnorr;

    /**
     * Verifies a signSchnorr message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a signSchnorr message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns signSchnorr
     */
    public static fromObject(object: { [k: string]: any }): signSchnorr;

    /**
     * Creates a plain object from a signSchnorr message. Also converts values to other types if specified.
     * @param message signSchnorr
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: signSchnorr, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this signSchnorr to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Schnorr. */
export interface ISchnorr {

    /** Schnorr r */
    r?: (Uint8Array|null);

    /** Schnorr p */
    p?: (string|null);
}

/** Represents a Schnorr. */
export class Schnorr implements ISchnorr {

    /**
     * Constructs a new Schnorr.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISchnorr);

    /** Schnorr r. */
    public r: Uint8Array;

    /** Schnorr p. */
    public p: string;

    /**
     * Creates a new Schnorr instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Schnorr instance
     */
    public static create(properties?: ISchnorr): Schnorr;

    /**
     * Encodes the specified Schnorr message. Does not implicitly {@link Schnorr.verify|verify} messages.
     * @param message Schnorr message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISchnorr, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Schnorr message, length delimited. Does not implicitly {@link Schnorr.verify|verify} messages.
     * @param message Schnorr message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISchnorr, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Schnorr message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Schnorr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Schnorr;

    /**
     * Decodes a Schnorr message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Schnorr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Schnorr;

    /**
     * Verifies a Schnorr message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Schnorr message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Schnorr
     */
    public static fromObject(object: { [k: string]: any }): Schnorr;

    /**
     * Creates a plain object from a Schnorr message. Also converts values to other types if specified.
     * @param message Schnorr
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Schnorr, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Schnorr to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Bls. */
export interface IBls {

    /** Bls block */
    block?: (IBlock|null);

    /** Bls signature */
    signature?: (Uint8Array|null);

    /** Bls pubKey */
    pubKey?: (Uint8Array|null);
}

/** Represents a Bls. */
export class Bls implements IBls {

    /**
     * Constructs a new Bls.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBls);

    /** Bls block. */
    public block?: (IBlock|null);

    /** Bls signature. */
    public signature: Uint8Array;

    /** Bls pubKey. */
    public pubKey: Uint8Array;

    /**
     * Creates a new Bls instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Bls instance
     */
    public static create(properties?: IBls): Bls;

    /**
     * Encodes the specified Bls message. Does not implicitly {@link Bls.verify|verify} messages.
     * @param message Bls message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBls, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Bls message, length delimited. Does not implicitly {@link Bls.verify|verify} messages.
     * @param message Bls message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBls, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Bls message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Bls
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Bls;

    /**
     * Decodes a Bls message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Bls
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Bls;

    /**
     * Verifies a Bls message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Bls message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Bls
     */
    public static fromObject(object: { [k: string]: any }): Bls;

    /**
     * Creates a plain object from a Bls message. Also converts values to other types if specified.
     * @param message Bls
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Bls, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Bls to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an AccountState. */
export interface IAccountState {

    /** AccountState balance */
    balance?: (number|Long|null);
}

/** Represents an AccountState. */
export class AccountState implements IAccountState {

    /**
     * Constructs a new AccountState.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAccountState);

    /** AccountState balance. */
    public balance: (number|Long);

    /**
     * Creates a new AccountState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AccountState instance
     */
    public static create(properties?: IAccountState): AccountState;

    /**
     * Encodes the specified AccountState message. Does not implicitly {@link AccountState.verify|verify} messages.
     * @param message AccountState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAccountState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AccountState message, length delimited. Does not implicitly {@link AccountState.verify|verify} messages.
     * @param message AccountState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAccountState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AccountState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AccountState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AccountState;

    /**
     * Decodes an AccountState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AccountState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AccountState;

    /**
     * Verifies an AccountState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an AccountState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AccountState
     */
    public static fromObject(object: { [k: string]: any }): AccountState;

    /**
     * Creates a plain object from an AccountState message. Also converts values to other types if specified.
     * @param message AccountState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AccountState, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AccountState to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ContractState. */
export interface IContractState {

    /** ContractState memory */
    memory?: (Uint8Array|null);

    /** ContractState globals */
    globals?: ((number|Long)[]|null);

    /** ContractState locked */
    locked?: (boolean|null);

    /** ContractState allowedWallet */
    allowedWallet?: (Uint8Array|null);
}

/** Represents a ContractState. */
export class ContractState implements IContractState {

    /**
     * Constructs a new ContractState.
     * @param [properties] Properties to set
     */
    constructor(properties?: IContractState);

    /** ContractState memory. */
    public memory: Uint8Array;

    /** ContractState globals. */
    public globals: (number|Long)[];

    /** ContractState locked. */
    public locked: boolean;

    /** ContractState allowedWallet. */
    public allowedWallet: Uint8Array;

    /**
     * Creates a new ContractState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ContractState instance
     */
    public static create(properties?: IContractState): ContractState;

    /**
     * Encodes the specified ContractState message. Does not implicitly {@link ContractState.verify|verify} messages.
     * @param message ContractState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IContractState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ContractState message, length delimited. Does not implicitly {@link ContractState.verify|verify} messages.
     * @param message ContractState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IContractState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ContractState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ContractState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ContractState;

    /**
     * Decodes a ContractState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ContractState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ContractState;

    /**
     * Verifies a ContractState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ContractState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ContractState
     */
    public static fromObject(object: { [k: string]: any }): ContractState;

    /**
     * Creates a plain object from a ContractState message. Also converts values to other types if specified.
     * @param message ContractState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ContractState, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ContractState to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CasperVote. */
export interface ICasperVote {

    /** CasperVote source */
    source?: (Uint8Array|null);

    /** CasperVote target */
    target?: (Uint8Array|null);

    /** CasperVote sourceHeight */
    sourceHeight?: (number|Long|null);

    /** CasperVote targetHeight */
    targetHeight?: (number|Long|null);

    /** CasperVote r */
    r?: (Uint8Array|null);

    /** CasperVote s */
    s?: (Uint8Array|null);

    /** CasperVote publicKey */
    publicKey?: (string|null);
}

/** Represents a CasperVote. */
export class CasperVote implements ICasperVote {

    /**
     * Constructs a new CasperVote.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICasperVote);

    /** CasperVote source. */
    public source: Uint8Array;

    /** CasperVote target. */
    public target: Uint8Array;

    /** CasperVote sourceHeight. */
    public sourceHeight: (number|Long);

    /** CasperVote targetHeight. */
    public targetHeight: (number|Long);

    /** CasperVote r. */
    public r: Uint8Array;

    /** CasperVote s. */
    public s: Uint8Array;

    /** CasperVote publicKey. */
    public publicKey: string;

    /**
     * Creates a new CasperVote instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CasperVote instance
     */
    public static create(properties?: ICasperVote): CasperVote;

    /**
     * Encodes the specified CasperVote message. Does not implicitly {@link CasperVote.verify|verify} messages.
     * @param message CasperVote message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICasperVote, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CasperVote message, length delimited. Does not implicitly {@link CasperVote.verify|verify} messages.
     * @param message CasperVote message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICasperVote, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CasperVote message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CasperVote
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CasperVote;

    /**
     * Decodes a CasperVote message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CasperVote
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CasperVote;

    /**
     * Verifies a CasperVote message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CasperVote message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CasperVote
     */
    public static fromObject(object: { [k: string]: any }): CasperVote;

    /**
     * Creates a plain object from a CasperVote message. Also converts values to other types if specified.
     * @param message CasperVote
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CasperVote, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CasperVote to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ValidatorWithdraw. */
export interface IValidatorWithdraw {

    /** ValidatorWithdraw publicKey */
    publicKey?: (string|null);

    /** ValidatorWithdraw r */
    r?: (Uint8Array|null);

    /** ValidatorWithdraw s */
    s?: (Uint8Array|null);
}

/** Represents a ValidatorWithdraw. */
export class ValidatorWithdraw implements IValidatorWithdraw {

    /**
     * Constructs a new ValidatorWithdraw.
     * @param [properties] Properties to set
     */
    constructor(properties?: IValidatorWithdraw);

    /** ValidatorWithdraw publicKey. */
    public publicKey: string;

    /** ValidatorWithdraw r. */
    public r: Uint8Array;

    /** ValidatorWithdraw s. */
    public s: Uint8Array;

    /**
     * Creates a new ValidatorWithdraw instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ValidatorWithdraw instance
     */
    public static create(properties?: IValidatorWithdraw): ValidatorWithdraw;

    /**
     * Encodes the specified ValidatorWithdraw message. Does not implicitly {@link ValidatorWithdraw.verify|verify} messages.
     * @param message ValidatorWithdraw message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IValidatorWithdraw, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ValidatorWithdraw message, length delimited. Does not implicitly {@link ValidatorWithdraw.verify|verify} messages.
     * @param message ValidatorWithdraw message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IValidatorWithdraw, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ValidatorWithdraw message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ValidatorWithdraw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ValidatorWithdraw;

    /**
     * Decodes a ValidatorWithdraw message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ValidatorWithdraw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ValidatorWithdraw;

    /**
     * Verifies a ValidatorWithdraw message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ValidatorWithdraw message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ValidatorWithdraw
     */
    public static fromObject(object: { [k: string]: any }): ValidatorWithdraw;

    /**
     * Creates a plain object from a ValidatorWithdraw message. Also converts values to other types if specified.
     * @param message ValidatorWithdraw
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ValidatorWithdraw, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ValidatorWithdraw to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Receipt. */
export interface IReceipt {

    /** Receipt sender */
    sender?: (string|null);

    /** Receipt recipient */
    recipient?: (string|null);

    /** Receipt amount */
    amount?: (number|Long|null);

    /** Receipt nonce */
    nonce?: (number|null);
}

/** Represents a Receipt. */
export class Receipt implements IReceipt {

    /**
     * Constructs a new Receipt.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReceipt);

    /** Receipt sender. */
    public sender: string;

    /** Receipt recipient. */
    public recipient: string;

    /** Receipt amount. */
    public amount: (number|Long);

    /** Receipt nonce. */
    public nonce: number;

    /**
     * Creates a new Receipt instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Receipt instance
     */
    public static create(properties?: IReceipt): Receipt;

    /**
     * Encodes the specified Receipt message. Does not implicitly {@link Receipt.verify|verify} messages.
     * @param message Receipt message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReceipt, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Receipt message, length delimited. Does not implicitly {@link Receipt.verify|verify} messages.
     * @param message Receipt message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReceipt, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Receipt message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Receipt
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Receipt;

    /**
     * Decodes a Receipt message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Receipt
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Receipt;

    /**
     * Verifies a Receipt message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Receipt message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Receipt
     */
    public static fromObject(object: { [k: string]: any }): Receipt;

    /**
     * Creates a plain object from a Receipt message. Also converts values to other types if specified.
     * @param message Receipt
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Receipt, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Receipt to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a MerkleProof. */
export interface IMerkleProof {

    /** MerkleProof mapLeaf */
    mapLeaf?: (string[]|null);

    /** MerkleProof mapHash */
    mapHash?: (Uint8Array[]|null);

    /** MerkleProof root */
    root?: (Uint8Array|null);

    /** MerkleProof leaf */
    leaf?: (Uint8Array|null);

    /** MerkleProof receipt */
    receipt?: (IReceipt|null);

    /** MerkleProof transaction */
    transaction?: (ITransaction|null);

    /** MerkleProof shard */
    shard?: (number|null);
}

/** Represents a MerkleProof. */
export class MerkleProof implements IMerkleProof {

    /**
     * Constructs a new MerkleProof.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMerkleProof);

    /** MerkleProof mapLeaf. */
    public mapLeaf: string[];

    /** MerkleProof mapHash. */
    public mapHash: Uint8Array[];

    /** MerkleProof root. */
    public root: Uint8Array;

    /** MerkleProof leaf. */
    public leaf: Uint8Array;

    /** MerkleProof receipt. */
    public receipt?: (IReceipt|null);

    /** MerkleProof transaction. */
    public transaction?: (ITransaction|null);

    /** MerkleProof shard. */
    public shard: number;

    /**
     * Creates a new MerkleProof instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MerkleProof instance
     */
    public static create(properties?: IMerkleProof): MerkleProof;

    /**
     * Encodes the specified MerkleProof message. Does not implicitly {@link MerkleProof.verify|verify} messages.
     * @param message MerkleProof message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMerkleProof, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified MerkleProof message, length delimited. Does not implicitly {@link MerkleProof.verify|verify} messages.
     * @param message MerkleProof message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMerkleProof, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MerkleProof message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MerkleProof
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MerkleProof;

    /**
     * Decodes a MerkleProof message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MerkleProof
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MerkleProof;

    /**
     * Verifies a MerkleProof message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a MerkleProof message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MerkleProof
     */
    public static fromObject(object: { [k: string]: any }): MerkleProof;

    /**
     * Creates a plain object from a MerkleProof message. Also converts values to other types if specified.
     * @param message MerkleProof
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: MerkleProof, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this MerkleProof to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a MoneyWithdraw. */
export interface IMoneyWithdraw {

    /** MoneyWithdraw wallet */
    wallet?: (string|null);
}

/** Represents a MoneyWithdraw. */
export class MoneyWithdraw implements IMoneyWithdraw {

    /**
     * Constructs a new MoneyWithdraw.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMoneyWithdraw);

    /** MoneyWithdraw wallet. */
    public wallet: string;

    /**
     * Creates a new MoneyWithdraw instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MoneyWithdraw instance
     */
    public static create(properties?: IMoneyWithdraw): MoneyWithdraw;

    /**
     * Encodes the specified MoneyWithdraw message. Does not implicitly {@link MoneyWithdraw.verify|verify} messages.
     * @param message MoneyWithdraw message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMoneyWithdraw, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified MoneyWithdraw message, length delimited. Does not implicitly {@link MoneyWithdraw.verify|verify} messages.
     * @param message MoneyWithdraw message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMoneyWithdraw, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MoneyWithdraw message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MoneyWithdraw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MoneyWithdraw;

    /**
     * Decodes a MoneyWithdraw message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MoneyWithdraw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MoneyWithdraw;

    /**
     * Verifies a MoneyWithdraw message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a MoneyWithdraw message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MoneyWithdraw
     */
    public static fromObject(object: { [k: string]: any }): MoneyWithdraw;

    /**
     * Creates a plain object from a MoneyWithdraw message. Also converts values to other types if specified.
     * @param message MoneyWithdraw
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: MoneyWithdraw, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this MoneyWithdraw to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
