# CCPA String Builder - JavaScript helper library

JavaScript library for building CCPA String. Compliant with the [US Privacy String spec 1.0](https://github.com/InteractiveAdvertisingBureau/USPrivacy/blob/master/CCPA/US%20Privacy%20String.md) written by IAB.

## Installation

- With NPM
  `npm install ccpa-string-builder --save`

- With Yarn
  `yarn add ccpa-string-builder`

## Usage

This library works with Node and Browser environments.

### CommonJS

```js
const CCPAStringBuilder = require('ccpa-string-builder')
```

### JavaScript modules

```js
import CCPAStringBuilder from 'ccpa-string-builder'
```

To generate the string, use following syntax:

```js
const privacyString = CCPAStringBuilder({
  explicitOptOut: true,
  optOutSale: true,
  lspa: true,
})
```

will produce `1YYY`

```js
const privacyString = CCPAStringBuilder({})
```

will produce `1---`

You may pass either `undefined` (Not Applicable) or boolean value for `explicitOptOut`, `optOutSale`, or `lspa` properties. Omitting parameter is the same as passing `undefined`.

Definitions of each component can be found [here](https://github.com/InteractiveAdvertisingBureau/USPrivacy/blob/master/CCPA/US%20Privacy%20String.md#us-privacy-string-format)
