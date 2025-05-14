# ErgonAddr.js: The Ergon address format for Node.js and web browsers.


[![NPM](https://nodei.co/npm/ergonaddrjs.png?downloads=true)](https://nodei.co/npm/ergonaddrjs/)

JavaScript implementation for the new CashAddr address format for Ergon

Compliant with the original CashAddr [specification](https://github.com/bitcoincashorg/bitcoincash.org/blob/master/spec/cashaddr.md) which improves upon [BIP 173](https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki).

*Note:* This is a JavaScript implementation of the CashAddr format specification. If you are looking for a general purpose Bitcoin Cash address translation library, check out the easy-to-use and well-tested [BchAddr.js](https://github.com/ealmansi/bchaddrjs).

## Installation

### Using NPM

```bsh
$ npm install --save ergonaddrjs
```

### Using Bower

```bsh
$ bower install --save ergonaddrjs
```

### Manually

You may also download the distribution file manually and place it within your third-party scripts directory: [dist/cashaddrjs-{{ version }}.min.js](https://unpkg.com/cashaddrjs@{{ version }}/dist/cashaddrjs-{{ version }}.min.js).

## Usage

### In Node.js

```javascript
const cashaddr = require('ergonaddrjs');
const address = 'ergon:qzlpe5s83jdjeptamv2wma058xq6pflukc6zwasrt7';
const { prefix, type, hash } = cashaddr.decode(address);
console.log(prefix); // 'ergon'
console.log(type); // 'P2PKH'
console.log(hash); // Uint8Array [ 118, 160, ..., 115 ]
console.log(cashaddr.encode(prefix, type, hash)); // 'ergon:qzlpe5s83jdjeptamv2wma058xq6pflukc6zwasrt7'
```

*Note:* This is a JavaScript implementation of the CashAddr format specification. If you are looking for an easy-to-use and well-tested library to translate between different formats, check out [BchAddr.js](https://github.com/ealmansi/bchaddrjs).

### Browser

#### Script Tag

You may include a script tag in your HTML and the `cashaddr` module will be defined globally on subsequent scripts.

```html
<html>
  <head>
    ...
    <script src="https://unpkg.com/ergonaddrjs@{{ version }}/dist/ergonaddrjs-{{ version }}.min.js"></script>
  </head>
  ...
</html>
```

## Documentation

### Generate and Browse Locally

```bsh
$ npm run docs
```

### Online

Browse automatically generated jsdocs [online](https://emilio.almansi.me/cashaddrjs/module-cashaddr.html).
