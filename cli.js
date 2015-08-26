#!/usr/bin/env node
'use strict';

var meow = require('meow');
var kktixEventListener = require('./');


var cli = meow({
	help: [
		'Usage',
		'  $ kktix-event-listener [url]',
		'',
		'Examples',
		'  $ kktix-event-listener http://reactjs.kktix.cc/events/react9',
		'',
		'Options',
		'  --duration -d  Polling duration. Default: 10000'
	].join('\n')
})


kktixEventListener(cli.input[0], cli.flags.duration || cli.flags.d);
