# kktix-event-listener

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david_img]][david_site]

> My module


## Install

```
$ npm install kktix-event-listener
```


## Usage

```js
var kktixEventListener = require('kktix-event-listener');

kktixEventListener('http://reactjs.kktix.cc/events/react9');
//=>
```


## CLI

```
$ npm install -g kktix-event-listener
```
```
$ kktix-event-listener --help

  Usage
    kktix-event-listener [url]

  Example
    kktix-event-listener http://reactjs.kktix.cc/events/react9

  Options
    --duration -d  Polling duration. Default: 10000
```


## API

### kktixEventListener(url, [duration])

#### url

*Required*
Type: `string`

Polling url.

#### duration

Type: `number`
Default: ` 10000`

Polling duration.


## License

MIT © [C.T. Lin](https://github.com/chentsulin/kktix-event-listener)

[npm-image]: https://img.shields.io/npm/v/kktix-event-listener.svg?style=flat-square
[npm-url]: https://npmjs.org/package/kktix-event-listener
[travis-image]: https://travis-ci.org/chentsulin/kktix-event-listener.svg
[travis-url]: https://travis-ci.org/chentsulin/kktix-event-listener
[coveralls-image]: https://img.shields.io/coveralls/chentsulin/kktix-event-listener.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/chentsulin/kktix-event-listener
[david_img]: https://img.shields.io/david/chentsulin/kktix-event-listener.svg
[david_site]: https://david-dm.org/chentsulin/kktix-event-listener

