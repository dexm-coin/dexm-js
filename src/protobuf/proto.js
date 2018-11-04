/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Request = (function() {

    /**
     * Properties of a Request.
     * @exports IRequest
     * @interface IRequest
     * @property {Request.MessageTypes|null} [type] Request type
     * @property {Uint8Array|null} [data] Request data
     * @property {Uint8Array|null} [address] Request address
     * @property {number|null} [shardAddress] Request shardAddress
     */

    /**
     * Constructs a new Request.
     * @exports Request
     * @classdesc Represents a Request.
     * @implements IRequest
     * @constructor
     * @param {IRequest=} [properties] Properties to set
     */
    function Request(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Request type.
     * @member {Request.MessageTypes} type
     * @memberof Request
     * @instance
     */
    Request.prototype.type = 0;

    /**
     * Request data.
     * @member {Uint8Array} data
     * @memberof Request
     * @instance
     */
    Request.prototype.data = $util.newBuffer([]);

    /**
     * Request address.
     * @member {Uint8Array} address
     * @memberof Request
     * @instance
     */
    Request.prototype.address = $util.newBuffer([]);

    /**
     * Request shardAddress.
     * @member {number} shardAddress
     * @memberof Request
     * @instance
     */
    Request.prototype.shardAddress = 0;

    /**
     * Creates a new Request instance using the specified properties.
     * @function create
     * @memberof Request
     * @static
     * @param {IRequest=} [properties] Properties to set
     * @returns {Request} Request instance
     */
    Request.create = function create(properties) {
        return new Request(properties);
    };

    /**
     * Encodes the specified Request message. Does not implicitly {@link Request.verify|verify} messages.
     * @function encode
     * @memberof Request
     * @static
     * @param {IRequest} message Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Request.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.type != null && message.hasOwnProperty("type"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
        if (message.data != null && message.hasOwnProperty("data"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
        if (message.address != null && message.hasOwnProperty("address"))
            writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.address);
        if (message.shardAddress != null && message.hasOwnProperty("shardAddress"))
            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.shardAddress);
        return writer;
    };

    /**
     * Encodes the specified Request message, length delimited. Does not implicitly {@link Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Request
     * @static
     * @param {IRequest} message Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Request message from the specified reader or buffer.
     * @function decode
     * @memberof Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Request} Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Request.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Request();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.type = reader.int32();
                break;
            case 2:
                message.data = reader.bytes();
                break;
            case 4:
                message.address = reader.bytes();
                break;
            case 5:
                message.shardAddress = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Request} Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Request message.
     * @function verify
     * @memberof Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Request.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.type != null && message.hasOwnProperty("type"))
            switch (message.type) {
            default:
                return "type: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                break;
            }
        if (message.data != null && message.hasOwnProperty("data"))
            if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                return "data: buffer expected";
        if (message.address != null && message.hasOwnProperty("address"))
            if (!(message.address && typeof message.address.length === "number" || $util.isString(message.address)))
                return "address: buffer expected";
        if (message.shardAddress != null && message.hasOwnProperty("shardAddress"))
            if (!$util.isInteger(message.shardAddress))
                return "shardAddress: integer expected";
        return null;
    };

    /**
     * Creates a Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Request} Request
     */
    Request.fromObject = function fromObject(object) {
        if (object instanceof $root.Request)
            return object;
        var message = new $root.Request();
        switch (object.type) {
        case "GET_BLOCKCHAIN_LEN":
        case 0:
            message.type = 0;
            break;
        case "GET_BLOCK":
        case 1:
            message.type = 1;
            break;
        case "GET_PEERS":
        case 2:
            message.type = 2;
            break;
        case "GET_WALLET_STATUS":
        case 3:
            message.type = 3;
            break;
        case "GET_VERSION":
        case 4:
            message.type = 4;
            break;
        case "GET_CONTRACT_CODE":
        case 5:
            message.type = 5;
            break;
        case "GET_CONTRACT_STATE":
        case 6:
            message.type = 6;
            break;
        case "GET_INTERESTS":
        case 7:
            message.type = 7;
            break;
        case "HASH_EXIST":
        case 8:
            message.type = 8;
            break;
        case "GET_WALLET":
        case 9:
            message.type = 9;
            break;
        }
        if (object.data != null)
            if (typeof object.data === "string")
                $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
            else if (object.data.length)
                message.data = object.data;
        if (object.address != null)
            if (typeof object.address === "string")
                $util.base64.decode(object.address, message.address = $util.newBuffer($util.base64.length(object.address)), 0);
            else if (object.address.length)
                message.address = object.address;
        if (object.shardAddress != null)
            message.shardAddress = object.shardAddress >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Request
     * @static
     * @param {Request} message Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Request.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.type = options.enums === String ? "GET_BLOCKCHAIN_LEN" : 0;
            if (options.bytes === String)
                object.data = "";
            else {
                object.data = [];
                if (options.bytes !== Array)
                    object.data = $util.newBuffer(object.data);
            }
            if (options.bytes === String)
                object.address = "";
            else {
                object.address = [];
                if (options.bytes !== Array)
                    object.address = $util.newBuffer(object.address);
            }
            object.shardAddress = 0;
        }
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = options.enums === String ? $root.Request.MessageTypes[message.type] : message.type;
        if (message.data != null && message.hasOwnProperty("data"))
            object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
        if (message.address != null && message.hasOwnProperty("address"))
            object.address = options.bytes === String ? $util.base64.encode(message.address, 0, message.address.length) : options.bytes === Array ? Array.prototype.slice.call(message.address) : message.address;
        if (message.shardAddress != null && message.hasOwnProperty("shardAddress"))
            object.shardAddress = message.shardAddress;
        return object;
    };

    /**
     * Converts this Request to JSON.
     * @function toJSON
     * @memberof Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * MessageTypes enum.
     * @name Request.MessageTypes
     * @enum {string}
     * @property {number} GET_BLOCKCHAIN_LEN=0 GET_BLOCKCHAIN_LEN value
     * @property {number} GET_BLOCK=1 GET_BLOCK value
     * @property {number} GET_PEERS=2 GET_PEERS value
     * @property {number} GET_WALLET_STATUS=3 GET_WALLET_STATUS value
     * @property {number} GET_VERSION=4 GET_VERSION value
     * @property {number} GET_CONTRACT_CODE=5 GET_CONTRACT_CODE value
     * @property {number} GET_CONTRACT_STATE=6 GET_CONTRACT_STATE value
     * @property {number} GET_INTERESTS=7 GET_INTERESTS value
     * @property {number} HASH_EXIST=8 HASH_EXIST value
     * @property {number} GET_WALLET=9 GET_WALLET value
     */
    Request.MessageTypes = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "GET_BLOCKCHAIN_LEN"] = 0;
        values[valuesById[1] = "GET_BLOCK"] = 1;
        values[valuesById[2] = "GET_PEERS"] = 2;
        values[valuesById[3] = "GET_WALLET_STATUS"] = 3;
        values[valuesById[4] = "GET_VERSION"] = 4;
        values[valuesById[5] = "GET_CONTRACT_CODE"] = 5;
        values[valuesById[6] = "GET_CONTRACT_STATE"] = 6;
        values[valuesById[7] = "GET_INTERESTS"] = 7;
        values[valuesById[8] = "HASH_EXIST"] = 8;
        values[valuesById[9] = "GET_WALLET"] = 9;
        return values;
    })();

    return Request;
})();

$root.Envelope = (function() {

    /**
     * Properties of an Envelope.
     * @exports IEnvelope
     * @interface IEnvelope
     * @property {Envelope.ContentType|null} [type] Envelope type
     * @property {Uint8Array|null} [data] Envelope data
     * @property {number|null} [shard] Envelope shard
     * @property {ISignature|null} [identity] Envelope identity
     * @property {number|null} [TTL] Envelope TTL
     */

    /**
     * Constructs a new Envelope.
     * @exports Envelope
     * @classdesc Represents an Envelope.
     * @implements IEnvelope
     * @constructor
     * @param {IEnvelope=} [properties] Properties to set
     */
    function Envelope(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Envelope type.
     * @member {Envelope.ContentType} type
     * @memberof Envelope
     * @instance
     */
    Envelope.prototype.type = 0;

    /**
     * Envelope data.
     * @member {Uint8Array} data
     * @memberof Envelope
     * @instance
     */
    Envelope.prototype.data = $util.newBuffer([]);

    /**
     * Envelope shard.
     * @member {number} shard
     * @memberof Envelope
     * @instance
     */
    Envelope.prototype.shard = 0;

    /**
     * Envelope identity.
     * @member {ISignature|null|undefined} identity
     * @memberof Envelope
     * @instance
     */
    Envelope.prototype.identity = null;

    /**
     * Envelope TTL.
     * @member {number} TTL
     * @memberof Envelope
     * @instance
     */
    Envelope.prototype.TTL = 0;

    /**
     * Creates a new Envelope instance using the specified properties.
     * @function create
     * @memberof Envelope
     * @static
     * @param {IEnvelope=} [properties] Properties to set
     * @returns {Envelope} Envelope instance
     */
    Envelope.create = function create(properties) {
        return new Envelope(properties);
    };

    /**
     * Encodes the specified Envelope message. Does not implicitly {@link Envelope.verify|verify} messages.
     * @function encode
     * @memberof Envelope
     * @static
     * @param {IEnvelope} message Envelope message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Envelope.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.type != null && message.hasOwnProperty("type"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
        if (message.data != null && message.hasOwnProperty("data"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
        if (message.shard != null && message.hasOwnProperty("shard"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.shard);
        if (message.identity != null && message.hasOwnProperty("identity"))
            $root.Signature.encode(message.identity, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.TTL != null && message.hasOwnProperty("TTL"))
            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.TTL);
        return writer;
    };

    /**
     * Encodes the specified Envelope message, length delimited. Does not implicitly {@link Envelope.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Envelope
     * @static
     * @param {IEnvelope} message Envelope message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Envelope.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Envelope message from the specified reader or buffer.
     * @function decode
     * @memberof Envelope
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Envelope} Envelope
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Envelope.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Envelope();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.type = reader.int32();
                break;
            case 2:
                message.data = reader.bytes();
                break;
            case 3:
                message.shard = reader.uint32();
                break;
            case 4:
                message.identity = $root.Signature.decode(reader, reader.uint32());
                break;
            case 5:
                message.TTL = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an Envelope message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Envelope
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Envelope} Envelope
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Envelope.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Envelope message.
     * @function verify
     * @memberof Envelope
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Envelope.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.type != null && message.hasOwnProperty("type"))
            switch (message.type) {
            default:
                return "type: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
                break;
            }
        if (message.data != null && message.hasOwnProperty("data"))
            if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                return "data: buffer expected";
        if (message.shard != null && message.hasOwnProperty("shard"))
            if (!$util.isInteger(message.shard))
                return "shard: integer expected";
        if (message.identity != null && message.hasOwnProperty("identity")) {
            var error = $root.Signature.verify(message.identity);
            if (error)
                return "identity." + error;
        }
        if (message.TTL != null && message.hasOwnProperty("TTL"))
            if (!$util.isInteger(message.TTL))
                return "TTL: integer expected";
        return null;
    };

    /**
     * Creates an Envelope message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Envelope
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Envelope} Envelope
     */
    Envelope.fromObject = function fromObject(object) {
        if (object instanceof $root.Envelope)
            return object;
        var message = new $root.Envelope();
        switch (object.type) {
        case "BROADCAST":
        case 0:
            message.type = 0;
            break;
        case "OTHER":
        case 1:
            message.type = 1;
            break;
        case "REQUEST":
        case 2:
            message.type = 2;
            break;
        case "INTERESTS":
        case 3:
            message.type = 3;
            break;
        case "NEIGHBOUR_INTERESTS":
        case 4:
            message.type = 4;
            break;
        }
        if (object.data != null)
            if (typeof object.data === "string")
                $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
            else if (object.data.length)
                message.data = object.data;
        if (object.shard != null)
            message.shard = object.shard >>> 0;
        if (object.identity != null) {
            if (typeof object.identity !== "object")
                throw TypeError(".Envelope.identity: object expected");
            message.identity = $root.Signature.fromObject(object.identity);
        }
        if (object.TTL != null)
            message.TTL = object.TTL >>> 0;
        return message;
    };

    /**
     * Creates a plain object from an Envelope message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Envelope
     * @static
     * @param {Envelope} message Envelope
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Envelope.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.type = options.enums === String ? "BROADCAST" : 0;
            if (options.bytes === String)
                object.data = "";
            else {
                object.data = [];
                if (options.bytes !== Array)
                    object.data = $util.newBuffer(object.data);
            }
            object.shard = 0;
            object.identity = null;
            object.TTL = 0;
        }
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = options.enums === String ? $root.Envelope.ContentType[message.type] : message.type;
        if (message.data != null && message.hasOwnProperty("data"))
            object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
        if (message.shard != null && message.hasOwnProperty("shard"))
            object.shard = message.shard;
        if (message.identity != null && message.hasOwnProperty("identity"))
            object.identity = $root.Signature.toObject(message.identity, options);
        if (message.TTL != null && message.hasOwnProperty("TTL"))
            object.TTL = message.TTL;
        return object;
    };

    /**
     * Converts this Envelope to JSON.
     * @function toJSON
     * @memberof Envelope
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Envelope.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * ContentType enum.
     * @name Envelope.ContentType
     * @enum {string}
     * @property {number} BROADCAST=0 BROADCAST value
     * @property {number} OTHER=1 OTHER value
     * @property {number} REQUEST=2 REQUEST value
     * @property {number} INTERESTS=3 INTERESTS value
     * @property {number} NEIGHBOUR_INTERESTS=4 NEIGHBOUR_INTERESTS value
     */
    Envelope.ContentType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "BROADCAST"] = 0;
        values[valuesById[1] = "OTHER"] = 1;
        values[valuesById[2] = "REQUEST"] = 2;
        values[valuesById[3] = "INTERESTS"] = 3;
        values[valuesById[4] = "NEIGHBOUR_INTERESTS"] = 4;
        return values;
    })();

    return Envelope;
})();

$root.Broadcast = (function() {

    /**
     * Properties of a Broadcast.
     * @exports IBroadcast
     * @interface IBroadcast
     * @property {Broadcast.BroadcastType|null} [type] Broadcast type
     * @property {Uint8Array|null} [data] Broadcast data
     * @property {Uint8Array|null} [address] Broadcast address
     * @property {number|null} [shardAddress] Broadcast shardAddress
     */

    /**
     * Constructs a new Broadcast.
     * @exports Broadcast
     * @classdesc Represents a Broadcast.
     * @implements IBroadcast
     * @constructor
     * @param {IBroadcast=} [properties] Properties to set
     */
    function Broadcast(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Broadcast type.
     * @member {Broadcast.BroadcastType} type
     * @memberof Broadcast
     * @instance
     */
    Broadcast.prototype.type = 0;

    /**
     * Broadcast data.
     * @member {Uint8Array} data
     * @memberof Broadcast
     * @instance
     */
    Broadcast.prototype.data = $util.newBuffer([]);

    /**
     * Broadcast address.
     * @member {Uint8Array} address
     * @memberof Broadcast
     * @instance
     */
    Broadcast.prototype.address = $util.newBuffer([]);

    /**
     * Broadcast shardAddress.
     * @member {number} shardAddress
     * @memberof Broadcast
     * @instance
     */
    Broadcast.prototype.shardAddress = 0;

    /**
     * Creates a new Broadcast instance using the specified properties.
     * @function create
     * @memberof Broadcast
     * @static
     * @param {IBroadcast=} [properties] Properties to set
     * @returns {Broadcast} Broadcast instance
     */
    Broadcast.create = function create(properties) {
        return new Broadcast(properties);
    };

    /**
     * Encodes the specified Broadcast message. Does not implicitly {@link Broadcast.verify|verify} messages.
     * @function encode
     * @memberof Broadcast
     * @static
     * @param {IBroadcast} message Broadcast message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Broadcast.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.type != null && message.hasOwnProperty("type"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
        if (message.data != null && message.hasOwnProperty("data"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
        if (message.address != null && message.hasOwnProperty("address"))
            writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.address);
        if (message.shardAddress != null && message.hasOwnProperty("shardAddress"))
            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.shardAddress);
        return writer;
    };

    /**
     * Encodes the specified Broadcast message, length delimited. Does not implicitly {@link Broadcast.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Broadcast
     * @static
     * @param {IBroadcast} message Broadcast message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Broadcast.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Broadcast message from the specified reader or buffer.
     * @function decode
     * @memberof Broadcast
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Broadcast} Broadcast
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Broadcast.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Broadcast();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.type = reader.int32();
                break;
            case 2:
                message.data = reader.bytes();
                break;
            case 4:
                message.address = reader.bytes();
                break;
            case 5:
                message.shardAddress = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Broadcast message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Broadcast
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Broadcast} Broadcast
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Broadcast.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Broadcast message.
     * @function verify
     * @memberof Broadcast
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Broadcast.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.type != null && message.hasOwnProperty("type"))
            switch (message.type) {
            default:
                return "type: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                break;
            }
        if (message.data != null && message.hasOwnProperty("data"))
            if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                return "data: buffer expected";
        if (message.address != null && message.hasOwnProperty("address"))
            if (!(message.address && typeof message.address.length === "number" || $util.isString(message.address)))
                return "address: buffer expected";
        if (message.shardAddress != null && message.hasOwnProperty("shardAddress"))
            if (!$util.isInteger(message.shardAddress))
                return "shardAddress: integer expected";
        return null;
    };

    /**
     * Creates a Broadcast message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Broadcast
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Broadcast} Broadcast
     */
    Broadcast.fromObject = function fromObject(object) {
        if (object instanceof $root.Broadcast)
            return object;
        var message = new $root.Broadcast();
        switch (object.type) {
        case "TRANSACTION":
        case 0:
            message.type = 0;
            break;
        case "BLOCK_PROPOSAL":
        case 1:
            message.type = 1;
            break;
        case "CHECKPOINT_VOTE":
        case 2:
            message.type = 2;
            break;
        case "NEW_CONTRACT":
        case 3:
            message.type = 3;
            break;
        case "WITHDRAW":
        case 4:
            message.type = 4;
            break;
        case "MERKLE_ROOTS_SIGNED":
        case 5:
            message.type = 5;
            break;
        case "SCHNORR":
        case 6:
            message.type = 6;
            break;
        case "SIGN_SCHNORR":
        case 7:
            message.type = 7;
            break;
        case "MERKLE_PROOF":
        case 8:
            message.type = 8;
            break;
        case "MONEY_WITHDRAW":
        case 9:
            message.type = 9;
            break;
        }
        if (object.data != null)
            if (typeof object.data === "string")
                $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
            else if (object.data.length)
                message.data = object.data;
        if (object.address != null)
            if (typeof object.address === "string")
                $util.base64.decode(object.address, message.address = $util.newBuffer($util.base64.length(object.address)), 0);
            else if (object.address.length)
                message.address = object.address;
        if (object.shardAddress != null)
            message.shardAddress = object.shardAddress >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a Broadcast message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Broadcast
     * @static
     * @param {Broadcast} message Broadcast
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Broadcast.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.type = options.enums === String ? "TRANSACTION" : 0;
            if (options.bytes === String)
                object.data = "";
            else {
                object.data = [];
                if (options.bytes !== Array)
                    object.data = $util.newBuffer(object.data);
            }
            if (options.bytes === String)
                object.address = "";
            else {
                object.address = [];
                if (options.bytes !== Array)
                    object.address = $util.newBuffer(object.address);
            }
            object.shardAddress = 0;
        }
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = options.enums === String ? $root.Broadcast.BroadcastType[message.type] : message.type;
        if (message.data != null && message.hasOwnProperty("data"))
            object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
        if (message.address != null && message.hasOwnProperty("address"))
            object.address = options.bytes === String ? $util.base64.encode(message.address, 0, message.address.length) : options.bytes === Array ? Array.prototype.slice.call(message.address) : message.address;
        if (message.shardAddress != null && message.hasOwnProperty("shardAddress"))
            object.shardAddress = message.shardAddress;
        return object;
    };

    /**
     * Converts this Broadcast to JSON.
     * @function toJSON
     * @memberof Broadcast
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Broadcast.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * BroadcastType enum.
     * @name Broadcast.BroadcastType
     * @enum {string}
     * @property {number} TRANSACTION=0 TRANSACTION value
     * @property {number} BLOCK_PROPOSAL=1 BLOCK_PROPOSAL value
     * @property {number} CHECKPOINT_VOTE=2 CHECKPOINT_VOTE value
     * @property {number} NEW_CONTRACT=3 NEW_CONTRACT value
     * @property {number} WITHDRAW=4 WITHDRAW value
     * @property {number} MERKLE_ROOTS_SIGNED=5 MERKLE_ROOTS_SIGNED value
     * @property {number} SCHNORR=6 SCHNORR value
     * @property {number} SIGN_SCHNORR=7 SIGN_SCHNORR value
     * @property {number} MERKLE_PROOF=8 MERKLE_PROOF value
     * @property {number} MONEY_WITHDRAW=9 MONEY_WITHDRAW value
     */
    Broadcast.BroadcastType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "TRANSACTION"] = 0;
        values[valuesById[1] = "BLOCK_PROPOSAL"] = 1;
        values[valuesById[2] = "CHECKPOINT_VOTE"] = 2;
        values[valuesById[3] = "NEW_CONTRACT"] = 3;
        values[valuesById[4] = "WITHDRAW"] = 4;
        values[valuesById[5] = "MERKLE_ROOTS_SIGNED"] = 5;
        values[valuesById[6] = "SCHNORR"] = 6;
        values[valuesById[7] = "SIGN_SCHNORR"] = 7;
        values[valuesById[8] = "MERKLE_PROOF"] = 8;
        values[valuesById[9] = "MONEY_WITHDRAW"] = 9;
        return values;
    })();

    return Broadcast;
})();

