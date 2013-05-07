var page = require('webpage').create();
page.open('http://github.com/', function () {
    page.render('1.png');
    phantom.exit();
});
var page2 = require('webpage').create();
page2.open('http://touzi101.cn/', function () {
    page2.render('2.png');
    phantom.exit();
});


