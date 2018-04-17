# Zula Message Verification and Signing for Bitcore-Zula


[![NPM Package](https://img.shields.io/npm/v/bitcore-message-zula.svg?style=flat-square)](https://www.npmjs.org/package/bitcore-message-zula)
[![Build Status](https://img.shields.io/travis/zuladev/bitcore-message-zula.svg?branch=master&style=flat-square)](https://travis-ci.org/zuladev/bitcore-message-zula)
[![Coverage Status](https://img.shields.io/coveralls/bitpay/bitcore-message-zula.svg?style=flat-square)](https://coveralls.io/r/zuladev/bitcore-message-zula?branch=master)

bitcore-message-zula adds support for verifying and signing zula messages in [Node.js](http://nodejs.org/) and web browsers.

See [the main bitcore-zula repo](https://github.com/zuladev/bitcore-zula) for more information.

## Getting Started

```sh
npm install bitcore-message-zula
```

```sh
bower install bitcore-message-zula
```

To sign a message:

```javascript
var bitcore = require('bitcore-lib-zula');
var Message = require('bitcore-message-zula');

var privateKey = bitcore.PrivateKey.fromWIF('cPBn5A4ikZvBTQ8D7NnvHZYCAxzDZ5Z2TSGW2LkyPiLxqYaJPBW4');
var signature = Message('hello, world').sign(privateKey);
```

To verify a message:

```javascript
var address = 'n1ZCYg9YXtB5XCZazLxSmPDa8iwJRZHhGx';
var signature = 'H/DIn8uA1scAuKLlCx+/9LnAcJtwQQ0PmcPrJUq90aboLv3fH5fFvY+vmbfOSFEtGarznYli6ShPr9RXwY9UrIY=';
var verified = Message('hello, world').verify(address, signature);
```

## Contributing

See [CONTRIBUTING.md](https://github.com/zuladev/bitcore-zula/blob/master/CONTRIBUTING.md) on the main bitcore-zula repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/bitpay/bitcore/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.