$root.Signature = (function() {

    /**
     * Properties of a Signature.
     * @exports ISignature
     * @interface ISignature
     * @property {Uint8Array|null} [pubkey] Signature pubkey
     * @property {Uint8Array|null} [r] Signature r
     * @property {Uint8Array|null} [s] Signature s
     * @property {Uint8Array|null} [data] Signature data
     */

    /**
     * Constructs a new Signature.
     * @exports Signature
     * @classdesc Represents a Signature.
     * @implements ISignature
     * @constructor
     * @param {ISignature=} [properties] Properties to set
     */
    function Signature(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Signature pubkey.
     * @member {Uint8Array} pubkey
     * @memberof Signature
     * @instance
     */
    Signature.prototype.pubkey = $util.newBuffer([]);

    /**
     * Signature r.
     * @member {Uint8Array} r
     * @memberof Signature
     * @instance
     */
    Signature.prototype.r = $util.newBuffer([]);

    /**
     * Signature s.
     * @member {Uint8Array} s
     * @memberof Signature
     * @instance
     */
    Signature.prototype.s = $util.newBuffer([]);

    /**
     * Signature data.
     * @member {Uint8Array} data
     * @memberof Signature
     * @instance
     */
    Signature.prototype.data = $util.newBuffer([]);

    /**
     * Creates a new Signature instance using the specified properties.
     * @function create
     * @memberof Signature
     * @static
     * @param {ISignature=} [properties] Properties to set
     * @returns {Signature} Signature instance
     */
    Signature.create = function create(properties) {
        return new Signature(properties);
    };

    /**
     * Encodes the specified Signature message. Does not implicitly {@link Signature.verify|verify} messages.
     * @function encode
     * @memberof Signature
     * @static
     * @param {ISignature} message Signature message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Signature.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.pubkey != null && message.hasOwnProperty("pubkey"))
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.pubkey);
        if (message.r != null && message.hasOwnProperty("r"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.r);
        if (message.s != null && message.hasOwnProperty("s"))
            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.s);
        if (message.data != null && message.hasOwnProperty("data"))
            writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.data);
        return writer;
    };

    /**
     * Encodes the specified Signature message, length delimited. Does not implicitly {@link Signature.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Signature
     * @static
     * @param {ISignature} message Signature message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Signature.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Signature message from the specified reader or buffer.
     * @function decode
     * @memberof Signature
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Signature} Signature
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Signature.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Signature();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.pubkey = reader.bytes();
                break;
            case 2:
                message.r = reader.bytes();
                break;
            case 3:
                message.s = reader.bytes();
                break;
            case 4:
                message.data = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Signature message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Signature
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Signature} Signature
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Signature.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Signature message.
     * @function verify
     * @memberof Signature
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Signature.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.pubkey != null && message.hasOwnProperty("pubkey"))
            if (!(message.pubkey && typeof message.pubkey.length === "number" || $util.isString(message.pubkey)))
                return "pubkey: buffer expected";
        if (message.r != null && message.hasOwnProperty("r"))
            if (!(message.r && typeof message.r.length === "number" || $util.isString(message.r)))
                return "r: buffer expected";
        if (message.s != null && message.hasOwnProperty("s"))
            if (!(message.s && typeof message.s.length === "number" || $util.isString(message.s)))
                return "s: buffer expected";
        if (message.data != null && message.hasOwnProperty("data"))
            if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                return "data: buffer expected";
        return null;
    };

    /**
     * Creates a Signature message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Signature
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Signature} Signature
     */
    Signature.fromObject = function fromObject(object) {
        if (object instanceof $root.Signature)
            return object;
        var message = new $root.Signature();
        if (object.pubkey != null)
            if (typeof object.pubkey === "string")
                $util.base64.decode(object.pubkey, message.pubkey = $util.newBuffer($util.base64.length(object.pubkey)), 0);
            else if (object.pubkey.length)
                message.pubkey = object.pubkey;
        if (object.r != null)
            if (typeof object.r === "string")
                $util.base64.decode(object.r, message.r = $util.newBuffer($util.base64.length(object.r)), 0);
            else if (object.r.length)
                message.r = object.r;
        if (object.s != null)
            if (typeof object.s === "string")
                $util.base64.decode(object.s, message.s = $util.newBuffer($util.base64.length(object.s)), 0);
            else if (object.s.length)
                message.s = object.s;
        if (object.data != null)
            if (typeof object.data === "string")
                $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
            else if (object.data.length)
                message.data = object.data;
        return message;
    };

    /**
     * Creates a plain object from a Signature message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Signature
     * @static
     * @param {Signature} message Signature
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Signature.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if (options.bytes === String)
                object.pubkey = "";
            else {
                object.pubkey = [];
                if (options.bytes !== Array)
                    object.pubkey = $util.newBuffer(object.pubkey);
            }
            if (options.bytes === String)
                object.r = "";
            else {
                object.r = [];
                if (options.bytes !== Array)
                    object.r = $util.newBuffer(object.r);
            }
            if (options.bytes === String)
                object.s = "";
            else {
                object.s = [];
                if (options.bytes !== Array)
                    object.s = $util.newBuffer(object.s);
            }
            if (options.bytes === String)
                object.data = "";
            else {
                object.data = [];
                if (options.bytes !== Array)
                    object.data = $util.newBuffer(object.data);
            }
        }
        if (message.pubkey != null && message.hasOwnProperty("pubkey"))
            object.pubkey = options.bytes === String ? $util.base64.encode(message.pubkey, 0, message.pubkey.length) : options.bytes === Array ? Array.prototype.slice.call(message.pubkey) : message.pubkey;
        if (message.r != null && message.hasOwnProperty("r"))
            object.r = options.bytes === String ? $util.base64.encode(message.r, 0, message.r.length) : options.bytes === Array ? Array.prototype.slice.call(message.r) : message.r;
        if (message.s != null && message.hasOwnProperty("s"))
            object.s = options.bytes === String ? $util.base64.encode(message.s, 0, message.s.length) : options.bytes === Array ? Array.prototype.slice.call(message.s) : message.s;
        if (message.data != null && message.hasOwnProperty("data"))
            object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
        return object;
    };

    /**
     * Converts this Signature to JSON.
     * @function toJSON
     * @memberof Signature
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Signature.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Signature;
})();

$root.Interests = (function() {

    /**
     * Properties of an Interests.
     * @exports IInterests
     * @interface IInterests
     * @property {Array.<string>|null} [keys] Interests keys
     */

    /**
     * Constructs a new Interests.
     * @exports Interests
     * @classdesc Represents an Interests.
     * @implements IInterests
     * @constructor
     * @param {IInterests=} [properties] Properties to set
     */
    function Interests(properties) {
        this.keys = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Interests keys.
     * @member {Array.<string>} keys
     * @memberof Interests
     * @instance
     */
    Interests.prototype.keys = $util.emptyArray;

    /**
     * Creates a new Interests instance using the specified properties.
     * @function create
     * @memberof Interests
     * @static
     * @param {IInterests=} [properties] Properties to set
     * @returns {Interests} Interests instance
     */
    Interests.create = function create(properties) {
        return new Interests(properties);
    };

    /**
     * Encodes the specified Interests message. Does not implicitly {@link Interests.verify|verify} messages.
     * @function encode
     * @memberof Interests
     * @static
     * @param {IInterests} message Interests message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Interests.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.keys != null && message.keys.length)
            for (var i = 0; i < message.keys.length; ++i)
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.keys[i]);
        return writer;
    };

    /**
     * Encodes the specified Interests message, length delimited. Does not implicitly {@link Interests.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Interests
     * @static
     * @param {IInterests} message Interests message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Interests.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Interests message from the specified reader or buffer.
     * @function decode
     * @memberof Interests
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Interests} Interests
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Interests.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Interests();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.keys && message.keys.length))
                    message.keys = [];
                message.keys.push(reader.string());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an Interests message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Interests
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Interests} Interests
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Interests.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Interests message.
     * @function verify
     * @memberof Interests
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Interests.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.keys != null && message.hasOwnProperty("keys")) {
            if (!Array.isArray(message.keys))
                return "keys: array expected";
            for (var i = 0; i < message.keys.length; ++i)
                if (!$util.isString(message.keys[i]))
                    return "keys: string[] expected";
        }
        return null;
    };

    /**
     * Creates an Interests message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Interests
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Interests} Interests
     */
    Interests.fromObject = function fromObject(object) {
        if (object instanceof $root.Interests)
            return object;
        var message = new $root.Interests();
        if (object.keys) {
            if (!Array.isArray(object.keys))
                throw TypeError(".Interests.keys: array expected");
            message.keys = [];
            for (var i = 0; i < object.keys.length; ++i)
                message.keys[i] = String(object.keys[i]);
        }
        return message;
    };

    /**
     * Creates a plain object from an Interests message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Interests
     * @static
     * @param {Interests} message Interests
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Interests.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.keys = [];
        if (message.keys && message.keys.length) {
            object.keys = [];
            for (var j = 0; j < message.keys.length; ++j)
                object.keys[j] = message.keys[j];
        }
        return object;
    };

    /**
     * Converts this Interests to JSON.
     * @function toJSON
     * @memberof Interests
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Interests.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Interests;
})();

$root.Peers = (function() {

    /**
     * Properties of a Peers.
     * @exports IPeers
     * @interface IPeers
     * @property {Array.<string>|null} [ip] Peers ip
     */

    /**
     * Constructs a new Peers.
     * @exports Peers
     * @classdesc Represents a Peers.
     * @implements IPeers
     * @constructor
     * @param {IPeers=} [properties] Properties to set
     */
    function Peers(properties) {
        this.ip = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Peers ip.
     * @member {Array.<string>} ip
     * @memberof Peers
     * @instance
     */
    Peers.prototype.ip = $util.emptyArray;

    /**
     * Creates a new Peers instance using the specified properties.
     * @function create
     * @memberof Peers
     * @static
     * @param {IPeers=} [properties] Properties to set
     * @returns {Peers} Peers instance
     */
    Peers.create = function create(properties) {
        return new Peers(properties);
    };

    /**
     * Encodes the specified Peers message. Does not implicitly {@link Peers.verify|verify} messages.
     * @function encode
     * @memberof Peers
     * @static
     * @param {IPeers} message Peers message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Peers.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.ip != null && message.ip.length)
            for (var i = 0; i < message.ip.length; ++i)
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.ip[i]);
        return writer;
    };

    /**
     * Encodes the specified Peers message, length delimited. Does not implicitly {@link Peers.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Peers
     * @static
     * @param {IPeers} message Peers message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Peers.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Peers message from the specified reader or buffer.
     * @function decode
     * @memberof Peers
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Peers} Peers
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Peers.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Peers();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.ip && message.ip.length))
                    message.ip = [];
                message.ip.push(reader.string());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Peers message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Peers
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Peers} Peers
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Peers.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Peers message.
     * @function verify
     * @memberof Peers
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Peers.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.ip != null && message.hasOwnProperty("ip")) {
            if (!Array.isArray(message.ip))
                return "ip: array expected";
            for (var i = 0; i < message.ip.length; ++i)
                if (!$util.isString(message.ip[i]))
                    return "ip: string[] expected";
        }
        return null;
    };

    /**
     * Creates a Peers message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Peers
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Peers} Peers
     */
    Peers.fromObject = function fromObject(object) {
        if (object instanceof $root.Peers)
            return object;
        var message = new $root.Peers();
        if (object.ip) {
            if (!Array.isArray(object.ip))
                throw TypeError(".Peers.ip: array expected");
            message.ip = [];
            for (var i = 0; i < object.ip.length; ++i)
                message.ip[i] = String(object.ip[i]);
        }
        return message;
    };

    /**
     * Creates a plain object from a Peers message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Peers
     * @static
     * @param {Peers} message Peers
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Peers.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.ip = [];
        if (message.ip && message.ip.length) {
            object.ip = [];
            for (var j = 0; j < message.ip.length; ++j)
                object.ip[j] = message.ip[j];
        }
        return object;
    };

    /**
     * Converts this Peers to JSON.
     * @function toJSON
     * @memberof Peers
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Peers.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Peers;
})();

$root.PeersAndInterests = (function() {

    /**
     * Properties of a PeersAndInterests.
     * @exports IPeersAndInterests
     * @interface IPeersAndInterests
     * @property {Array.<string>|null} [keys] PeersAndInterests keys
     * @property {Array.<string>|null} [ips] PeersAndInterests ips
     */

    /**
     * Constructs a new PeersAndInterests.
     * @exports PeersAndInterests
     * @classdesc Represents a PeersAndInterests.
     * @implements IPeersAndInterests
     * @constructor
     * @param {IPeersAndInterests=} [properties] Properties to set
     */
    function PeersAndInterests(properties) {
        this.keys = [];
        this.ips = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PeersAndInterests keys.
     * @member {Array.<string>} keys
     * @memberof PeersAndInterests
     * @instance
     */
    PeersAndInterests.prototype.keys = $util.emptyArray;

    /**
     * PeersAndInterests ips.
     * @member {Array.<string>} ips
     * @memberof PeersAndInterests
     * @instance
     */
    PeersAndInterests.prototype.ips = $util.emptyArray;

    /**
     * Creates a new PeersAndInterests instance using the specified properties.
     * @function create
     * @memberof PeersAndInterests
     * @static
     * @param {IPeersAndInterests=} [properties] Properties to set
     * @returns {PeersAndInterests} PeersAndInterests instance
     */
    PeersAndInterests.create = function create(properties) {
        return new PeersAndInterests(properties);
    };

    /**
     * Encodes the specified PeersAndInterests message. Does not implicitly {@link PeersAndInterests.verify|verify} messages.
     * @function encode
     * @memberof PeersAndInterests
     * @static
     * @param {IPeersAndInterests} message PeersAndInterests message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PeersAndInterests.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.keys != null && message.keys.length)
            for (var i = 0; i < message.keys.length; ++i)
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.keys[i]);
        if (message.ips != null && message.ips.length)
            for (var i = 0; i < message.ips.length; ++i)
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.ips[i]);
        return writer;
    };

    /**
     * Encodes the specified PeersAndInterests message, length delimited. Does not implicitly {@link PeersAndInterests.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PeersAndInterests
     * @static
     * @param {IPeersAndInterests} message PeersAndInterests message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PeersAndInterests.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PeersAndInterests message from the specified reader or buffer.
     * @function decode
     * @memberof PeersAndInterests
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PeersAndInterests} PeersAndInterests
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PeersAndInterests.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PeersAndInterests();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.keys && message.keys.length))
                    message.keys = [];
                message.keys.push(reader.string());
                break;
            case 2:
                if (!(message.ips && message.ips.length))
                    message.ips = [];
                message.ips.push(reader.string());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PeersAndInterests message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PeersAndInterests
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PeersAndInterests} PeersAndInterests
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PeersAndInterests.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PeersAndInterests message.
     * @function verify
     * @memberof PeersAndInterests
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PeersAndInterests.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.keys != null && message.hasOwnProperty("keys")) {
            if (!Array.isArray(message.keys))
                return "keys: array expected";
            for (var i = 0; i < message.keys.length; ++i)
                if (!$util.isString(message.keys[i]))
                    return "keys: string[] expected";
        }
        if (message.ips != null && message.hasOwnProperty("ips")) {
            if (!Array.isArray(message.ips))
                return "ips: array expected";
            for (var i = 0; i < message.ips.length; ++i)
                if (!$util.isString(message.ips[i]))
                    return "ips: string[] expected";
        }
        return null;
    };

    /**
     * Creates a PeersAndInterests message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PeersAndInterests
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PeersAndInterests} PeersAndInterests
     */
    PeersAndInterests.fromObject = function fromObject(object) {
        if (object instanceof $root.PeersAndInterests)
            return object;
        var message = new $root.PeersAndInterests();
        if (object.keys) {
            if (!Array.isArray(object.keys))
                throw TypeError(".PeersAndInterests.keys: array expected");
            message.keys = [];
            for (var i = 0; i < object.keys.length; ++i)
                message.keys[i] = String(object.keys[i]);
        }
        if (object.ips) {
            if (!Array.isArray(object.ips))
                throw TypeError(".PeersAndInterests.ips: array expected");
            message.ips = [];
            for (var i = 0; i < object.ips.length; ++i)
                message.ips[i] = String(object.ips[i]);
        }
        return message;
    };

    /**
     * Creates a plain object from a PeersAndInterests message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PeersAndInterests
     * @static
     * @param {PeersAndInterests} message PeersAndInterests
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PeersAndInterests.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.keys = [];
            object.ips = [];
        }
        if (message.keys && message.keys.length) {
            object.keys = [];
            for (var j = 0; j < message.keys.length; ++j)
                object.keys[j] = message.keys[j];
        }
        if (message.ips && message.ips.length) {
            object.ips = [];
            for (var j = 0; j < message.ips.length; ++j)
                object.ips[j] = message.ips[j];
        }
        return object;
    };

    /**
     * Converts this PeersAndInterests to JSON.
     * @function toJSON
     * @memberof PeersAndInterests
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PeersAndInterests.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PeersAndInterests;
})();

$root.RandomMessage = (function() {

    /**
     * Properties of a RandomMessage.
     * @exports IRandomMessage
     * @interface IRandomMessage
     * @property {Uint8Array|null} [pubkey] RandomMessage pubkey
     * @property {Uint8Array|null} [data] RandomMessage data
     */

    /**
     * Constructs a new RandomMessage.
     * @exports RandomMessage
     * @classdesc Represents a RandomMessage.
     * @implements IRandomMessage
     * @constructor
     * @param {IRandomMessage=} [properties] Properties to set
     */
    function RandomMessage(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RandomMessage pubkey.
     * @member {Uint8Array} pubkey
     * @memberof RandomMessage
     * @instance
     */
    RandomMessage.prototype.pubkey = $util.newBuffer([]);

    /**
     * RandomMessage data.
     * @member {Uint8Array} data
     * @memberof RandomMessage
     * @instance
     */
    RandomMessage.prototype.data = $util.newBuffer([]);

    /**
     * Creates a new RandomMessage instance using the specified properties.
     * @function create
     * @memberof RandomMessage
     * @static
     * @param {IRandomMessage=} [properties] Properties to set
     * @returns {RandomMessage} RandomMessage instance
     */
    RandomMessage.create = function create(properties) {
        return new RandomMessage(properties);
    };

    /**
     * Encodes the specified RandomMessage message. Does not implicitly {@link RandomMessage.verify|verify} messages.
     * @function encode
     * @memberof RandomMessage
     * @static
     * @param {IRandomMessage} message RandomMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RandomMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.pubkey != null && message.hasOwnProperty("pubkey"))
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.pubkey);
        if (message.data != null && message.hasOwnProperty("data"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
        return writer;
    };

    /**
     * Encodes the specified RandomMessage message, length delimited. Does not implicitly {@link RandomMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RandomMessage
     * @static
     * @param {IRandomMessage} message RandomMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RandomMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RandomMessage message from the specified reader or buffer.
     * @function decode
     * @memberof RandomMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RandomMessage} RandomMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RandomMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RandomMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.pubkey = reader.bytes();
                break;
            case 2:
                message.data = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RandomMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RandomMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RandomMessage} RandomMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RandomMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RandomMessage message.
     * @function verify
     * @memberof RandomMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RandomMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.pubkey != null && message.hasOwnProperty("pubkey"))
            if (!(message.pubkey && typeof message.pubkey.length === "number" || $util.isString(message.pubkey)))
                return "pubkey: buffer expected";
        if (message.data != null && message.hasOwnProperty("data"))
            if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                return "data: buffer expected";
        return null;
    };

    /**
     * Creates a RandomMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RandomMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RandomMessage} RandomMessage
     */
    RandomMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.RandomMessage)
            return object;
        var message = new $root.RandomMessage();
        if (object.pubkey != null)
            if (typeof object.pubkey === "string")
                $util.base64.decode(object.pubkey, message.pubkey = $util.newBuffer($util.base64.length(object.pubkey)), 0);
            else if (object.pubkey.length)
                message.pubkey = object.pubkey;
        if (object.data != null)
            if (typeof object.data === "string")
                $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
            else if (object.data.length)
                message.data = object.data;
        return message;
    };

    /**
     * Creates a plain object from a RandomMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RandomMessage
     * @static
     * @param {RandomMessage} message RandomMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RandomMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if (options.bytes === String)
                object.pubkey = "";
            else {
                object.pubkey = [];
                if (options.bytes !== Array)
                    object.pubkey = $util.newBuffer(object.pubkey);
            }
            if (options.bytes === String)
                object.data = "";
            else {
                object.data = [];
                if (options.bytes !== Array)
                    object.data = $util.newBuffer(object.data);
            }
        }
        if (message.pubkey != null && message.hasOwnProperty("pubkey"))
            object.pubkey = options.bytes === String ? $util.base64.encode(message.pubkey, 0, message.pubkey.length) : options.bytes === Array ? Array.prototype.slice.call(message.pubkey) : message.pubkey;
        if (message.data != null && message.hasOwnProperty("data"))
            object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
        return object;
    };

    /**
     * Converts this RandomMessage to JSON.
     * @function toJSON
     * @memberof RandomMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RandomMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RandomMessage;
})();

$root.Transaction = (function() {

    /**
     * Properties of a Transaction.
     * @exports ITransaction
     * @interface ITransaction
     * @property {Uint8Array|null} [sender] Transaction sender
     * @property {string|null} [recipient] Transaction recipient
     * @property {number|null} [nonce] Transaction nonce
     * @property {number|Long|null} [amount] Transaction amount
     * @property {number|null} [gas] Transaction gas
     * @property {boolean|null} [contractCreation] Transaction contractCreation
     * @property {string|null} ["function"] Transaction function
     * @property {Array.<number|Long>|null} [args] Transaction args
     * @property {Uint8Array|null} [data] Transaction data
     * @property {Uint8Array|null} [r] Transaction r
     * @property {Uint8Array|null} [s] Transaction s
     * @property {Uint8Array|null} [pubSchnorrKey] Transaction pubSchnorrKey
     * @property {Uint8Array|null} [pubBlsKey] Transaction pubBlsKey
     * @property {number|null} [shard] Transaction shard
     */

    /**
     * Constructs a new Transaction.
     * @exports Transaction
     * @classdesc Represents a Transaction.
     * @implements ITransaction
     * @constructor
     * @param {ITransaction=} [properties] Properties to set
     */
    function Transaction(properties) {
        this.args = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Transaction sender.
     * @member {Uint8Array} sender
     * @memberof Transaction
     * @instance
     */
    Transaction.prototype.sender = $util.newBuffer([]);

    /**
     * Transaction recipient.
     * @member {string} recipient
     * @memberof Transaction
     * @instance
     */
    Transaction.prototype.recipient = "";

    /**
     * Transaction nonce.
     * @member {number} nonce
     * @memberof Transaction
     * @instance
     */
    Transaction.prototype.nonce = 0;

    /**
     * Transaction amount.
     * @member {number|Long} amount
     * @memberof Transaction
     * @instance
     */
    Transaction.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Transaction gas.
     * @member {number} gas
     * @memberof Transaction
     * @instance
     */
    Transaction.prototype.gas = 0;

    /**
     * Transaction contractCreation.
     * @member {boolean} contractCreation
     * @memberof Transaction
     * @instance
     */
    Transaction.prototype.contractCreation = false;

    /**
     * Transaction function.
     * @member {string} function
     * @memberof Transaction
     * @instance
     */
    Transaction.prototype["function"] = "";

    /**
     * Transaction args.
     * @member {Array.<number|Long>} args
     * @memberof Transaction
     * @instance
     */
    Transaction.prototype.args = $util.emptyArray;

    /**
     * Transaction data.
     * @member {Uint8Array} data
     * @memberof Transaction
     * @instance
     */
    Transaction.prototype.data = $util.newBuffer([]);

    /**
     * Transaction r.
     * @member {Uint8Array} r
     * @memberof Transaction
     * @instance
     */
    Transaction.prototype.r = $util.newBuffer([]);

    /**
     * Transaction s.
     * @member {Uint8Array} s
     * @memberof Transaction
     * @instance
     */
    Transaction.prototype.s = $util.newBuffer([]);

    /**
     * Transaction pubSchnorrKey.
     * @member {Uint8Array} pubSchnorrKey
     * @memberof Transaction
     * @instance
     */
    Transaction.prototype.pubSchnorrKey = $util.newBuffer([]);

    /**
     * Transaction pubBlsKey.
     * @member {Uint8Array} pubBlsKey
     * @memberof Transaction
     * @instance
     */
    Transaction.prototype.pubBlsKey = $util.newBuffer([]);

    /**
     * Transaction shard.
     * @member {number} shard
     * @memberof Transaction
     * @instance
     */
    Transaction.prototype.shard = 0;

    /**
     * Creates a new Transaction instance using the specified properties.
     * @function create
     * @memberof Transaction
     * @static
     * @param {ITransaction=} [properties] Properties to set
     * @returns {Transaction} Transaction instance
     */
    Transaction.create = function create(properties) {
        return new Transaction(properties);
    };

    /**
     * Encodes the specified Transaction message. Does not implicitly {@link Transaction.verify|verify} messages.
     * @function encode
     * @memberof Transaction
     * @static
     * @param {ITransaction} message Transaction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Transaction.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.sender != null && message.hasOwnProperty("sender"))
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.sender);
        if (message.recipient != null && message.hasOwnProperty("recipient"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.recipient);
        if (message.nonce != null && message.hasOwnProperty("nonce"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.nonce);
        if (message.amount != null && message.hasOwnProperty("amount"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.amount);
        if (message.gas != null && message.hasOwnProperty("gas"))
            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.gas);
        if (message.contractCreation != null && message.hasOwnProperty("contractCreation"))
            writer.uint32(/* id 6, wireType 0 =*/48).bool(message.contractCreation);
        if (message["function"] != null && message.hasOwnProperty("function"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message["function"]);
        if (message.args != null && message.args.length) {
            writer.uint32(/* id 8, wireType 2 =*/66).fork();
            for (var i = 0; i < message.args.length; ++i)
                writer.uint64(message.args[i]);
            writer.ldelim();
        }
        if (message.data != null && message.hasOwnProperty("data"))
            writer.uint32(/* id 9, wireType 2 =*/74).bytes(message.data);
        if (message.r != null && message.hasOwnProperty("r"))
            writer.uint32(/* id 10, wireType 2 =*/82).bytes(message.r);
        if (message.s != null && message.hasOwnProperty("s"))
            writer.uint32(/* id 11, wireType 2 =*/90).bytes(message.s);
        if (message.pubSchnorrKey != null && message.hasOwnProperty("pubSchnorrKey"))
            writer.uint32(/* id 12, wireType 2 =*/98).bytes(message.pubSchnorrKey);
        if (message.pubBlsKey != null && message.hasOwnProperty("pubBlsKey"))
            writer.uint32(/* id 13, wireType 2 =*/106).bytes(message.pubBlsKey);
        if (message.shard != null && message.hasOwnProperty("shard"))
            writer.uint32(/* id 14, wireType 0 =*/112).uint32(message.shard);
        return writer;
    };

    /**
     * Encodes the specified Transaction message, length delimited. Does not implicitly {@link Transaction.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Transaction
     * @static
     * @param {ITransaction} message Transaction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Transaction.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Transaction message from the specified reader or buffer.
     * @function decode
     * @memberof Transaction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Transaction} Transaction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Transaction.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Transaction();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.sender = reader.bytes();
                break;
            case 2:
                message.recipient = reader.string();
                break;
            case 3:
                message.nonce = reader.uint32();
                break;
            case 4:
                message.amount = reader.uint64();
                break;
            case 5:
                message.gas = reader.uint32();
                break;
            case 6:
                message.contractCreation = reader.bool();
                break;
            case 7:
                message["function"] = reader.string();
                break;
            case 8:
                if (!(message.args && message.args.length))
                    message.args = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.args.push(reader.uint64());
                } else
                    message.args.push(reader.uint64());
                break;
            case 9:
                message.data = reader.bytes();
                break;
            case 10:
                message.r = reader.bytes();
                break;
            case 11:
                message.s = reader.bytes();
                break;
            case 12:
                message.pubSchnorrKey = reader.bytes();
                break;
            case 13:
                message.pubBlsKey = reader.bytes();
                break;
            case 14:
                message.shard = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Transaction message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Transaction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Transaction} Transaction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Transaction.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Transaction message.
     * @function verify
     * @memberof Transaction
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Transaction.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.sender != null && message.hasOwnProperty("sender"))
            if (!(message.sender && typeof message.sender.length === "number" || $util.isString(message.sender)))
                return "sender: buffer expected";
        if (message.recipient != null && message.hasOwnProperty("recipient"))
            if (!$util.isString(message.recipient))
                return "recipient: string expected";
        if (message.nonce != null && message.hasOwnProperty("nonce"))
            if (!$util.isInteger(message.nonce))
                return "nonce: integer expected";
        if (message.amount != null && message.hasOwnProperty("amount"))
            if (!$util.isInteger(message.amount) && !(message.amount && $util.isInteger(message.amount.low) && $util.isInteger(message.amount.high)))
                return "amount: integer|Long expected";
        if (message.gas != null && message.hasOwnProperty("gas"))
            if (!$util.isInteger(message.gas))
                return "gas: integer expected";
        if (message.contractCreation != null && message.hasOwnProperty("contractCreation"))
            if (typeof message.contractCreation !== "boolean")
                return "contractCreation: boolean expected";
        if (message["function"] != null && message.hasOwnProperty("function"))
            if (!$util.isString(message["function"]))
                return "function: string expected";
        if (message.args != null && message.hasOwnProperty("args")) {
            if (!Array.isArray(message.args))
                return "args: array expected";
            for (var i = 0; i < message.args.length; ++i)
                if (!$util.isInteger(message.args[i]) && !(message.args[i] && $util.isInteger(message.args[i].low) && $util.isInteger(message.args[i].high)))
                    return "args: integer|Long[] expected";
        }
        if (message.data != null && message.hasOwnProperty("data"))
            if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                return "data: buffer expected";
        if (message.r != null && message.hasOwnProperty("r"))
            if (!(message.r && typeof message.r.length === "number" || $util.isString(message.r)))
                return "r: buffer expected";
        if (message.s != null && message.hasOwnProperty("s"))
            if (!(message.s && typeof message.s.length === "number" || $util.isString(message.s)))
                return "s: buffer expected";
        if (message.pubSchnorrKey != null && message.hasOwnProperty("pubSchnorrKey"))
            if (!(message.pubSchnorrKey && typeof message.pubSchnorrKey.length === "number" || $util.isString(message.pubSchnorrKey)))
                return "pubSchnorrKey: buffer expected";
        if (message.pubBlsKey != null && message.hasOwnProperty("pubBlsKey"))
            if (!(message.pubBlsKey && typeof message.pubBlsKey.length === "number" || $util.isString(message.pubBlsKey)))
                return "pubBlsKey: buffer expected";
        if (message.shard != null && message.hasOwnProperty("shard"))
            if (!$util.isInteger(message.shard))
                return "shard: integer expected";
        return null;
    };

    /**
     * Creates a Transaction message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Transaction
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Transaction} Transaction
     */
    Transaction.fromObject = function fromObject(object) {
        if (object instanceof $root.Transaction)
            return object;
        var message = new $root.Transaction();
        if (object.sender != null)
            if (typeof object.sender === "string")
                $util.base64.decode(object.sender, message.sender = $util.newBuffer($util.base64.length(object.sender)), 0);
            else if (object.sender.length)
                message.sender = object.sender;
        if (object.recipient != null)
            message.recipient = String(object.recipient);
        if (object.nonce != null)
            message.nonce = object.nonce >>> 0;
        if (object.amount != null)
            if ($util.Long)
                (message.amount = $util.Long.fromValue(object.amount)).unsigned = true;
            else if (typeof object.amount === "string")
                message.amount = parseInt(object.amount, 10);
            else if (typeof object.amount === "number")
                message.amount = object.amount;
            else if (typeof object.amount === "object")
                message.amount = new $util.LongBits(object.amount.low >>> 0, object.amount.high >>> 0).toNumber(true);
        if (object.gas != null)
            message.gas = object.gas >>> 0;
        if (object.contractCreation != null)
            message.contractCreation = Boolean(object.contractCreation);
        if (object["function"] != null)
            message["function"] = String(object["function"]);
        if (object.args) {
            if (!Array.isArray(object.args))
                throw TypeError(".Transaction.args: array expected");
            message.args = [];
            for (var i = 0; i < object.args.length; ++i)
                if ($util.Long)
                    (message.args[i] = $util.Long.fromValue(object.args[i])).unsigned = true;
                else if (typeof object.args[i] === "string")
                    message.args[i] = parseInt(object.args[i], 10);
                else if (typeof object.args[i] === "number")
                    message.args[i] = object.args[i];
                else if (typeof object.args[i] === "object")
                    message.args[i] = new $util.LongBits(object.args[i].low >>> 0, object.args[i].high >>> 0).toNumber(true);
        }
        if (object.data != null)
            if (typeof object.data === "string")
                $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
            else if (object.data.length)
                message.data = object.data;
        if (object.r != null)
            if (typeof object.r === "string")
                $util.base64.decode(object.r, message.r = $util.newBuffer($util.base64.length(object.r)), 0);
            else if (object.r.length)
                message.r = object.r;
        if (object.s != null)
            if (typeof object.s === "string")
                $util.base64.decode(object.s, message.s = $util.newBuffer($util.base64.length(object.s)), 0);
            else if (object.s.length)
                message.s = object.s;
        if (object.pubSchnorrKey != null)
            if (typeof object.pubSchnorrKey === "string")
                $util.base64.decode(object.pubSchnorrKey, message.pubSchnorrKey = $util.newBuffer($util.base64.length(object.pubSchnorrKey)), 0);
            else if (object.pubSchnorrKey.length)
                message.pubSchnorrKey = object.pubSchnorrKey;
        if (object.pubBlsKey != null)
            if (typeof object.pubBlsKey === "string")
                $util.base64.decode(object.pubBlsKey, message.pubBlsKey = $util.newBuffer($util.base64.length(object.pubBlsKey)), 0);
            else if (object.pubBlsKey.length)
                message.pubBlsKey = object.pubBlsKey;
        if (object.shard != null)
            message.shard = object.shard >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a Transaction message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Transaction
     * @static
     * @param {Transaction} message Transaction
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Transaction.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.args = [];
        if (options.defaults) {
            if (options.bytes === String)
                object.sender = "";
            else {
                object.sender = [];
                if (options.bytes !== Array)
                    object.sender = $util.newBuffer(object.sender);
            }
            object.recipient = "";
            object.nonce = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.amount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.amount = options.longs === String ? "0" : 0;
            object.gas = 0;
            object.contractCreation = false;
            object["function"] = "";
            if (options.bytes === String)
                object.data = "";
            else {
                object.data = [];
                if (options.bytes !== Array)
                    object.data = $util.newBuffer(object.data);
            }
            if (options.bytes === String)
                object.r = "";
            else {
                object.r = [];
                if (options.bytes !== Array)
                    object.r = $util.newBuffer(object.r);
            }
            if (options.bytes === String)
                object.s = "";
            else {
                object.s = [];
                if (options.bytes !== Array)
                    object.s = $util.newBuffer(object.s);
            }
            if (options.bytes === String)
                object.pubSchnorrKey = "";
            else {
                object.pubSchnorrKey = [];
                if (options.bytes !== Array)
                    object.pubSchnorrKey = $util.newBuffer(object.pubSchnorrKey);
            }
            if (options.bytes === String)
                object.pubBlsKey = "";
            else {
                object.pubBlsKey = [];
                if (options.bytes !== Array)
                    object.pubBlsKey = $util.newBuffer(object.pubBlsKey);
            }
            object.shard = 0;
        }
        if (message.sender != null && message.hasOwnProperty("sender"))
            object.sender = options.bytes === String ? $util.base64.encode(message.sender, 0, message.sender.length) : options.bytes === Array ? Array.prototype.slice.call(message.sender) : message.sender;
        if (message.recipient != null && message.hasOwnProperty("recipient"))
            object.recipient = message.recipient;
        if (message.nonce != null && message.hasOwnProperty("nonce"))
            object.nonce = message.nonce;
        if (message.amount != null && message.hasOwnProperty("amount"))
            if (typeof message.amount === "number")
                object.amount = options.longs === String ? String(message.amount) : message.amount;
            else
                object.amount = options.longs === String ? $util.Long.prototype.toString.call(message.amount) : options.longs === Number ? new $util.LongBits(message.amount.low >>> 0, message.amount.high >>> 0).toNumber(true) : message.amount;
        if (message.gas != null && message.hasOwnProperty("gas"))
            object.gas = message.gas;
        if (message.contractCreation != null && message.hasOwnProperty("contractCreation"))
            object.contractCreation = message.contractCreation;
        if (message["function"] != null && message.hasOwnProperty("function"))
            object["function"] = message["function"];
        if (message.args && message.args.length) {
            object.args = [];
            for (var j = 0; j < message.args.length; ++j)
                if (typeof message.args[j] === "number")
                    object.args[j] = options.longs === String ? String(message.args[j]) : message.args[j];
                else
                    object.args[j] = options.longs === String ? $util.Long.prototype.toString.call(message.args[j]) : options.longs === Number ? new $util.LongBits(message.args[j].low >>> 0, message.args[j].high >>> 0).toNumber(true) : message.args[j];
        }
        if (message.data != null && message.hasOwnProperty("data"))
            object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
        if (message.r != null && message.hasOwnProperty("r"))
            object.r = options.bytes === String ? $util.base64.encode(message.r, 0, message.r.length) : options.bytes === Array ? Array.prototype.slice.call(message.r) : message.r;
        if (message.s != null && message.hasOwnProperty("s"))
            object.s = options.bytes === String ? $util.base64.encode(message.s, 0, message.s.length) : options.bytes === Array ? Array.prototype.slice.call(message.s) : message.s;
        if (message.pubSchnorrKey != null && message.hasOwnProperty("pubSchnorrKey"))
            object.pubSchnorrKey = options.bytes === String ? $util.base64.encode(message.pubSchnorrKey, 0, message.pubSchnorrKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.pubSchnorrKey) : message.pubSchnorrKey;
        if (message.pubBlsKey != null && message.hasOwnProperty("pubBlsKey"))
            object.pubBlsKey = options.bytes === String ? $util.base64.encode(message.pubBlsKey, 0, message.pubBlsKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.pubBlsKey) : message.pubBlsKey;
        if (message.shard != null && message.hasOwnProperty("shard"))
            object.shard = message.shard;
        return object;
    };

    /**
     * Converts this Transaction to JSON.
     * @function toJSON
     * @memberof Transaction
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Transaction.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Transaction;
})();

$root.Block = (function() {

    /**
     * Properties of a Block.
     * @exports IBlock
     * @interface IBlock
     * @property {number|Long|null} [index] Block index
     * @property {number|Long|null} [timestamp] Block timestamp
     * @property {Uint8Array|null} [prevHash] Block prevHash
     * @property {string|null} [miner] Block miner
     * @property {Array.<ITransaction>|null} [transactions] Block transactions
     * @property {Uint8Array|null} [merkleRootReceipt] Block merkleRootReceipt
     * @property {number|null} [shard] Block shard
     */

    /**
     * Constructs a new Block.
     * @exports Block
     * @classdesc Represents a Block.
     * @implements IBlock
     * @constructor
     * @param {IBlock=} [properties] Properties to set
     */
    function Block(properties) {
        this.transactions = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Block index.
     * @member {number|Long} index
     * @memberof Block
     * @instance
     */
    Block.prototype.index = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Block timestamp.
     * @member {number|Long} timestamp
     * @memberof Block
     * @instance
     */
    Block.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Block prevHash.
     * @member {Uint8Array} prevHash
     * @memberof Block
     * @instance
     */
    Block.prototype.prevHash = $util.newBuffer([]);

    /**
     * Block miner.
     * @member {string} miner
     * @memberof Block
     * @instance
     */
    Block.prototype.miner = "";

    /**
     * Block transactions.
     * @member {Array.<ITransaction>} transactions
     * @memberof Block
     * @instance
     */
    Block.prototype.transactions = $util.emptyArray;

    /**
     * Block merkleRootReceipt.
     * @member {Uint8Array} merkleRootReceipt
     * @memberof Block
     * @instance
     */
    Block.prototype.merkleRootReceipt = $util.newBuffer([]);

    /**
     * Block shard.
     * @member {number} shard
     * @memberof Block
     * @instance
     */
    Block.prototype.shard = 0;

    /**
     * Creates a new Block instance using the specified properties.
     * @function create
     * @memberof Block
     * @static
     * @param {IBlock=} [properties] Properties to set
     * @returns {Block} Block instance
     */
    Block.create = function create(properties) {
        return new Block(properties);
    };

    /**
     * Encodes the specified Block message. Does not implicitly {@link Block.verify|verify} messages.
     * @function encode
     * @memberof Block
     * @static
     * @param {IBlock} message Block message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Block.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.index != null && message.hasOwnProperty("index"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.index);
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.timestamp);
        if (message.prevHash != null && message.hasOwnProperty("prevHash"))
            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.prevHash);
        if (message.miner != null && message.hasOwnProperty("miner"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.miner);
        if (message.transactions != null && message.transactions.length)
            for (var i = 0; i < message.transactions.length; ++i)
                $root.Transaction.encode(message.transactions[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.merkleRootReceipt != null && message.hasOwnProperty("merkleRootReceipt"))
            writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.merkleRootReceipt);
        if (message.shard != null && message.hasOwnProperty("shard"))
            writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.shard);
        return writer;
    };

    /**
     * Encodes the specified Block message, length delimited. Does not implicitly {@link Block.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Block
     * @static
     * @param {IBlock} message Block message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Block.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Block message from the specified reader or buffer.
     * @function decode
     * @memberof Block
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Block} Block
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Block.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Block();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.index = reader.uint64();
                break;
            case 2:
                message.timestamp = reader.uint64();
                break;
            case 3:
                message.prevHash = reader.bytes();
                break;
            case 4:
                message.miner = reader.string();
                break;
            case 5:
                if (!(message.transactions && message.transactions.length))
                    message.transactions = [];
                message.transactions.push($root.Transaction.decode(reader, reader.uint32()));
                break;
            case 6:
                message.merkleRootReceipt = reader.bytes();
                break;
            case 7:
                message.shard = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Block message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Block
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Block} Block
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Block.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Block message.
     * @function verify
     * @memberof Block
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Block.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.index != null && message.hasOwnProperty("index"))
            if (!$util.isInteger(message.index) && !(message.index && $util.isInteger(message.index.low) && $util.isInteger(message.index.high)))
                return "index: integer|Long expected";
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                return "timestamp: integer|Long expected";
        if (message.prevHash != null && message.hasOwnProperty("prevHash"))
            if (!(message.prevHash && typeof message.prevHash.length === "number" || $util.isString(message.prevHash)))
                return "prevHash: buffer expected";
        if (message.miner != null && message.hasOwnProperty("miner"))
            if (!$util.isString(message.miner))
                return "miner: string expected";
        if (message.transactions != null && message.hasOwnProperty("transactions")) {
            if (!Array.isArray(message.transactions))
                return "transactions: array expected";
            for (var i = 0; i < message.transactions.length; ++i) {
                var error = $root.Transaction.verify(message.transactions[i]);
                if (error)
                    return "transactions." + error;
            }
        }
        if (message.merkleRootReceipt != null && message.hasOwnProperty("merkleRootReceipt"))
            if (!(message.merkleRootReceipt && typeof message.merkleRootReceipt.length === "number" || $util.isString(message.merkleRootReceipt)))
                return "merkleRootReceipt: buffer expected";
        if (message.shard != null && message.hasOwnProperty("shard"))
            if (!$util.isInteger(message.shard))
                return "shard: integer expected";
        return null;
    };

    /**
     * Creates a Block message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Block
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Block} Block
     */
    Block.fromObject = function fromObject(object) {
        if (object instanceof $root.Block)
            return object;
        var message = new $root.Block();
        if (object.index != null)
            if ($util.Long)
                (message.index = $util.Long.fromValue(object.index)).unsigned = true;
            else if (typeof object.index === "string")
                message.index = parseInt(object.index, 10);
            else if (typeof object.index === "number")
                message.index = object.index;
            else if (typeof object.index === "object")
                message.index = new $util.LongBits(object.index.low >>> 0, object.index.high >>> 0).toNumber(true);
        if (object.timestamp != null)
            if ($util.Long)
                (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = true;
            else if (typeof object.timestamp === "string")
                message.timestamp = parseInt(object.timestamp, 10);
            else if (typeof object.timestamp === "number")
                message.timestamp = object.timestamp;
            else if (typeof object.timestamp === "object")
                message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber(true);
        if (object.prevHash != null)
            if (typeof object.prevHash === "string")
                $util.base64.decode(object.prevHash, message.prevHash = $util.newBuffer($util.base64.length(object.prevHash)), 0);
            else if (object.prevHash.length)
                message.prevHash = object.prevHash;
        if (object.miner != null)
            message.miner = String(object.miner);
        if (object.transactions) {
            if (!Array.isArray(object.transactions))
                throw TypeError(".Block.transactions: array expected");
            message.transactions = [];
            for (var i = 0; i < object.transactions.length; ++i) {
                if (typeof object.transactions[i] !== "object")
                    throw TypeError(".Block.transactions: object expected");
                message.transactions[i] = $root.Transaction.fromObject(object.transactions[i]);
            }
        }
        if (object.merkleRootReceipt != null)
            if (typeof object.merkleRootReceipt === "string")
                $util.base64.decode(object.merkleRootReceipt, message.merkleRootReceipt = $util.newBuffer($util.base64.length(object.merkleRootReceipt)), 0);
            else if (object.merkleRootReceipt.length)
                message.merkleRootReceipt = object.merkleRootReceipt;
        if (object.shard != null)
            message.shard = object.shard >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a Block message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Block
     * @static
     * @param {Block} message Block
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Block.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.transactions = [];
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.index = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.index = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.timestamp = options.longs === String ? "0" : 0;
            if (options.bytes === String)
                object.prevHash = "";
            else {
                object.prevHash = [];
                if (options.bytes !== Array)
                    object.prevHash = $util.newBuffer(object.prevHash);
            }
            object.miner = "";
            if (options.bytes === String)
                object.merkleRootReceipt = "";
            else {
                object.merkleRootReceipt = [];
                if (options.bytes !== Array)
                    object.merkleRootReceipt = $util.newBuffer(object.merkleRootReceipt);
            }
            object.shard = 0;
        }
        if (message.index != null && message.hasOwnProperty("index"))
            if (typeof message.index === "number")
                object.index = options.longs === String ? String(message.index) : message.index;
            else
                object.index = options.longs === String ? $util.Long.prototype.toString.call(message.index) : options.longs === Number ? new $util.LongBits(message.index.low >>> 0, message.index.high >>> 0).toNumber(true) : message.index;
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (typeof message.timestamp === "number")
                object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
            else
                object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber(true) : message.timestamp;
        if (message.prevHash != null && message.hasOwnProperty("prevHash"))
            object.prevHash = options.bytes === String ? $util.base64.encode(message.prevHash, 0, message.prevHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.prevHash) : message.prevHash;
        if (message.miner != null && message.hasOwnProperty("miner"))
            object.miner = message.miner;
        if (message.transactions && message.transactions.length) {
            object.transactions = [];
            for (var j = 0; j < message.transactions.length; ++j)
                object.transactions[j] = $root.Transaction.toObject(message.transactions[j], options);
        }
        if (message.merkleRootReceipt != null && message.hasOwnProperty("merkleRootReceipt"))
            object.merkleRootReceipt = options.bytes === String ? $util.base64.encode(message.merkleRootReceipt, 0, message.merkleRootReceipt.length) : options.bytes === Array ? Array.prototype.slice.call(message.merkleRootReceipt) : message.merkleRootReceipt;
        if (message.shard != null && message.hasOwnProperty("shard"))
            object.shard = message.shard;
        return object;
    };

    /**
     * Converts this Block to JSON.
     * @function toJSON
     * @memberof Block
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Block.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Block;
})();

$root.MerkleRootsSigned = (function() {

    /**
     * Properties of a MerkleRootsSigned.
     * @exports IMerkleRootsSigned
     * @interface IMerkleRootsSigned
     * @property {number|null} [shard] MerkleRootsSigned shard
     * @property {Array.<Uint8Array>|null} [merkleRootsReceipt] MerkleRootsSigned merkleRootsReceipt
     * @property {Uint8Array|null} [rSignedMerkleRootsReceipt] MerkleRootsSigned rSignedMerkleRootsReceipt
     * @property {Uint8Array|null} [sSignedMerkleRootsReceipt] MerkleRootsSigned sSignedMerkleRootsReceipt
     * @property {Array.<Uint8Array>|null} [rValidators] MerkleRootsSigned rValidators
     * @property {Array.<Uint8Array>|null} [pValidators] MerkleRootsSigned pValidators
     */

    /**
     * Constructs a new MerkleRootsSigned.
     * @exports MerkleRootsSigned
     * @classdesc Represents a MerkleRootsSigned.
     * @implements IMerkleRootsSigned
     * @constructor
     * @param {IMerkleRootsSigned=} [properties] Properties to set
     */
    function MerkleRootsSigned(properties) {
        this.merkleRootsReceipt = [];
        this.rValidators = [];
        this.pValidators = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MerkleRootsSigned shard.
     * @member {number} shard
     * @memberof MerkleRootsSigned
     * @instance
     */
    MerkleRootsSigned.prototype.shard = 0;

    /**
     * MerkleRootsSigned merkleRootsReceipt.
     * @member {Array.<Uint8Array>} merkleRootsReceipt
     * @memberof MerkleRootsSigned
     * @instance
     */
    MerkleRootsSigned.prototype.merkleRootsReceipt = $util.emptyArray;

    /**
     * MerkleRootsSigned rSignedMerkleRootsReceipt.
     * @member {Uint8Array} rSignedMerkleRootsReceipt
     * @memberof MerkleRootsSigned
     * @instance
     */
    MerkleRootsSigned.prototype.rSignedMerkleRootsReceipt = $util.newBuffer([]);

    /**
     * MerkleRootsSigned sSignedMerkleRootsReceipt.
     * @member {Uint8Array} sSignedMerkleRootsReceipt
     * @memberof MerkleRootsSigned
     * @instance
     */
    MerkleRootsSigned.prototype.sSignedMerkleRootsReceipt = $util.newBuffer([]);

    /**
     * MerkleRootsSigned rValidators.
     * @member {Array.<Uint8Array>} rValidators
     * @memberof MerkleRootsSigned
     * @instance
     */
    MerkleRootsSigned.prototype.rValidators = $util.emptyArray;

    /**
     * MerkleRootsSigned pValidators.
     * @member {Array.<Uint8Array>} pValidators
     * @memberof MerkleRootsSigned
     * @instance
     */
    MerkleRootsSigned.prototype.pValidators = $util.emptyArray;

    /**
     * Creates a new MerkleRootsSigned instance using the specified properties.
     * @function create
     * @memberof MerkleRootsSigned
     * @static
     * @param {IMerkleRootsSigned=} [properties] Properties to set
     * @returns {MerkleRootsSigned} MerkleRootsSigned instance
     */
    MerkleRootsSigned.create = function create(properties) {
        return new MerkleRootsSigned(properties);
    };

    /**
     * Encodes the specified MerkleRootsSigned message. Does not implicitly {@link MerkleRootsSigned.verify|verify} messages.
     * @function encode
     * @memberof MerkleRootsSigned
     * @static
     * @param {IMerkleRootsSigned} message MerkleRootsSigned message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MerkleRootsSigned.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.shard != null && message.hasOwnProperty("shard"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.shard);
        if (message.merkleRootsReceipt != null && message.merkleRootsReceipt.length)
            for (var i = 0; i < message.merkleRootsReceipt.length; ++i)
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.merkleRootsReceipt[i]);
        if (message.rSignedMerkleRootsReceipt != null && message.hasOwnProperty("rSignedMerkleRootsReceipt"))
            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.rSignedMerkleRootsReceipt);
        if (message.sSignedMerkleRootsReceipt != null && message.hasOwnProperty("sSignedMerkleRootsReceipt"))
            writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.sSignedMerkleRootsReceipt);
        if (message.rValidators != null && message.rValidators.length)
            for (var i = 0; i < message.rValidators.length; ++i)
                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.rValidators[i]);
        if (message.pValidators != null && message.pValidators.length)
            for (var i = 0; i < message.pValidators.length; ++i)
                writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.pValidators[i]);
        return writer;
    };

    /**
     * Encodes the specified MerkleRootsSigned message, length delimited. Does not implicitly {@link MerkleRootsSigned.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MerkleRootsSigned
     * @static
     * @param {IMerkleRootsSigned} message MerkleRootsSigned message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MerkleRootsSigned.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MerkleRootsSigned message from the specified reader or buffer.
     * @function decode
     * @memberof MerkleRootsSigned
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MerkleRootsSigned} MerkleRootsSigned
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MerkleRootsSigned.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MerkleRootsSigned();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.shard = reader.uint32();
                break;
            case 2:
                if (!(message.merkleRootsReceipt && message.merkleRootsReceipt.length))
                    message.merkleRootsReceipt = [];
                message.merkleRootsReceipt.push(reader.bytes());
                break;
            case 3:
                message.rSignedMerkleRootsReceipt = reader.bytes();
                break;
            case 4:
                message.sSignedMerkleRootsReceipt = reader.bytes();
                break;
            case 5:
                if (!(message.rValidators && message.rValidators.length))
                    message.rValidators = [];
                message.rValidators.push(reader.bytes());
                break;
            case 6:
                if (!(message.pValidators && message.pValidators.length))
                    message.pValidators = [];
                message.pValidators.push(reader.bytes());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a MerkleRootsSigned message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MerkleRootsSigned
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MerkleRootsSigned} MerkleRootsSigned
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MerkleRootsSigned.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MerkleRootsSigned message.
     * @function verify
     * @memberof MerkleRootsSigned
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MerkleRootsSigned.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.shard != null && message.hasOwnProperty("shard"))
            if (!$util.isInteger(message.shard))
                return "shard: integer expected";
        if (message.merkleRootsReceipt != null && message.hasOwnProperty("merkleRootsReceipt")) {
            if (!Array.isArray(message.merkleRootsReceipt))
                return "merkleRootsReceipt: array expected";
            for (var i = 0; i < message.merkleRootsReceipt.length; ++i)
                if (!(message.merkleRootsReceipt[i] && typeof message.merkleRootsReceipt[i].length === "number" || $util.isString(message.merkleRootsReceipt[i])))
                    return "merkleRootsReceipt: buffer[] expected";
        }
        if (message.rSignedMerkleRootsReceipt != null && message.hasOwnProperty("rSignedMerkleRootsReceipt"))
            if (!(message.rSignedMerkleRootsReceipt && typeof message.rSignedMerkleRootsReceipt.length === "number" || $util.isString(message.rSignedMerkleRootsReceipt)))
                return "rSignedMerkleRootsReceipt: buffer expected";
        if (message.sSignedMerkleRootsReceipt != null && message.hasOwnProperty("sSignedMerkleRootsReceipt"))
            if (!(message.sSignedMerkleRootsReceipt && typeof message.sSignedMerkleRootsReceipt.length === "number" || $util.isString(message.sSignedMerkleRootsReceipt)))
                return "sSignedMerkleRootsReceipt: buffer expected";
        if (message.rValidators != null && message.hasOwnProperty("rValidators")) {
            if (!Array.isArray(message.rValidators))
                return "rValidators: array expected";
            for (var i = 0; i < message.rValidators.length; ++i)
                if (!(message.rValidators[i] && typeof message.rValidators[i].length === "number" || $util.isString(message.rValidators[i])))
                    return "rValidators: buffer[] expected";
        }
        if (message.pValidators != null && message.hasOwnProperty("pValidators")) {
            if (!Array.isArray(message.pValidators))
                return "pValidators: array expected";
            for (var i = 0; i < message.pValidators.length; ++i)
                if (!(message.pValidators[i] && typeof message.pValidators[i].length === "number" || $util.isString(message.pValidators[i])))
                    return "pValidators: buffer[] expected";
        }
        return null;
    };

    /**
     * Creates a MerkleRootsSigned message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MerkleRootsSigned
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MerkleRootsSigned} MerkleRootsSigned
     */
    MerkleRootsSigned.fromObject = function fromObject(object) {
        if (object instanceof $root.MerkleRootsSigned)
            return object;
        var message = new $root.MerkleRootsSigned();
        if (object.shard != null)
            message.shard = object.shard >>> 0;
        if (object.merkleRootsReceipt) {
            if (!Array.isArray(object.merkleRootsReceipt))
                throw TypeError(".MerkleRootsSigned.merkleRootsReceipt: array expected");
            message.merkleRootsReceipt = [];
            for (var i = 0; i < object.merkleRootsReceipt.length; ++i)
                if (typeof object.merkleRootsReceipt[i] === "string")
                    $util.base64.decode(object.merkleRootsReceipt[i], message.merkleRootsReceipt[i] = $util.newBuffer($util.base64.length(object.merkleRootsReceipt[i])), 0);
                else if (object.merkleRootsReceipt[i].length)
                    message.merkleRootsReceipt[i] = object.merkleRootsReceipt[i];
        }
        if (object.rSignedMerkleRootsReceipt != null)
            if (typeof object.rSignedMerkleRootsReceipt === "string")
                $util.base64.decode(object.rSignedMerkleRootsReceipt, message.rSignedMerkleRootsReceipt = $util.newBuffer($util.base64.length(object.rSignedMerkleRootsReceipt)), 0);
            else if (object.rSignedMerkleRootsReceipt.length)
                message.rSignedMerkleRootsReceipt = object.rSignedMerkleRootsReceipt;
        if (object.sSignedMerkleRootsReceipt != null)
            if (typeof object.sSignedMerkleRootsReceipt === "string")
                $util.base64.decode(object.sSignedMerkleRootsReceipt, message.sSignedMerkleRootsReceipt = $util.newBuffer($util.base64.length(object.sSignedMerkleRootsReceipt)), 0);
            else if (object.sSignedMerkleRootsReceipt.length)
                message.sSignedMerkleRootsReceipt = object.sSignedMerkleRootsReceipt;
        if (object.rValidators) {
            if (!Array.isArray(object.rValidators))
                throw TypeError(".MerkleRootsSigned.rValidators: array expected");
            message.rValidators = [];
            for (var i = 0; i < object.rValidators.length; ++i)
                if (typeof object.rValidators[i] === "string")
                    $util.base64.decode(object.rValidators[i], message.rValidators[i] = $util.newBuffer($util.base64.length(object.rValidators[i])), 0);
                else if (object.rValidators[i].length)
                    message.rValidators[i] = object.rValidators[i];
        }
        if (object.pValidators) {
            if (!Array.isArray(object.pValidators))
                throw TypeError(".MerkleRootsSigned.pValidators: array expected");
            message.pValidators = [];
            for (var i = 0; i < object.pValidators.length; ++i)
                if (typeof object.pValidators[i] === "string")
                    $util.base64.decode(object.pValidators[i], message.pValidators[i] = $util.newBuffer($util.base64.length(object.pValidators[i])), 0);
                else if (object.pValidators[i].length)
                    message.pValidators[i] = object.pValidators[i];
        }
        return message;
    };

    /**
     * Creates a plain object from a MerkleRootsSigned message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MerkleRootsSigned
     * @static
     * @param {MerkleRootsSigned} message MerkleRootsSigned
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MerkleRootsSigned.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.merkleRootsReceipt = [];
            object.rValidators = [];
            object.pValidators = [];
        }
        if (options.defaults) {
            object.shard = 0;
            if (options.bytes === String)
                object.rSignedMerkleRootsReceipt = "";
            else {
                object.rSignedMerkleRootsReceipt = [];
                if (options.bytes !== Array)
                    object.rSignedMerkleRootsReceipt = $util.newBuffer(object.rSignedMerkleRootsReceipt);
            }
            if (options.bytes === String)
                object.sSignedMerkleRootsReceipt = "";
            else {
                object.sSignedMerkleRootsReceipt = [];
                if (options.bytes !== Array)
                    object.sSignedMerkleRootsReceipt = $util.newBuffer(object.sSignedMerkleRootsReceipt);
            }
        }
        if (message.shard != null && message.hasOwnProperty("shard"))
            object.shard = message.shard;
        if (message.merkleRootsReceipt && message.merkleRootsReceipt.length) {
            object.merkleRootsReceipt = [];
            for (var j = 0; j < message.merkleRootsReceipt.length; ++j)
                object.merkleRootsReceipt[j] = options.bytes === String ? $util.base64.encode(message.merkleRootsReceipt[j], 0, message.merkleRootsReceipt[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.merkleRootsReceipt[j]) : message.merkleRootsReceipt[j];
        }
        if (message.rSignedMerkleRootsReceipt != null && message.hasOwnProperty("rSignedMerkleRootsReceipt"))
            object.rSignedMerkleRootsReceipt = options.bytes === String ? $util.base64.encode(message.rSignedMerkleRootsReceipt, 0, message.rSignedMerkleRootsReceipt.length) : options.bytes === Array ? Array.prototype.slice.call(message.rSignedMerkleRootsReceipt) : message.rSignedMerkleRootsReceipt;
        if (message.sSignedMerkleRootsReceipt != null && message.hasOwnProperty("sSignedMerkleRootsReceipt"))
            object.sSignedMerkleRootsReceipt = options.bytes === String ? $util.base64.encode(message.sSignedMerkleRootsReceipt, 0, message.sSignedMerkleRootsReceipt.length) : options.bytes === Array ? Array.prototype.slice.call(message.sSignedMerkleRootsReceipt) : message.sSignedMerkleRootsReceipt;
        if (message.rValidators && message.rValidators.length) {
            object.rValidators = [];
            for (var j = 0; j < message.rValidators.length; ++j)
                object.rValidators[j] = options.bytes === String ? $util.base64.encode(message.rValidators[j], 0, message.rValidators[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.rValidators[j]) : message.rValidators[j];
        }
        if (message.pValidators && message.pValidators.length) {
            object.pValidators = [];
            for (var j = 0; j < message.pValidators.length; ++j)
                object.pValidators[j] = options.bytes === String ? $util.base64.encode(message.pValidators[j], 0, message.pValidators[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.pValidators[j]) : message.pValidators[j];
        }
        return object;
    };

    /**
     * Converts this MerkleRootsSigned to JSON.
     * @function toJSON
     * @memberof MerkleRootsSigned
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MerkleRootsSigned.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return MerkleRootsSigned;
})();

$root.signSchnorr = (function() {

    /**
     * Properties of a signSchnorr.
     * @exports IsignSchnorr
     * @interface IsignSchnorr
     * @property {string|null} [wallet] signSchnorr wallet
     * @property {Uint8Array|null} [rSchnorr] signSchnorr rSchnorr
     * @property {Uint8Array|null} [pSchnorr] signSchnorr pSchnorr
     * @property {Uint8Array|null} [signReceipt] signSchnorr signReceipt
     * @property {Uint8Array|null} [messageSignReceipt] signSchnorr messageSignReceipt
     */

    /**
     * Constructs a new signSchnorr.
     * @exports signSchnorr
     * @classdesc Represents a signSchnorr.
     * @implements IsignSchnorr
     * @constructor
     * @param {IsignSchnorr=} [properties] Properties to set
     */
    function signSchnorr(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * signSchnorr wallet.
     * @member {string} wallet
     * @memberof signSchnorr
     * @instance
     */
    signSchnorr.prototype.wallet = "";

    /**
     * signSchnorr rSchnorr.
     * @member {Uint8Array} rSchnorr
     * @memberof signSchnorr
     * @instance
     */
    signSchnorr.prototype.rSchnorr = $util.newBuffer([]);

    /**
     * signSchnorr pSchnorr.
     * @member {Uint8Array} pSchnorr
     * @memberof signSchnorr
     * @instance
     */
    signSchnorr.prototype.pSchnorr = $util.newBuffer([]);

    /**
     * signSchnorr signReceipt.
     * @member {Uint8Array} signReceipt
     * @memberof signSchnorr
     * @instance
     */
    signSchnorr.prototype.signReceipt = $util.newBuffer([]);

    /**
     * signSchnorr messageSignReceipt.
     * @member {Uint8Array} messageSignReceipt
     * @memberof signSchnorr
     * @instance
     */
    signSchnorr.prototype.messageSignReceipt = $util.newBuffer([]);

    /**
     * Creates a new signSchnorr instance using the specified properties.
     * @function create
     * @memberof signSchnorr
     * @static
     * @param {IsignSchnorr=} [properties] Properties to set
     * @returns {signSchnorr} signSchnorr instance
     */
    signSchnorr.create = function create(properties) {
        return new signSchnorr(properties);
    };

    /**
     * Encodes the specified signSchnorr message. Does not implicitly {@link signSchnorr.verify|verify} messages.
     * @function encode
     * @memberof signSchnorr
     * @static
     * @param {IsignSchnorr} message signSchnorr message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    signSchnorr.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.wallet != null && message.hasOwnProperty("wallet"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.wallet);
        if (message.rSchnorr != null && message.hasOwnProperty("rSchnorr"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.rSchnorr);
        if (message.pSchnorr != null && message.hasOwnProperty("pSchnorr"))
            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.pSchnorr);
        if (message.signReceipt != null && message.hasOwnProperty("signReceipt"))
            writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.signReceipt);
        if (message.messageSignReceipt != null && message.hasOwnProperty("messageSignReceipt"))
            writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.messageSignReceipt);
        return writer;
    };

    /**
     * Encodes the specified signSchnorr message, length delimited. Does not implicitly {@link signSchnorr.verify|verify} messages.
     * @function encodeDelimited
     * @memberof signSchnorr
     * @static
     * @param {IsignSchnorr} message signSchnorr message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    signSchnorr.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a signSchnorr message from the specified reader or buffer.
     * @function decode
     * @memberof signSchnorr
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {signSchnorr} signSchnorr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    signSchnorr.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.signSchnorr();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.wallet = reader.string();
                break;
            case 2:
                message.rSchnorr = reader.bytes();
                break;
            case 3:
                message.pSchnorr = reader.bytes();
                break;
            case 4:
                message.signReceipt = reader.bytes();
                break;
            case 5:
                message.messageSignReceipt = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a signSchnorr message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof signSchnorr
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {signSchnorr} signSchnorr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    signSchnorr.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a signSchnorr message.
     * @function verify
     * @memberof signSchnorr
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    signSchnorr.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.wallet != null && message.hasOwnProperty("wallet"))
            if (!$util.isString(message.wallet))
                return "wallet: string expected";
        if (message.rSchnorr != null && message.hasOwnProperty("rSchnorr"))
            if (!(message.rSchnorr && typeof message.rSchnorr.length === "number" || $util.isString(message.rSchnorr)))
                return "rSchnorr: buffer expected";
        if (message.pSchnorr != null && message.hasOwnProperty("pSchnorr"))
            if (!(message.pSchnorr && typeof message.pSchnorr.length === "number" || $util.isString(message.pSchnorr)))
                return "pSchnorr: buffer expected";
        if (message.signReceipt != null && message.hasOwnProperty("signReceipt"))
            if (!(message.signReceipt && typeof message.signReceipt.length === "number" || $util.isString(message.signReceipt)))
                return "signReceipt: buffer expected";
        if (message.messageSignReceipt != null && message.hasOwnProperty("messageSignReceipt"))
            if (!(message.messageSignReceipt && typeof message.messageSignReceipt.length === "number" || $util.isString(message.messageSignReceipt)))
                return "messageSignReceipt: buffer expected";
        return null;
    };

    /**
     * Creates a signSchnorr message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof signSchnorr
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {signSchnorr} signSchnorr
     */
    signSchnorr.fromObject = function fromObject(object) {
        if (object instanceof $root.signSchnorr)
            return object;
        var message = new $root.signSchnorr();
        if (object.wallet != null)
            message.wallet = String(object.wallet);
        if (object.rSchnorr != null)
            if (typeof object.rSchnorr === "string")
                $util.base64.decode(object.rSchnorr, message.rSchnorr = $util.newBuffer($util.base64.length(object.rSchnorr)), 0);
            else if (object.rSchnorr.length)
                message.rSchnorr = object.rSchnorr;
        if (object.pSchnorr != null)
            if (typeof object.pSchnorr === "string")
                $util.base64.decode(object.pSchnorr, message.pSchnorr = $util.newBuffer($util.base64.length(object.pSchnorr)), 0);
            else if (object.pSchnorr.length)
                message.pSchnorr = object.pSchnorr;
        if (object.signReceipt != null)
            if (typeof object.signReceipt === "string")
                $util.base64.decode(object.signReceipt, message.signReceipt = $util.newBuffer($util.base64.length(object.signReceipt)), 0);
            else if (object.signReceipt.length)
                message.signReceipt = object.signReceipt;
        if (object.messageSignReceipt != null)
            if (typeof object.messageSignReceipt === "string")
                $util.base64.decode(object.messageSignReceipt, message.messageSignReceipt = $util.newBuffer($util.base64.length(object.messageSignReceipt)), 0);
            else if (object.messageSignReceipt.length)
                message.messageSignReceipt = object.messageSignReceipt;
        return message;
    };

    /**
     * Creates a plain object from a signSchnorr message. Also converts values to other types if specified.
     * @function toObject
     * @memberof signSchnorr
     * @static
     * @param {signSchnorr} message signSchnorr
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    signSchnorr.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.wallet = "";
            if (options.bytes === String)
                object.rSchnorr = "";
            else {
                object.rSchnorr = [];
                if (options.bytes !== Array)
                    object.rSchnorr = $util.newBuffer(object.rSchnorr);
            }
            if (options.bytes === String)
                object.pSchnorr = "";
            else {
                object.pSchnorr = [];
                if (options.bytes !== Array)
                    object.pSchnorr = $util.newBuffer(object.pSchnorr);
            }
            if (options.bytes === String)
                object.signReceipt = "";
            else {
                object.signReceipt = [];
                if (options.bytes !== Array)
                    object.signReceipt = $util.newBuffer(object.signReceipt);
            }
            if (options.bytes === String)
                object.messageSignReceipt = "";
            else {
                object.messageSignReceipt = [];
                if (options.bytes !== Array)
                    object.messageSignReceipt = $util.newBuffer(object.messageSignReceipt);
            }
        }
        if (message.wallet != null && message.hasOwnProperty("wallet"))
            object.wallet = message.wallet;
        if (message.rSchnorr != null && message.hasOwnProperty("rSchnorr"))
            object.rSchnorr = options.bytes === String ? $util.base64.encode(message.rSchnorr, 0, message.rSchnorr.length) : options.bytes === Array ? Array.prototype.slice.call(message.rSchnorr) : message.rSchnorr;
        if (message.pSchnorr != null && message.hasOwnProperty("pSchnorr"))
            object.pSchnorr = options.bytes === String ? $util.base64.encode(message.pSchnorr, 0, message.pSchnorr.length) : options.bytes === Array ? Array.prototype.slice.call(message.pSchnorr) : message.pSchnorr;
        if (message.signReceipt != null && message.hasOwnProperty("signReceipt"))
            object.signReceipt = options.bytes === String ? $util.base64.encode(message.signReceipt, 0, message.signReceipt.length) : options.bytes === Array ? Array.prototype.slice.call(message.signReceipt) : message.signReceipt;
        if (message.messageSignReceipt != null && message.hasOwnProperty("messageSignReceipt"))
            object.messageSignReceipt = options.bytes === String ? $util.base64.encode(message.messageSignReceipt, 0, message.messageSignReceipt.length) : options.bytes === Array ? Array.prototype.slice.call(message.messageSignReceipt) : message.messageSignReceipt;
        return object;
    };

    /**
     * Converts this signSchnorr to JSON.
     * @function toJSON
     * @memberof signSchnorr
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    signSchnorr.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return signSchnorr;
})();

$root.Schnorr = (function() {

    /**
     * Properties of a Schnorr.
     * @exports ISchnorr
     * @interface ISchnorr
     * @property {Uint8Array|null} [r] Schnorr r
     * @property {string|null} [p] Schnorr p
     */

    /**
     * Constructs a new Schnorr.
     * @exports Schnorr
     * @classdesc Represents a Schnorr.
     * @implements ISchnorr
     * @constructor
     * @param {ISchnorr=} [properties] Properties to set
     */
    function Schnorr(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Schnorr r.
     * @member {Uint8Array} r
     * @memberof Schnorr
     * @instance
     */
    Schnorr.prototype.r = $util.newBuffer([]);

    /**
     * Schnorr p.
     * @member {string} p
     * @memberof Schnorr
     * @instance
     */
    Schnorr.prototype.p = "";

    /**
     * Creates a new Schnorr instance using the specified properties.
     * @function create
     * @memberof Schnorr
     * @static
     * @param {ISchnorr=} [properties] Properties to set
     * @returns {Schnorr} Schnorr instance
     */
    Schnorr.create = function create(properties) {
        return new Schnorr(properties);
    };

    /**
     * Encodes the specified Schnorr message. Does not implicitly {@link Schnorr.verify|verify} messages.
     * @function encode
     * @memberof Schnorr
     * @static
     * @param {ISchnorr} message Schnorr message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Schnorr.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.r != null && message.hasOwnProperty("r"))
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.r);
        if (message.p != null && message.hasOwnProperty("p"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.p);
        return writer;
    };

    /**
     * Encodes the specified Schnorr message, length delimited. Does not implicitly {@link Schnorr.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Schnorr
     * @static
     * @param {ISchnorr} message Schnorr message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Schnorr.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Schnorr message from the specified reader or buffer.
     * @function decode
     * @memberof Schnorr
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Schnorr} Schnorr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Schnorr.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Schnorr();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.r = reader.bytes();
                break;
            case 2:
                message.p = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Schnorr message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Schnorr
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Schnorr} Schnorr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Schnorr.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Schnorr message.
     * @function verify
     * @memberof Schnorr
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Schnorr.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.r != null && message.hasOwnProperty("r"))
            if (!(message.r && typeof message.r.length === "number" || $util.isString(message.r)))
                return "r: buffer expected";
        if (message.p != null && message.hasOwnProperty("p"))
            if (!$util.isString(message.p))
                return "p: string expected";
        return null;
    };

    /**
     * Creates a Schnorr message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Schnorr
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Schnorr} Schnorr
     */
    Schnorr.fromObject = function fromObject(object) {
        if (object instanceof $root.Schnorr)
            return object;
        var message = new $root.Schnorr();
        if (object.r != null)
            if (typeof object.r === "string")
                $util.base64.decode(object.r, message.r = $util.newBuffer($util.base64.length(object.r)), 0);
            else if (object.r.length)
                message.r = object.r;
        if (object.p != null)
            message.p = String(object.p);
        return message;
    };

    /**
     * Creates a plain object from a Schnorr message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Schnorr
     * @static
     * @param {Schnorr} message Schnorr
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Schnorr.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if (options.bytes === String)
                object.r = "";
            else {
                object.r = [];
                if (options.bytes !== Array)
                    object.r = $util.newBuffer(object.r);
            }
            object.p = "";
        }
        if (message.r != null && message.hasOwnProperty("r"))
            object.r = options.bytes === String ? $util.base64.encode(message.r, 0, message.r.length) : options.bytes === Array ? Array.prototype.slice.call(message.r) : message.r;
        if (message.p != null && message.hasOwnProperty("p"))
            object.p = message.p;
        return object;
    };

    /**
     * Converts this Schnorr to JSON.
     * @function toJSON
     * @memberof Schnorr
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Schnorr.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Schnorr;
})();

$root.Bls = (function() {

    /**
     * Properties of a Bls.
     * @exports IBls
     * @interface IBls
     * @property {IBlock|null} [block] Bls block
     * @property {Uint8Array|null} [signature] Bls signature
     * @property {Uint8Array|null} [pubKey] Bls pubKey
     */

    /**
     * Constructs a new Bls.
     * @exports Bls
     * @classdesc Represents a Bls.
     * @implements IBls
     * @constructor
     * @param {IBls=} [properties] Properties to set
     */
    function Bls(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Bls block.
     * @member {IBlock|null|undefined} block
     * @memberof Bls
     * @instance
     */
    Bls.prototype.block = null;

    /**
     * Bls signature.
     * @member {Uint8Array} signature
     * @memberof Bls
     * @instance
     */
    Bls.prototype.signature = $util.newBuffer([]);

    /**
     * Bls pubKey.
     * @member {Uint8Array} pubKey
     * @memberof Bls
     * @instance
     */
    Bls.prototype.pubKey = $util.newBuffer([]);

    /**
     * Creates a new Bls instance using the specified properties.
     * @function create
     * @memberof Bls
     * @static
     * @param {IBls=} [properties] Properties to set
     * @returns {Bls} Bls instance
     */
    Bls.create = function create(properties) {
        return new Bls(properties);
    };

    /**
     * Encodes the specified Bls message. Does not implicitly {@link Bls.verify|verify} messages.
     * @function encode
     * @memberof Bls
     * @static
     * @param {IBls} message Bls message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Bls.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.block != null && message.hasOwnProperty("block"))
            $root.Block.encode(message.block, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.signature != null && message.hasOwnProperty("signature"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.signature);
        if (message.pubKey != null && message.hasOwnProperty("pubKey"))
            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.pubKey);
        return writer;
    };

    /**
     * Encodes the specified Bls message, length delimited. Does not implicitly {@link Bls.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Bls
     * @static
     * @param {IBls} message Bls message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Bls.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Bls message from the specified reader or buffer.
     * @function decode
     * @memberof Bls
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Bls} Bls
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Bls.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Bls();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.block = $root.Block.decode(reader, reader.uint32());
                break;
            case 2:
                message.signature = reader.bytes();
                break;
            case 3:
                message.pubKey = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Bls message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Bls
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Bls} Bls
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Bls.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Bls message.
     * @function verify
     * @memberof Bls
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Bls.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.block != null && message.hasOwnProperty("block")) {
            var error = $root.Block.verify(message.block);
            if (error)
                return "block." + error;
        }
        if (message.signature != null && message.hasOwnProperty("signature"))
            if (!(message.signature && typeof message.signature.length === "number" || $util.isString(message.signature)))
                return "signature: buffer expected";
        if (message.pubKey != null && message.hasOwnProperty("pubKey"))
            if (!(message.pubKey && typeof message.pubKey.length === "number" || $util.isString(message.pubKey)))
                return "pubKey: buffer expected";
        return null;
    };

    /**
     * Creates a Bls message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Bls
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Bls} Bls
     */
    Bls.fromObject = function fromObject(object) {
        if (object instanceof $root.Bls)
            return object;
        var message = new $root.Bls();
        if (object.block != null) {
            if (typeof object.block !== "object")
                throw TypeError(".Bls.block: object expected");
            message.block = $root.Block.fromObject(object.block);
        }
        if (object.signature != null)
            if (typeof object.signature === "string")
                $util.base64.decode(object.signature, message.signature = $util.newBuffer($util.base64.length(object.signature)), 0);
            else if (object.signature.length)
                message.signature = object.signature;
        if (object.pubKey != null)
            if (typeof object.pubKey === "string")
                $util.base64.decode(object.pubKey, message.pubKey = $util.newBuffer($util.base64.length(object.pubKey)), 0);
            else if (object.pubKey.length)
                message.pubKey = object.pubKey;
        return message;
    };

    /**
     * Creates a plain object from a Bls message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Bls
     * @static
     * @param {Bls} message Bls
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Bls.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.block = null;
            if (options.bytes === String)
                object.signature = "";
            else {
                object.signature = [];
                if (options.bytes !== Array)
                    object.signature = $util.newBuffer(object.signature);
            }
            if (options.bytes === String)
                object.pubKey = "";
            else {
                object.pubKey = [];
                if (options.bytes !== Array)
                    object.pubKey = $util.newBuffer(object.pubKey);
            }
        }
        if (message.block != null && message.hasOwnProperty("block"))
            object.block = $root.Block.toObject(message.block, options);
        if (message.signature != null && message.hasOwnProperty("signature"))
            object.signature = options.bytes === String ? $util.base64.encode(message.signature, 0, message.signature.length) : options.bytes === Array ? Array.prototype.slice.call(message.signature) : message.signature;
        if (message.pubKey != null && message.hasOwnProperty("pubKey"))
            object.pubKey = options.bytes === String ? $util.base64.encode(message.pubKey, 0, message.pubKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.pubKey) : message.pubKey;
        return object;
    };

    /**
     * Converts this Bls to JSON.
     * @function toJSON
     * @memberof Bls
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Bls.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Bls;
})();

$root.AccountState = (function() {

    /**
     * Properties of an AccountState.
     * @exports IAccountState
     * @interface IAccountState
     * @property {number|Long|null} [balance] AccountState balance
     */

    /**
     * Constructs a new AccountState.
     * @exports AccountState
     * @classdesc Represents an AccountState.
     * @implements IAccountState
     * @constructor
     * @param {IAccountState=} [properties] Properties to set
     */
    function AccountState(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AccountState balance.
     * @member {number|Long} balance
     * @memberof AccountState
     * @instance
     */
    AccountState.prototype.balance = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new AccountState instance using the specified properties.
     * @function create
     * @memberof AccountState
     * @static
     * @param {IAccountState=} [properties] Properties to set
     * @returns {AccountState} AccountState instance
     */
    AccountState.create = function create(properties) {
        return new AccountState(properties);
    };

    /**
     * Encodes the specified AccountState message. Does not implicitly {@link AccountState.verify|verify} messages.
     * @function encode
     * @memberof AccountState
     * @static
     * @param {IAccountState} message AccountState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AccountState.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.balance != null && message.hasOwnProperty("balance"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.balance);
        return writer;
    };

    /**
     * Encodes the specified AccountState message, length delimited. Does not implicitly {@link AccountState.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AccountState
     * @static
     * @param {IAccountState} message AccountState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AccountState.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AccountState message from the specified reader or buffer.
     * @function decode
     * @memberof AccountState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AccountState} AccountState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AccountState.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AccountState();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.balance = reader.uint64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AccountState message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AccountState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AccountState} AccountState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AccountState.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AccountState message.
     * @function verify
     * @memberof AccountState
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AccountState.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.balance != null && message.hasOwnProperty("balance"))
            if (!$util.isInteger(message.balance) && !(message.balance && $util.isInteger(message.balance.low) && $util.isInteger(message.balance.high)))
                return "balance: integer|Long expected";
        return null;
    };

    /**
     * Creates an AccountState message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AccountState
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AccountState} AccountState
     */
    AccountState.fromObject = function fromObject(object) {
        if (object instanceof $root.AccountState)
            return object;
        var message = new $root.AccountState();
        if (object.balance != null)
            if ($util.Long)
                (message.balance = $util.Long.fromValue(object.balance)).unsigned = true;
            else if (typeof object.balance === "string")
                message.balance = parseInt(object.balance, 10);
            else if (typeof object.balance === "number")
                message.balance = object.balance;
            else if (typeof object.balance === "object")
                message.balance = new $util.LongBits(object.balance.low >>> 0, object.balance.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from an AccountState message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AccountState
     * @static
     * @param {AccountState} message AccountState
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AccountState.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.balance = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.balance = options.longs === String ? "0" : 0;
        if (message.balance != null && message.hasOwnProperty("balance"))
            if (typeof message.balance === "number")
                object.balance = options.longs === String ? String(message.balance) : message.balance;
            else
                object.balance = options.longs === String ? $util.Long.prototype.toString.call(message.balance) : options.longs === Number ? new $util.LongBits(message.balance.low >>> 0, message.balance.high >>> 0).toNumber(true) : message.balance;
        return object;
    };

    /**
     * Converts this AccountState to JSON.
     * @function toJSON
     * @memberof AccountState
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AccountState.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return AccountState;
})();

$root.ContractState = (function() {

    /**
     * Properties of a ContractState.
     * @exports IContractState
     * @interface IContractState
     * @property {Uint8Array|null} [memory] ContractState memory
     * @property {Array.<number|Long>|null} [globals] ContractState globals
     * @property {boolean|null} [locked] ContractState locked
     * @property {Uint8Array|null} [allowedWallet] ContractState allowedWallet
     */

    /**
     * Constructs a new ContractState.
     * @exports ContractState
     * @classdesc Represents a ContractState.
     * @implements IContractState
     * @constructor
     * @param {IContractState=} [properties] Properties to set
     */
    function ContractState(properties) {
        this.globals = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ContractState memory.
     * @member {Uint8Array} memory
     * @memberof ContractState
     * @instance
     */
    ContractState.prototype.memory = $util.newBuffer([]);

    /**
     * ContractState globals.
     * @member {Array.<number|Long>} globals
     * @memberof ContractState
     * @instance
     */
    ContractState.prototype.globals = $util.emptyArray;

    /**
     * ContractState locked.
     * @member {boolean} locked
     * @memberof ContractState
     * @instance
     */
    ContractState.prototype.locked = false;

    /**
     * ContractState allowedWallet.
     * @member {Uint8Array} allowedWallet
     * @memberof ContractState
     * @instance
     */
    ContractState.prototype.allowedWallet = $util.newBuffer([]);

    /**
     * Creates a new ContractState instance using the specified properties.
     * @function create
     * @memberof ContractState
     * @static
     * @param {IContractState=} [properties] Properties to set
     * @returns {ContractState} ContractState instance
     */
    ContractState.create = function create(properties) {
        return new ContractState(properties);
    };

    /**
     * Encodes the specified ContractState message. Does not implicitly {@link ContractState.verify|verify} messages.
     * @function encode
     * @memberof ContractState
     * @static
     * @param {IContractState} message ContractState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ContractState.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.memory != null && message.hasOwnProperty("memory"))
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.memory);
        if (message.globals != null && message.globals.length) {
            writer.uint32(/* id 2, wireType 2 =*/18).fork();
            for (var i = 0; i < message.globals.length; ++i)
                writer.uint64(message.globals[i]);
            writer.ldelim();
        }
        if (message.locked != null && message.hasOwnProperty("locked"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.locked);
        if (message.allowedWallet != null && message.hasOwnProperty("allowedWallet"))
            writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.allowedWallet);
        return writer;
    };

    /**
     * Encodes the specified ContractState message, length delimited. Does not implicitly {@link ContractState.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ContractState
     * @static
     * @param {IContractState} message ContractState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ContractState.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ContractState message from the specified reader or buffer.
     * @function decode
     * @memberof ContractState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ContractState} ContractState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ContractState.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ContractState();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.memory = reader.bytes();
                break;
            case 2:
                if (!(message.globals && message.globals.length))
                    message.globals = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.globals.push(reader.uint64());
                } else
                    message.globals.push(reader.uint64());
                break;
            case 3:
                message.locked = reader.bool();
                break;
            case 4:
                message.allowedWallet = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ContractState message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ContractState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ContractState} ContractState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ContractState.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ContractState message.
     * @function verify
     * @memberof ContractState
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ContractState.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.memory != null && message.hasOwnProperty("memory"))
            if (!(message.memory && typeof message.memory.length === "number" || $util.isString(message.memory)))
                return "memory: buffer expected";
        if (message.globals != null && message.hasOwnProperty("globals")) {
            if (!Array.isArray(message.globals))
                return "globals: array expected";
            for (var i = 0; i < message.globals.length; ++i)
                if (!$util.isInteger(message.globals[i]) && !(message.globals[i] && $util.isInteger(message.globals[i].low) && $util.isInteger(message.globals[i].high)))
                    return "globals: integer|Long[] expected";
        }
        if (message.locked != null && message.hasOwnProperty("locked"))
            if (typeof message.locked !== "boolean")
                return "locked: boolean expected";
        if (message.allowedWallet != null && message.hasOwnProperty("allowedWallet"))
            if (!(message.allowedWallet && typeof message.allowedWallet.length === "number" || $util.isString(message.allowedWallet)))
                return "allowedWallet: buffer expected";
        return null;
    };

    /**
     * Creates a ContractState message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ContractState
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ContractState} ContractState
     */
    ContractState.fromObject = function fromObject(object) {
        if (object instanceof $root.ContractState)
            return object;
        var message = new $root.ContractState();
        if (object.memory != null)
            if (typeof object.memory === "string")
                $util.base64.decode(object.memory, message.memory = $util.newBuffer($util.base64.length(object.memory)), 0);
            else if (object.memory.length)
                message.memory = object.memory;
        if (object.globals) {
            if (!Array.isArray(object.globals))
                throw TypeError(".ContractState.globals: array expected");
            message.globals = [];
            for (var i = 0; i < object.globals.length; ++i)
                if ($util.Long)
                    (message.globals[i] = $util.Long.fromValue(object.globals[i])).unsigned = true;
                else if (typeof object.globals[i] === "string")
                    message.globals[i] = parseInt(object.globals[i], 10);
                else if (typeof object.globals[i] === "number")
                    message.globals[i] = object.globals[i];
                else if (typeof object.globals[i] === "object")
                    message.globals[i] = new $util.LongBits(object.globals[i].low >>> 0, object.globals[i].high >>> 0).toNumber(true);
        }
        if (object.locked != null)
            message.locked = Boolean(object.locked);
        if (object.allowedWallet != null)
            if (typeof object.allowedWallet === "string")
                $util.base64.decode(object.allowedWallet, message.allowedWallet = $util.newBuffer($util.base64.length(object.allowedWallet)), 0);
            else if (object.allowedWallet.length)
                message.allowedWallet = object.allowedWallet;
        return message;
    };

    /**
     * Creates a plain object from a ContractState message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ContractState
     * @static
     * @param {ContractState} message ContractState
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ContractState.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.globals = [];
        if (options.defaults) {
            if (options.bytes === String)
                object.memory = "";
            else {
                object.memory = [];
                if (options.bytes !== Array)
                    object.memory = $util.newBuffer(object.memory);
            }
            object.locked = false;
            if (options.bytes === String)
                object.allowedWallet = "";
            else {
                object.allowedWallet = [];
                if (options.bytes !== Array)
                    object.allowedWallet = $util.newBuffer(object.allowedWallet);
            }
        }
        if (message.memory != null && message.hasOwnProperty("memory"))
            object.memory = options.bytes === String ? $util.base64.encode(message.memory, 0, message.memory.length) : options.bytes === Array ? Array.prototype.slice.call(message.memory) : message.memory;
        if (message.globals && message.globals.length) {
            object.globals = [];
            for (var j = 0; j < message.globals.length; ++j)
                if (typeof message.globals[j] === "number")
                    object.globals[j] = options.longs === String ? String(message.globals[j]) : message.globals[j];
                else
                    object.globals[j] = options.longs === String ? $util.Long.prototype.toString.call(message.globals[j]) : options.longs === Number ? new $util.LongBits(message.globals[j].low >>> 0, message.globals[j].high >>> 0).toNumber(true) : message.globals[j];
        }
        if (message.locked != null && message.hasOwnProperty("locked"))
            object.locked = message.locked;
        if (message.allowedWallet != null && message.hasOwnProperty("allowedWallet"))
            object.allowedWallet = options.bytes === String ? $util.base64.encode(message.allowedWallet, 0, message.allowedWallet.length) : options.bytes === Array ? Array.prototype.slice.call(message.allowedWallet) : message.allowedWallet;
        return object;
    };

    /**
     * Converts this ContractState to JSON.
     * @function toJSON
     * @memberof ContractState
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ContractState.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ContractState;
})();

$root.CasperVote = (function() {

    /**
     * Properties of a CasperVote.
     * @exports ICasperVote
     * @interface ICasperVote
     * @property {Uint8Array|null} [source] CasperVote source
     * @property {Uint8Array|null} [target] CasperVote target
     * @property {number|Long|null} [sourceHeight] CasperVote sourceHeight
     * @property {number|Long|null} [targetHeight] CasperVote targetHeight
     * @property {Uint8Array|null} [r] CasperVote r
     * @property {Uint8Array|null} [s] CasperVote s
     * @property {string|null} [publicKey] CasperVote publicKey
     */

    /**
     * Constructs a new CasperVote.
     * @exports CasperVote
     * @classdesc Represents a CasperVote.
     * @implements ICasperVote
     * @constructor
     * @param {ICasperVote=} [properties] Properties to set
     */
    function CasperVote(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CasperVote source.
     * @member {Uint8Array} source
     * @memberof CasperVote
     * @instance
     */
    CasperVote.prototype.source = $util.newBuffer([]);

    /**
     * CasperVote target.
     * @member {Uint8Array} target
     * @memberof CasperVote
     * @instance
     */
    CasperVote.prototype.target = $util.newBuffer([]);

    /**
     * CasperVote sourceHeight.
     * @member {number|Long} sourceHeight
     * @memberof CasperVote
     * @instance
     */
    CasperVote.prototype.sourceHeight = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * CasperVote targetHeight.
     * @member {number|Long} targetHeight
     * @memberof CasperVote
     * @instance
     */
    CasperVote.prototype.targetHeight = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * CasperVote r.
     * @member {Uint8Array} r
     * @memberof CasperVote
     * @instance
     */
    CasperVote.prototype.r = $util.newBuffer([]);

    /**
     * CasperVote s.
     * @member {Uint8Array} s
     * @memberof CasperVote
     * @instance
     */
    CasperVote.prototype.s = $util.newBuffer([]);

    /**
     * CasperVote publicKey.
     * @member {string} publicKey
     * @memberof CasperVote
     * @instance
     */
    CasperVote.prototype.publicKey = "";

    /**
     * Creates a new CasperVote instance using the specified properties.
     * @function create
     * @memberof CasperVote
     * @static
     * @param {ICasperVote=} [properties] Properties to set
     * @returns {CasperVote} CasperVote instance
     */
    CasperVote.create = function create(properties) {
        return new CasperVote(properties);
    };

    /**
     * Encodes the specified CasperVote message. Does not implicitly {@link CasperVote.verify|verify} messages.
     * @function encode
     * @memberof CasperVote
     * @static
     * @param {ICasperVote} message CasperVote message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CasperVote.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.source != null && message.hasOwnProperty("source"))
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.source);
        if (message.target != null && message.hasOwnProperty("target"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.target);
        if (message.sourceHeight != null && message.hasOwnProperty("sourceHeight"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.sourceHeight);
        if (message.targetHeight != null && message.hasOwnProperty("targetHeight"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.targetHeight);
        if (message.r != null && message.hasOwnProperty("r"))
            writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.r);
        if (message.s != null && message.hasOwnProperty("s"))
            writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.s);
        if (message.publicKey != null && message.hasOwnProperty("publicKey"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.publicKey);
        return writer;
    };

    /**
     * Encodes the specified CasperVote message, length delimited. Does not implicitly {@link CasperVote.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CasperVote
     * @static
     * @param {ICasperVote} message CasperVote message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CasperVote.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CasperVote message from the specified reader or buffer.
     * @function decode
     * @memberof CasperVote
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CasperVote} CasperVote
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CasperVote.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CasperVote();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.source = reader.bytes();
                break;
            case 2:
                message.target = reader.bytes();
                break;
            case 3:
                message.sourceHeight = reader.uint64();
                break;
            case 4:
                message.targetHeight = reader.uint64();
                break;
            case 5:
                message.r = reader.bytes();
                break;
            case 6:
                message.s = reader.bytes();
                break;
            case 7:
                message.publicKey = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CasperVote message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CasperVote
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CasperVote} CasperVote
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CasperVote.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CasperVote message.
     * @function verify
     * @memberof CasperVote
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CasperVote.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.source != null && message.hasOwnProperty("source"))
            if (!(message.source && typeof message.source.length === "number" || $util.isString(message.source)))
                return "source: buffer expected";
        if (message.target != null && message.hasOwnProperty("target"))
            if (!(message.target && typeof message.target.length === "number" || $util.isString(message.target)))
                return "target: buffer expected";
        if (message.sourceHeight != null && message.hasOwnProperty("sourceHeight"))
            if (!$util.isInteger(message.sourceHeight) && !(message.sourceHeight && $util.isInteger(message.sourceHeight.low) && $util.isInteger(message.sourceHeight.high)))
                return "sourceHeight: integer|Long expected";
        if (message.targetHeight != null && message.hasOwnProperty("targetHeight"))
            if (!$util.isInteger(message.targetHeight) && !(message.targetHeight && $util.isInteger(message.targetHeight.low) && $util.isInteger(message.targetHeight.high)))
                return "targetHeight: integer|Long expected";
        if (message.r != null && message.hasOwnProperty("r"))
            if (!(message.r && typeof message.r.length === "number" || $util.isString(message.r)))
                return "r: buffer expected";
        if (message.s != null && message.hasOwnProperty("s"))
            if (!(message.s && typeof message.s.length === "number" || $util.isString(message.s)))
                return "s: buffer expected";
        if (message.publicKey != null && message.hasOwnProperty("publicKey"))
            if (!$util.isString(message.publicKey))
                return "publicKey: string expected";
        return null;
    };

    /**
     * Creates a CasperVote message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CasperVote
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CasperVote} CasperVote
     */
    CasperVote.fromObject = function fromObject(object) {
        if (object instanceof $root.CasperVote)
            return object;
        var message = new $root.CasperVote();
        if (object.source != null)
            if (typeof object.source === "string")
                $util.base64.decode(object.source, message.source = $util.newBuffer($util.base64.length(object.source)), 0);
            else if (object.source.length)
                message.source = object.source;
        if (object.target != null)
            if (typeof object.target === "string")
                $util.base64.decode(object.target, message.target = $util.newBuffer($util.base64.length(object.target)), 0);
            else if (object.target.length)
                message.target = object.target;
        if (object.sourceHeight != null)
            if ($util.Long)
                (message.sourceHeight = $util.Long.fromValue(object.sourceHeight)).unsigned = true;
            else if (typeof object.sourceHeight === "string")
                message.sourceHeight = parseInt(object.sourceHeight, 10);
            else if (typeof object.sourceHeight === "number")
                message.sourceHeight = object.sourceHeight;
            else if (typeof object.sourceHeight === "object")
                message.sourceHeight = new $util.LongBits(object.sourceHeight.low >>> 0, object.sourceHeight.high >>> 0).toNumber(true);
        if (object.targetHeight != null)
            if ($util.Long)
                (message.targetHeight = $util.Long.fromValue(object.targetHeight)).unsigned = true;
            else if (typeof object.targetHeight === "string")
                message.targetHeight = parseInt(object.targetHeight, 10);
            else if (typeof object.targetHeight === "number")
                message.targetHeight = object.targetHeight;
            else if (typeof object.targetHeight === "object")
                message.targetHeight = new $util.LongBits(object.targetHeight.low >>> 0, object.targetHeight.high >>> 0).toNumber(true);
        if (object.r != null)
            if (typeof object.r === "string")
                $util.base64.decode(object.r, message.r = $util.newBuffer($util.base64.length(object.r)), 0);
            else if (object.r.length)
                message.r = object.r;
        if (object.s != null)
            if (typeof object.s === "string")
                $util.base64.decode(object.s, message.s = $util.newBuffer($util.base64.length(object.s)), 0);
            else if (object.s.length)
                message.s = object.s;
        if (object.publicKey != null)
            message.publicKey = String(object.publicKey);
        return message;
    };

    /**
     * Creates a plain object from a CasperVote message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CasperVote
     * @static
     * @param {CasperVote} message CasperVote
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CasperVote.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if (options.bytes === String)
                object.source = "";
            else {
                object.source = [];
                if (options.bytes !== Array)
                    object.source = $util.newBuffer(object.source);
            }
            if (options.bytes === String)
                object.target = "";
            else {
                object.target = [];
                if (options.bytes !== Array)
                    object.target = $util.newBuffer(object.target);
            }
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.sourceHeight = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.sourceHeight = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.targetHeight = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.targetHeight = options.longs === String ? "0" : 0;
            if (options.bytes === String)
                object.r = "";
            else {
                object.r = [];
                if (options.bytes !== Array)
                    object.r = $util.newBuffer(object.r);
            }
            if (options.bytes === String)
                object.s = "";
            else {
                object.s = [];
                if (options.bytes !== Array)
                    object.s = $util.newBuffer(object.s);
            }
            object.publicKey = "";
        }
        if (message.source != null && message.hasOwnProperty("source"))
            object.source = options.bytes === String ? $util.base64.encode(message.source, 0, message.source.length) : options.bytes === Array ? Array.prototype.slice.call(message.source) : message.source;
        if (message.target != null && message.hasOwnProperty("target"))
            object.target = options.bytes === String ? $util.base64.encode(message.target, 0, message.target.length) : options.bytes === Array ? Array.prototype.slice.call(message.target) : message.target;
        if (message.sourceHeight != null && message.hasOwnProperty("sourceHeight"))
            if (typeof message.sourceHeight === "number")
                object.sourceHeight = options.longs === String ? String(message.sourceHeight) : message.sourceHeight;
            else
                object.sourceHeight = options.longs === String ? $util.Long.prototype.toString.call(message.sourceHeight) : options.longs === Number ? new $util.LongBits(message.sourceHeight.low >>> 0, message.sourceHeight.high >>> 0).toNumber(true) : message.sourceHeight;
        if (message.targetHeight != null && message.hasOwnProperty("targetHeight"))
            if (typeof message.targetHeight === "number")
                object.targetHeight = options.longs === String ? String(message.targetHeight) : message.targetHeight;
            else
                object.targetHeight = options.longs === String ? $util.Long.prototype.toString.call(message.targetHeight) : options.longs === Number ? new $util.LongBits(message.targetHeight.low >>> 0, message.targetHeight.high >>> 0).toNumber(true) : message.targetHeight;
        if (message.r != null && message.hasOwnProperty("r"))
            object.r = options.bytes === String ? $util.base64.encode(message.r, 0, message.r.length) : options.bytes === Array ? Array.prototype.slice.call(message.r) : message.r;
        if (message.s != null && message.hasOwnProperty("s"))
            object.s = options.bytes === String ? $util.base64.encode(message.s, 0, message.s.length) : options.bytes === Array ? Array.prototype.slice.call(message.s) : message.s;
        if (message.publicKey != null && message.hasOwnProperty("publicKey"))
            object.publicKey = message.publicKey;
        return object;
    };

    /**
     * Converts this CasperVote to JSON.
     * @function toJSON
     * @memberof CasperVote
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CasperVote.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CasperVote;
})();

$root.ValidatorWithdraw = (function() {

    /**
     * Properties of a ValidatorWithdraw.
     * @exports IValidatorWithdraw
     * @interface IValidatorWithdraw
     * @property {string|null} [publicKey] ValidatorWithdraw publicKey
     * @property {Uint8Array|null} [r] ValidatorWithdraw r
     * @property {Uint8Array|null} [s] ValidatorWithdraw s
     */

    /**
     * Constructs a new ValidatorWithdraw.
     * @exports ValidatorWithdraw
     * @classdesc Represents a ValidatorWithdraw.
     * @implements IValidatorWithdraw
     * @constructor
     * @param {IValidatorWithdraw=} [properties] Properties to set
     */
    function ValidatorWithdraw(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ValidatorWithdraw publicKey.
     * @member {string} publicKey
     * @memberof ValidatorWithdraw
     * @instance
     */
    ValidatorWithdraw.prototype.publicKey = "";

    /**
     * ValidatorWithdraw r.
     * @member {Uint8Array} r
     * @memberof ValidatorWithdraw
     * @instance
     */
    ValidatorWithdraw.prototype.r = $util.newBuffer([]);

    /**
     * ValidatorWithdraw s.
     * @member {Uint8Array} s
     * @memberof ValidatorWithdraw
     * @instance
     */
    ValidatorWithdraw.prototype.s = $util.newBuffer([]);

    /**
     * Creates a new ValidatorWithdraw instance using the specified properties.
     * @function create
     * @memberof ValidatorWithdraw
     * @static
     * @param {IValidatorWithdraw=} [properties] Properties to set
     * @returns {ValidatorWithdraw} ValidatorWithdraw instance
     */
    ValidatorWithdraw.create = function create(properties) {
        return new ValidatorWithdraw(properties);
    };

    /**
     * Encodes the specified ValidatorWithdraw message. Does not implicitly {@link ValidatorWithdraw.verify|verify} messages.
     * @function encode
     * @memberof ValidatorWithdraw
     * @static
     * @param {IValidatorWithdraw} message ValidatorWithdraw message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ValidatorWithdraw.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.publicKey != null && message.hasOwnProperty("publicKey"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.publicKey);
        if (message.r != null && message.hasOwnProperty("r"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.r);
        if (message.s != null && message.hasOwnProperty("s"))
            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.s);
        return writer;
    };

    /**
     * Encodes the specified ValidatorWithdraw message, length delimited. Does not implicitly {@link ValidatorWithdraw.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ValidatorWithdraw
     * @static
     * @param {IValidatorWithdraw} message ValidatorWithdraw message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ValidatorWithdraw.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ValidatorWithdraw message from the specified reader or buffer.
     * @function decode
     * @memberof ValidatorWithdraw
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ValidatorWithdraw} ValidatorWithdraw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ValidatorWithdraw.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ValidatorWithdraw();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.publicKey = reader.string();
                break;
            case 2:
                message.r = reader.bytes();
                break;
            case 3:
                message.s = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ValidatorWithdraw message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ValidatorWithdraw
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ValidatorWithdraw} ValidatorWithdraw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ValidatorWithdraw.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ValidatorWithdraw message.
     * @function verify
     * @memberof ValidatorWithdraw
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ValidatorWithdraw.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.publicKey != null && message.hasOwnProperty("publicKey"))
            if (!$util.isString(message.publicKey))
                return "publicKey: string expected";
        if (message.r != null && message.hasOwnProperty("r"))
            if (!(message.r && typeof message.r.length === "number" || $util.isString(message.r)))
                return "r: buffer expected";
        if (message.s != null && message.hasOwnProperty("s"))
            if (!(message.s && typeof message.s.length === "number" || $util.isString(message.s)))
                return "s: buffer expected";
        return null;
    };

    /**
     * Creates a ValidatorWithdraw message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ValidatorWithdraw
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ValidatorWithdraw} ValidatorWithdraw
     */
    ValidatorWithdraw.fromObject = function fromObject(object) {
        if (object instanceof $root.ValidatorWithdraw)
            return object;
        var message = new $root.ValidatorWithdraw();
        if (object.publicKey != null)
            message.publicKey = String(object.publicKey);
        if (object.r != null)
            if (typeof object.r === "string")
                $util.base64.decode(object.r, message.r = $util.newBuffer($util.base64.length(object.r)), 0);
            else if (object.r.length)
                message.r = object.r;
        if (object.s != null)
            if (typeof object.s === "string")
                $util.base64.decode(object.s, message.s = $util.newBuffer($util.base64.length(object.s)), 0);
            else if (object.s.length)
                message.s = object.s;
        return message;
    };

    /**
     * Creates a plain object from a ValidatorWithdraw message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ValidatorWithdraw
     * @static
     * @param {ValidatorWithdraw} message ValidatorWithdraw
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ValidatorWithdraw.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.publicKey = "";
            if (options.bytes === String)
                object.r = "";
            else {
                object.r = [];
                if (options.bytes !== Array)
                    object.r = $util.newBuffer(object.r);
            }
            if (options.bytes === String)
                object.s = "";
            else {
                object.s = [];
                if (options.bytes !== Array)
                    object.s = $util.newBuffer(object.s);
            }
        }
        if (message.publicKey != null && message.hasOwnProperty("publicKey"))
            object.publicKey = message.publicKey;
        if (message.r != null && message.hasOwnProperty("r"))
            object.r = options.bytes === String ? $util.base64.encode(message.r, 0, message.r.length) : options.bytes === Array ? Array.prototype.slice.call(message.r) : message.r;
        if (message.s != null && message.hasOwnProperty("s"))
            object.s = options.bytes === String ? $util.base64.encode(message.s, 0, message.s.length) : options.bytes === Array ? Array.prototype.slice.call(message.s) : message.s;
        return object;
    };

    /**
     * Converts this ValidatorWithdraw to JSON.
     * @function toJSON
     * @memberof ValidatorWithdraw
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ValidatorWithdraw.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ValidatorWithdraw;
})();

$root.Receipt = (function() {

    /**
     * Properties of a Receipt.
     * @exports IReceipt
     * @interface IReceipt
     * @property {string|null} [sender] Receipt sender
     * @property {string|null} [recipient] Receipt recipient
     * @property {number|Long|null} [amount] Receipt amount
     * @property {number|null} [nonce] Receipt nonce
     */

    /**
     * Constructs a new Receipt.
     * @exports Receipt
     * @classdesc Represents a Receipt.
     * @implements IReceipt
     * @constructor
     * @param {IReceipt=} [properties] Properties to set
     */
    function Receipt(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Receipt sender.
     * @member {string} sender
     * @memberof Receipt
     * @instance
     */
    Receipt.prototype.sender = "";

    /**
     * Receipt recipient.
     * @member {string} recipient
     * @memberof Receipt
     * @instance
     */
    Receipt.prototype.recipient = "";

    /**
     * Receipt amount.
     * @member {number|Long} amount
     * @memberof Receipt
     * @instance
     */
    Receipt.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Receipt nonce.
     * @member {number} nonce
     * @memberof Receipt
     * @instance
     */
    Receipt.prototype.nonce = 0;

    /**
     * Creates a new Receipt instance using the specified properties.
     * @function create
     * @memberof Receipt
     * @static
     * @param {IReceipt=} [properties] Properties to set
     * @returns {Receipt} Receipt instance
     */
    Receipt.create = function create(properties) {
        return new Receipt(properties);
    };

    /**
     * Encodes the specified Receipt message. Does not implicitly {@link Receipt.verify|verify} messages.
     * @function encode
     * @memberof Receipt
     * @static
     * @param {IReceipt} message Receipt message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Receipt.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.sender != null && message.hasOwnProperty("sender"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.sender);
        if (message.recipient != null && message.hasOwnProperty("recipient"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.recipient);
        if (message.amount != null && message.hasOwnProperty("amount"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.amount);
        if (message.nonce != null && message.hasOwnProperty("nonce"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.nonce);
        return writer;
    };

    /**
     * Encodes the specified Receipt message, length delimited. Does not implicitly {@link Receipt.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Receipt
     * @static
     * @param {IReceipt} message Receipt message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Receipt.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Receipt message from the specified reader or buffer.
     * @function decode
     * @memberof Receipt
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Receipt} Receipt
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Receipt.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Receipt();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.sender = reader.string();
                break;
            case 2:
                message.recipient = reader.string();
                break;
            case 3:
                message.amount = reader.uint64();
                break;
            case 4:
                message.nonce = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Receipt message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Receipt
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Receipt} Receipt
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Receipt.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Receipt message.
     * @function verify
     * @memberof Receipt
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Receipt.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.sender != null && message.hasOwnProperty("sender"))
            if (!$util.isString(message.sender))
                return "sender: string expected";
        if (message.recipient != null && message.hasOwnProperty("recipient"))
            if (!$util.isString(message.recipient))
                return "recipient: string expected";
        if (message.amount != null && message.hasOwnProperty("amount"))
            if (!$util.isInteger(message.amount) && !(message.amount && $util.isInteger(message.amount.low) && $util.isInteger(message.amount.high)))
                return "amount: integer|Long expected";
        if (message.nonce != null && message.hasOwnProperty("nonce"))
            if (!$util.isInteger(message.nonce))
                return "nonce: integer expected";
        return null;
    };

    /**
     * Creates a Receipt message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Receipt
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Receipt} Receipt
     */
    Receipt.fromObject = function fromObject(object) {
        if (object instanceof $root.Receipt)
            return object;
        var message = new $root.Receipt();
        if (object.sender != null)
            message.sender = String(object.sender);
        if (object.recipient != null)
            message.recipient = String(object.recipient);
        if (object.amount != null)
            if ($util.Long)
                (message.amount = $util.Long.fromValue(object.amount)).unsigned = true;
            else if (typeof object.amount === "string")
                message.amount = parseInt(object.amount, 10);
            else if (typeof object.amount === "number")
                message.amount = object.amount;
            else if (typeof object.amount === "object")
                message.amount = new $util.LongBits(object.amount.low >>> 0, object.amount.high >>> 0).toNumber(true);
        if (object.nonce != null)
            message.nonce = object.nonce >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a Receipt message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Receipt
     * @static
     * @param {Receipt} message Receipt
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Receipt.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.sender = "";
            object.recipient = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.amount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.amount = options.longs === String ? "0" : 0;
            object.nonce = 0;
        }
        if (message.sender != null && message.hasOwnProperty("sender"))
            object.sender = message.sender;
        if (message.recipient != null && message.hasOwnProperty("recipient"))
            object.recipient = message.recipient;
        if (message.amount != null && message.hasOwnProperty("amount"))
            if (typeof message.amount === "number")
                object.amount = options.longs === String ? String(message.amount) : message.amount;
            else
                object.amount = options.longs === String ? $util.Long.prototype.toString.call(message.amount) : options.longs === Number ? new $util.LongBits(message.amount.low >>> 0, message.amount.high >>> 0).toNumber(true) : message.amount;
        if (message.nonce != null && message.hasOwnProperty("nonce"))
            object.nonce = message.nonce;
        return object;
    };

    /**
     * Converts this Receipt to JSON.
     * @function toJSON
     * @memberof Receipt
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Receipt.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Receipt;
})();

$root.MerkleProof = (function() {

    /**
     * Properties of a MerkleProof.
     * @exports IMerkleProof
     * @interface IMerkleProof
     * @property {Array.<string>|null} [mapLeaf] MerkleProof mapLeaf
     * @property {Array.<Uint8Array>|null} [mapHash] MerkleProof mapHash
     * @property {Uint8Array|null} [root] MerkleProof root
     * @property {Uint8Array|null} [leaf] MerkleProof leaf
     * @property {IReceipt|null} [receipt] MerkleProof receipt
     * @property {ITransaction|null} [transaction] MerkleProof transaction
     * @property {number|null} [shard] MerkleProof shard
     */

    /**
     * Constructs a new MerkleProof.
     * @exports MerkleProof
     * @classdesc Represents a MerkleProof.
     * @implements IMerkleProof
     * @constructor
     * @param {IMerkleProof=} [properties] Properties to set
     */
    function MerkleProof(properties) {
        this.mapLeaf = [];
        this.mapHash = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MerkleProof mapLeaf.
     * @member {Array.<string>} mapLeaf
     * @memberof MerkleProof
     * @instance
     */
    MerkleProof.prototype.mapLeaf = $util.emptyArray;

    /**
     * MerkleProof mapHash.
     * @member {Array.<Uint8Array>} mapHash
     * @memberof MerkleProof
     * @instance
     */
    MerkleProof.prototype.mapHash = $util.emptyArray;

    /**
     * MerkleProof root.
     * @member {Uint8Array} root
     * @memberof MerkleProof
     * @instance
     */
    MerkleProof.prototype.root = $util.newBuffer([]);

    /**
     * MerkleProof leaf.
     * @member {Uint8Array} leaf
     * @memberof MerkleProof
     * @instance
     */
    MerkleProof.prototype.leaf = $util.newBuffer([]);

    /**
     * MerkleProof receipt.
     * @member {IReceipt|null|undefined} receipt
     * @memberof MerkleProof
     * @instance
     */
    MerkleProof.prototype.receipt = null;

    /**
     * MerkleProof transaction.
     * @member {ITransaction|null|undefined} transaction
     * @memberof MerkleProof
     * @instance
     */
    MerkleProof.prototype.transaction = null;

    /**
     * MerkleProof shard.
     * @member {number} shard
     * @memberof MerkleProof
     * @instance
     */
    MerkleProof.prototype.shard = 0;

    /**
     * Creates a new MerkleProof instance using the specified properties.
     * @function create
     * @memberof MerkleProof
     * @static
     * @param {IMerkleProof=} [properties] Properties to set
     * @returns {MerkleProof} MerkleProof instance
     */
    MerkleProof.create = function create(properties) {
        return new MerkleProof(properties);
    };

    /**
     * Encodes the specified MerkleProof message. Does not implicitly {@link MerkleProof.verify|verify} messages.
     * @function encode
     * @memberof MerkleProof
     * @static
     * @param {IMerkleProof} message MerkleProof message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MerkleProof.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mapLeaf != null && message.mapLeaf.length)
            for (var i = 0; i < message.mapLeaf.length; ++i)
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.mapLeaf[i]);
        if (message.mapHash != null && message.mapHash.length)
            for (var i = 0; i < message.mapHash.length; ++i)
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.mapHash[i]);
        if (message.root != null && message.hasOwnProperty("root"))
            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.root);
        if (message.leaf != null && message.hasOwnProperty("leaf"))
            writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.leaf);
        if (message.receipt != null && message.hasOwnProperty("receipt"))
            $root.Receipt.encode(message.receipt, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.transaction != null && message.hasOwnProperty("transaction"))
            $root.Transaction.encode(message.transaction, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.shard != null && message.hasOwnProperty("shard"))
            writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.shard);
        return writer;
    };

    /**
     * Encodes the specified MerkleProof message, length delimited. Does not implicitly {@link MerkleProof.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MerkleProof
     * @static
     * @param {IMerkleProof} message MerkleProof message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MerkleProof.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MerkleProof message from the specified reader or buffer.
     * @function decode
     * @memberof MerkleProof
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MerkleProof} MerkleProof
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MerkleProof.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MerkleProof();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.mapLeaf && message.mapLeaf.length))
                    message.mapLeaf = [];
                message.mapLeaf.push(reader.string());
                break;
            case 2:
                if (!(message.mapHash && message.mapHash.length))
                    message.mapHash = [];
                message.mapHash.push(reader.bytes());
                break;
            case 3:
                message.root = reader.bytes();
                break;
            case 4:
                message.leaf = reader.bytes();
                break;
            case 5:
                message.receipt = $root.Receipt.decode(reader, reader.uint32());
                break;
            case 6:
                message.transaction = $root.Transaction.decode(reader, reader.uint32());
                break;
            case 7:
                message.shard = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a MerkleProof message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MerkleProof
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MerkleProof} MerkleProof
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MerkleProof.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MerkleProof message.
     * @function verify
     * @memberof MerkleProof
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MerkleProof.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.mapLeaf != null && message.hasOwnProperty("mapLeaf")) {
            if (!Array.isArray(message.mapLeaf))
                return "mapLeaf: array expected";
            for (var i = 0; i < message.mapLeaf.length; ++i)
                if (!$util.isString(message.mapLeaf[i]))
                    return "mapLeaf: string[] expected";
        }
        if (message.mapHash != null && message.hasOwnProperty("mapHash")) {
            if (!Array.isArray(message.mapHash))
                return "mapHash: array expected";
            for (var i = 0; i < message.mapHash.length; ++i)
                if (!(message.mapHash[i] && typeof message.mapHash[i].length === "number" || $util.isString(message.mapHash[i])))
                    return "mapHash: buffer[] expected";
        }
        if (message.root != null && message.hasOwnProperty("root"))
            if (!(message.root && typeof message.root.length === "number" || $util.isString(message.root)))
                return "root: buffer expected";
        if (message.leaf != null && message.hasOwnProperty("leaf"))
            if (!(message.leaf && typeof message.leaf.length === "number" || $util.isString(message.leaf)))
                return "leaf: buffer expected";
        if (message.receipt != null && message.hasOwnProperty("receipt")) {
            var error = $root.Receipt.verify(message.receipt);
            if (error)
                return "receipt." + error;
        }
        if (message.transaction != null && message.hasOwnProperty("transaction")) {
            var error = $root.Transaction.verify(message.transaction);
            if (error)
                return "transaction." + error;
        }
        if (message.shard != null && message.hasOwnProperty("shard"))
            if (!$util.isInteger(message.shard))
                return "shard: integer expected";
        return null;
    };

    /**
     * Creates a MerkleProof message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MerkleProof
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MerkleProof} MerkleProof
     */
    MerkleProof.fromObject = function fromObject(object) {
        if (object instanceof $root.MerkleProof)
            return object;
        var message = new $root.MerkleProof();
        if (object.mapLeaf) {
            if (!Array.isArray(object.mapLeaf))
                throw TypeError(".MerkleProof.mapLeaf: array expected");
            message.mapLeaf = [];
            for (var i = 0; i < object.mapLeaf.length; ++i)
                message.mapLeaf[i] = String(object.mapLeaf[i]);
        }
        if (object.mapHash) {
            if (!Array.isArray(object.mapHash))
                throw TypeError(".MerkleProof.mapHash: array expected");
            message.mapHash = [];
            for (var i = 0; i < object.mapHash.length; ++i)
                if (typeof object.mapHash[i] === "string")
                    $util.base64.decode(object.mapHash[i], message.mapHash[i] = $util.newBuffer($util.base64.length(object.mapHash[i])), 0);
                else if (object.mapHash[i].length)
                    message.mapHash[i] = object.mapHash[i];
        }
        if (object.root != null)
            if (typeof object.root === "string")
                $util.base64.decode(object.root, message.root = $util.newBuffer($util.base64.length(object.root)), 0);
            else if (object.root.length)
                message.root = object.root;
        if (object.leaf != null)
            if (typeof object.leaf === "string")
                $util.base64.decode(object.leaf, message.leaf = $util.newBuffer($util.base64.length(object.leaf)), 0);
            else if (object.leaf.length)
                message.leaf = object.leaf;
        if (object.receipt != null) {
            if (typeof object.receipt !== "object")
                throw TypeError(".MerkleProof.receipt: object expected");
            message.receipt = $root.Receipt.fromObject(object.receipt);
        }
        if (object.transaction != null) {
            if (typeof object.transaction !== "object")
                throw TypeError(".MerkleProof.transaction: object expected");
            message.transaction = $root.Transaction.fromObject(object.transaction);
        }
        if (object.shard != null)
            message.shard = object.shard >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a MerkleProof message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MerkleProof
     * @static
     * @param {MerkleProof} message MerkleProof
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MerkleProof.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.mapLeaf = [];
            object.mapHash = [];
        }
        if (options.defaults) {
            if (options.bytes === String)
                object.root = "";
            else {
                object.root = [];
                if (options.bytes !== Array)
                    object.root = $util.newBuffer(object.root);
            }
            if (options.bytes === String)
                object.leaf = "";
            else {
                object.leaf = [];
                if (options.bytes !== Array)
                    object.leaf = $util.newBuffer(object.leaf);
            }
            object.receipt = null;
            object.transaction = null;
            object.shard = 0;
        }
        if (message.mapLeaf && message.mapLeaf.length) {
            object.mapLeaf = [];
            for (var j = 0; j < message.mapLeaf.length; ++j)
                object.mapLeaf[j] = message.mapLeaf[j];
        }
        if (message.mapHash && message.mapHash.length) {
            object.mapHash = [];
            for (var j = 0; j < message.mapHash.length; ++j)
                object.mapHash[j] = options.bytes === String ? $util.base64.encode(message.mapHash[j], 0, message.mapHash[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.mapHash[j]) : message.mapHash[j];
        }
        if (message.root != null && message.hasOwnProperty("root"))
            object.root = options.bytes === String ? $util.base64.encode(message.root, 0, message.root.length) : options.bytes === Array ? Array.prototype.slice.call(message.root) : message.root;
        if (message.leaf != null && message.hasOwnProperty("leaf"))
            object.leaf = options.bytes === String ? $util.base64.encode(message.leaf, 0, message.leaf.length) : options.bytes === Array ? Array.prototype.slice.call(message.leaf) : message.leaf;
        if (message.receipt != null && message.hasOwnProperty("receipt"))
            object.receipt = $root.Receipt.toObject(message.receipt, options);
        if (message.transaction != null && message.hasOwnProperty("transaction"))
            object.transaction = $root.Transaction.toObject(message.transaction, options);
        if (message.shard != null && message.hasOwnProperty("shard"))
            object.shard = message.shard;
        return object;
    };

    /**
     * Converts this MerkleProof to JSON.
     * @function toJSON
     * @memberof MerkleProof
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MerkleProof.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return MerkleProof;
})();

$root.MoneyWithdraw = (function() {

    /**
     * Properties of a MoneyWithdraw.
     * @exports IMoneyWithdraw
     * @interface IMoneyWithdraw
     * @property {string|null} [wallet] MoneyWithdraw wallet
     */

    /**
     * Constructs a new MoneyWithdraw.
     * @exports MoneyWithdraw
     * @classdesc Represents a MoneyWithdraw.
     * @implements IMoneyWithdraw
     * @constructor
     * @param {IMoneyWithdraw=} [properties] Properties to set
     */
    function MoneyWithdraw(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MoneyWithdraw wallet.
     * @member {string} wallet
     * @memberof MoneyWithdraw
     * @instance
     */
    MoneyWithdraw.prototype.wallet = "";

    /**
     * Creates a new MoneyWithdraw instance using the specified properties.
     * @function create
     * @memberof MoneyWithdraw
     * @static
     * @param {IMoneyWithdraw=} [properties] Properties to set
     * @returns {MoneyWithdraw} MoneyWithdraw instance
     */
    MoneyWithdraw.create = function create(properties) {
        return new MoneyWithdraw(properties);
    };

    /**
     * Encodes the specified MoneyWithdraw message. Does not implicitly {@link MoneyWithdraw.verify|verify} messages.
     * @function encode
     * @memberof MoneyWithdraw
     * @static
     * @param {IMoneyWithdraw} message MoneyWithdraw message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MoneyWithdraw.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.wallet != null && message.hasOwnProperty("wallet"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.wallet);
        return writer;
    };

    /**
     * Encodes the specified MoneyWithdraw message, length delimited. Does not implicitly {@link MoneyWithdraw.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MoneyWithdraw
     * @static
     * @param {IMoneyWithdraw} message MoneyWithdraw message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MoneyWithdraw.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MoneyWithdraw message from the specified reader or buffer.
     * @function decode
     * @memberof MoneyWithdraw
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MoneyWithdraw} MoneyWithdraw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MoneyWithdraw.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MoneyWithdraw();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.wallet = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a MoneyWithdraw message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MoneyWithdraw
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MoneyWithdraw} MoneyWithdraw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MoneyWithdraw.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MoneyWithdraw message.
     * @function verify
     * @memberof MoneyWithdraw
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MoneyWithdraw.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.wallet != null && message.hasOwnProperty("wallet"))
            if (!$util.isString(message.wallet))
                return "wallet: string expected";
        return null;
    };

    /**
     * Creates a MoneyWithdraw message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MoneyWithdraw
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MoneyWithdraw} MoneyWithdraw
     */
    MoneyWithdraw.fromObject = function fromObject(object) {
        if (object instanceof $root.MoneyWithdraw)
            return object;
        var message = new $root.MoneyWithdraw();
        if (object.wallet != null)
            message.wallet = String(object.wallet);
        return message;
    };

    /**
     * Creates a plain object from a MoneyWithdraw message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MoneyWithdraw
     * @static
     * @param {MoneyWithdraw} message MoneyWithdraw
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MoneyWithdraw.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.wallet = "";
        if (message.wallet != null && message.hasOwnProperty("wallet"))
            object.wallet = message.wallet;
        return object;
    };

    /**
     * Converts this MoneyWithdraw to JSON.
     * @function toJSON
     * @memberof MoneyWithdraw
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MoneyWithdraw.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return MoneyWithdraw;
})();

module.exports = $root;
