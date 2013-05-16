var username = 'peli',
    passwd = 'P@ssword4',
    //login_url = 'http://touzi101admin.vcbrands.com/user';
    login_url = 'http://touzi101dev1.vcbrands.com/user';
var casper = require('casper').create({
	pageSettings: {
    	userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.10 (KHTML, like Gecko) Chrome/23.0.1262.0 Safari/537.10'
    }, 
    viewportSize: {
        width: 1024,
        height: 768
    },
});
casper.start(login_url, function(){
	this.echo('  current url-1: ' + this.getCurrentUrl());
	this.test.assertExists('form#user-login', 'login form exists');
	this.test.assertExists('h2.element-invisible', 'h2 exists');
	this.fill('form#user-login',{
		'name':username,
		'pass':passwd,
	}, true);
	//this.click('form.contact input[type="submit"]');
	this.test.assertField('name',username);
	this.test.assertField('pass',passwd);
});

casper.then(function() {
	this.echo('then:');
	this.echo('  current url-2: ' + this.getCurrentUrl());
	this.echo(this.evaluate(function() {
        return getTitle;
    }));
});
casper.thenOpen('http://touzi101dev1.vcbrands.com/node/add/invcontent', function() {
	this.echo('  current url-3: ' + this.getCurrentUrl());
	this.test.assertExists('form#invcontent-node-form', 'invcontent-node-form form exists');
	this.test.assertExists('select#edit-field-content-type-und', 'the content type drop down exists');
	this.test.assertExists('title', 'article title');
	this.fill('form#invcontent-node-form',{
		'field_content_type[und]':'Article',
		'title':'auto add article-aq title - by casper'
	}, false);
	this.click('input#edit-submit');
});
/*casper.thenOpen('http://touzi101admin.vcbrands.com/contributors/53305', function(){
	console.log(casper.evaluate(document.querySelector("title").innerText));
});*/
casper.run(function() {
    this.echo('message sent').exit();
});
