const URL = require('url').URL;
const myURL = new URL('example01.html');

$('#data .name').each(function() {
    alert($(this).text());
});
