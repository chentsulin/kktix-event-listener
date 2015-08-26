'use strict';

var request = require('request');
var notifier = require('node-notifier');
var cheerio = require('cheerio');


module.exports = function(url, duration) {
  duration = duration || 10000;
	setInterval(function() {
    request(url, function(err, res, body) {
      var $ = cheerio.load(body);
      if ($('.tickets .btn').text() !== '本活動已額滿') {
        notifier.notify({
          'title': '活動可以報名了',
          'message': '還有名額'
        });
      } else {
        console.log('沒有 QQ');
      }
    })
  }, duration);
};
