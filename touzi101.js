var page = require('webpage').create();
page.open('http://touzi101admin.vcbrands.com/', function () {
    page.render('22.png');
    phantom.exit();
});