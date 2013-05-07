var page = require('webpage').create();
page.open('http://github.com/', function () {
    page.render('1.png');
    phantom.exit();
});
page.open('http://touzi101admin.vcbrands.com/dictionary/', function () {
    page.render('2.png');
    phantom.exit();
});


