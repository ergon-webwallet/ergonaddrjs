/**
 * @license
 * https://github.com/ergon-webwallet/ergonaddrjs
 * Copyright (c) 2017-2020 Emilio Almansi
 * Copyright (c) 2023 Bitcoin ABC
 * Copyright (c) 2024-2025 Ergon.moe and calory.social
 * Distributed under the MIT software license, see the accompanying
 * file LICENSE or http://www.opensource.org/licenses/mit-license.php.
 */

'use strict';

var validate = require('./validation').validate;

/**
 * Base32 encoding and decoding.
 *
 * @module base32
 */

/**
 * Charset containing the 32 symbols used in the base32 encoding.
 * @private
 */
var CHARSET = 'qpzry9x8gf2tvdw0s3jn54khce6mua7l';

/**
 * Inverted index mapping each symbol into its index within the charset.
 * @private
 */
var CHARSET_INVERSE_INDEX = {
    q: 0,
    p: 1,
    z: 2,
    r: 3,
    y: 4,
    9: 5,
    x: 6,
    8: 7,
    g: 8,
    f: 9,
    2: 10,
    t: 11,
    v: 12,
    d: 13,
    w: 14,
    0: 15,
    s: 16,
    3: 17,
    j: 18,
    n: 19,
    5: 20,
    4: 21,
    k: 22,
    h: 23,
    c: 24,
    e: 25,
    6: 26,
    m: 27,
    u: 28,
    a: 29,
    7: 30,
    l: 31,
};

/**
 * Encodes the given array of 5-bit integers as a base32-encoded string.
 *
 * @static
 * @param {Uint8Array} data Array of integers between 0 and 31 inclusive.
 * @returns {string}
 * @throws {ValidationError}
 */
function encode(data) {
    validate(data instanceof Uint8Array, 'Invalid data: ' + data + '.');
    var base32 = '';
    for (var i = 0; i < data.length; ++i) {
        var value = data[i];
        validate(0 <= value && value < 32, 'Invalid value: ' + value + '.');
        base32 += CHARSET[value];
    }
    return base32;
}

/**
 * Decodes the given base32-encoded string into an array of 5-bit integers.
 *
 * @static
 * @param {string} string
 * @returns {Uint8Array}
 * @throws {ValidationError}
 */
function decode(string) {
    validate(
        typeof string === 'string',
        'Invalid base32-encoded string: ' + string + '.',
    );
    var data = new Uint8Array(string.length);
    for (var i = 0; i < string.length; ++i) {
        var value = string[i];
        validate(
            value in CHARSET_INVERSE_INDEX,
            'Invalid value: ' + value + '.',
        );
        data[i] = CHARSET_INVERSE_INDEX[value];
    }
    return data;
}

module.exports = {
    encode: encode,
    decode: decode,
};
