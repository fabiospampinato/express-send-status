# Express Send Status

![Issues](https://img.shields.io/github/issues/fabiospampinato/express-send-status.svg)
[![NPM version](https://img.shields.io/npm/v/express-send-status.svg)](https://www.npmjs.com/package/express-send-status)

Express middleware for responding with a status code and optional message.

## Install

```shell
$ npm install --save express-send-status
```

## Usage

```js
import * as express from 'express';
import sendStatus from 'express-send-status';

const app = express ();

app.use ( '/images', express.static ( path.join ( __dirname, 'images' ) ), sendStatus ( 404 ) );
app.use ( '/fonts', express.static ( path.join ( __dirname, 'fonts' ) ), sendStatus ( 404, 'Font not found.' ) );

app.get ( '*', ( req, res ) => {/*...*/} ); // Potentially expensive middleware that won't be called
```

## License

MIT © Fabio Spampinato
