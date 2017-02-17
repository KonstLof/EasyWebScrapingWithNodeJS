var request = require('request');
var cheerio = require('cheerio');

var url = 'http://localhost/example01.html';
request(url, function(err, resp, body) {
    if (err) {
      console.log(err);
    }
    else {
      $ = cheerio.load(body);
      // TODO: scraping goes here!
      $('#data .name').each(function() {
          console.log($(this).text());
      });
    }
});
