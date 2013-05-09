//phantomjs --output-encoding=gb2312 pic.js// print chinese encoding
var RenderUrlsToFile, arrayOfUrls, system;
var  website = {
    "web1":[
    /*{"url":"", "title":"homepage", "status":""},
    {"url":"dictionary/", "title":"dictionary", "status":""}
    {"url":"dictionary/investing-basics/", "title":"dictionary_investing-basics", "status":""},
    {"url":"dictionary/active-trading/", "title":"dictionary_active-trading", "status":""},
    {"url":"dictionary/forex/", "title":"dictionary_forex", "status":""},
    {"url":"dictionary/technical-analysis/", "title":"dictionary_technical-analysis", "status":""},
    {"url":"dictionary/fundamentals/", "title":"dictionary_fundamentals", "status":""},
    {"url":"dictionary/insurance/", "title":"dictionary_insurance", "status":""},
    {"url":"dictionary/futures/", "title":"dictionary_futures", "status":""},
    {"url":"dictionary/stocks/", "title":"dictionary_stocks", "status":""},
    {"url":"dictionary/bonds/", "title":"dictionary_bonds", "status":""},
    {"url":"dictionary/personal-finance/", "title":"dictionary_personal-finance", "status":""},
    {"url":"dictionary/accounting/", "title":"dictionary_accounting", "status":""},
    {"url":"dictionary/economics/", "title":"dictionary_economics", "status":""},
    {"url":"investing/", "title":"investing", "status":""},
    {"url":"investing/investing-basics/", "title":"investing_investing-basics", "status":""},
    {"url":"investing/stocks/", "title":"investing_stocks", "status":""},
    {"url":"investing/bonds/", "title":"investing_bonds", "status":""},
    {"url":"investing/funds/", "title":"investing_funds", "status":""},
    {"url":"investing/fundamental-analysis/", "title":"investing_fundamental-analysis", "status":""},
    {"url":"investing/economics/", "title":"investing_economics", "status":""},
    {"url":"personal-finance/", "title":"personal-finance", "status":""},
    {"url":"personal-finance/savings/", "title":"personal-finance_savings", "status":""},
    {"url":"personal-finance/credit-and-loans/", "title":"personal-finance_credit-and-loans", "status":""},
    {"url":"personal-finance/credit-cards/", "title":"personal-finance_credit-cards", "status":""},
    {"url":"personal-finance/budgeting/", "title":"personal-finance_budgeting", "status":""},
    {"url":"personal-finance/insurance/", "title":"personal-finance_insurance", "status":""},
    {"url":"personal-finance/retirement/", "title":"personal-finance_retirement", "status":""},
    {"url":"active-trading/", "title":"active-trading", "status":""},
    {"url":"active-trading/fundamentals/", "title":"active-trading_fundamentals", "status":""},
    {"url":"active-trading/technical-analysis/", "title":"active-trading_technical-analysis", "status":""},
    {"url":"active-trading/trading-strategies/", "title":"active-trading_trading-strategies", "status":""},
    {"url":"active-trading/trading-system-software/", "title":"active-trading_trading-system-software", "status":""},
    {"url":"active-trading/futures/", "title":"active-trading_futures", "status":""},
    {"url":"active-trading/options/", "title":"active-trading_options", "status":""},
    {"url":"forex/", "title":"forex", "status":""},
    {"url":"forex/fundamentals/", "title":"forex/fundamentals", "status":""},
    {"url":"forex/trading-strategies/", "title":"forex_trading-strategies", "status":""},
    {"url":"forex/walkthrough/", "title":"forex_walkthrough", "status":""},
    {"url":"professionals/", "title":"professionals", "status":""},
    {"url":"professionals/global-professional-exams/", "title":"professionals_global-professional-exams", "status":""},
    {"url":"professionals/chinese-professional-exams/", "title":"professionals_chinese-professional-exams", "status":""},
    {"url":"professionals/charted-financial-analyst-cfa/", "title":"professionals_charted-financial-analyst-cfa", "status":""},*/
    {"url":"professionals/careers/", "title":"professionals_careers", "status":""},
    {"url":"tutorials/", "title":"tutorials", "status":""}
    ]
};
system = require("system");
st = Date.now();




RenderUrlsToFile = function(urls, callbackPerUrl, callbackFinal) {
    var getFilename, next, page, retrieve, urlIndex, webpage;
    urlIndex = 0;
    webpage = require("webpage");
    page = null;
    getFilename = function() {
    	var num = urlIndex-1;
    	return website.web1[num].title + '_'+  Date.now() +'_' + ".png";
    };
    next = function(status, url, file) {
        page.close();
        callbackPerUrl(status, url, file);
        return retrieve();
    };
    retrieve = function() {
        var url;
        if (urls.length > 0) {
            url = urls.shift();
            urlIndex++;
            page = webpage.create();
            page.viewportSize = {
                width: 800,
                height: 600
            };
            page.settings.userAgent = "Phantom.js bot";
            return page.open("http://touzi101dev1.vcbrands.com/" + url, function(status) {
                var file;
                file = getFilename();
                if (status === "success") {
                	title = page.evaluate(function() { return document.title; });
                	console.log('Page title: ' + title);
                    return window.setTimeout((function() {
                        page.render(file);
                        return next(status, url, file);
                    }), 200);
                } else {
                    return next(status, url, file);
                }
            });
        } else {
            return callbackFinal();
        }
    };
    return retrieve();
};
//-------------------------------------------------------------
var arrayOfUrls = new Array(); 

if (system.args.length > 1) {
    arrayOfUrls = Array.prototype.slice.call(system.args, 1);
} else {
    //console.log("Usage: phantomjs render_multi_url.js [domain.name1, domain.name2, ...]");
    //arrayOfUrls = ["www.google.com", "www.bbc.co.uk", "www.phantomjs.org"];
    var len = eval(website.web1);
    //console.log(len.length);
     for(var i=0; i<len.length; i++){
        //console.log(i);
        arrayOfUrls.push(website.web1[i].url);
     }
 //console.log(arrayOfUrls);
}

RenderUrlsToFile(arrayOfUrls, (function(status, url, file) {
	console.log('start time: ' + st );
    if (status !== "success") {
        return console.log("Unable to render '" + url + "'");
    } else {
        return console.log("Rendered '" + url + "' at '" + file + "'");
    }
}), function() {
	et = Date.now();
	console.log('end time: ' + et );
	console.log('spend time: ' + (et - st) + 'msec');
    return phantom.exit();
});

