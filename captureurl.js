// Render Multiple URLs to file

var  website = [
    {"pagename":"Homepage", "url":"http://www.touzi101.cn/", "title":"", "keyword":"", "description":"", "status":""},
    {"pagename":"Homepage", "url":"http://www.touzi101.cn/dictionary/", "title":"", "keyword":"", "description":"", "status":""}
    ];

var RenderUrlsToFile, websiteresult, system;
websiteresult = [];
system = require("system");





/*
Render given urls
@param array of URLs to render
@param callbackPerUrl Function called after finishing each URL, including the last URL
@param callbackFinal Function called after finishing everything
*/
RenderUrlsToFile = function(websitedata, callbackPerUrl, callbackFinal) {
    var  next, finish, page, retrieve, urlIndex, webpage;
    urlIndex = 0;
    webpage = require("webpage");
    page = null;

    next = function(status, pagedata, filename) {
        page.close();
        callbackPerUrl(status, pagedata, filename);
        return retrieve();
    };

    finish = function(result) {

        return callbackFinal(result);
    };

    retrieve = function() {
        var pagedata, title, status ;
        if (websitedata.length > 0) {
            pagedata = website.shift();
            urlIndex++;
            page = webpage.create();
            page.viewportSize = {
                width: 1024,
                height: 768
            };
            page.settings.userAgent = "Phantom.js bot";

            page.open(pagedata.url, function(status) {

                var filename = pagedata.pagename + "-num" + urlIndex + "-" +  Date.now() + ".png";
                pagedata.status = status;
                console.log("Start to capture page: " + pagedata.url + ". save in:" + filename + ". status:" + pagedata.status);

                if (status === "success") {
                    window.setTimeout((function() {
                        page.render(filename);
                    }), 1000);

                    pagedata = page.evaluate(function(filename1, pagedata1) {
                        pagedata1.title = document.titlel;
                        pagedata1.title = document.querySelector("title").innerText;
                        pagedata1.keyword = document.querySelector("meta[name=Keywords]").getAttribute("content");
                        pagedata1.description = document.querySelector("meta[name=Description]").getAttribute("content");
                        return pagedata1;
                    }, filename, pagedata);

                    console.log(pagedata.keyword);

                    websiteresult.push(pagedata);
                    return next(status, pagedata, filename);

                } else {
                    websiteresult.push(pagedata);
                    return next(status, pagedata, filename);
                }
            });

        } else {
            return finish(websiteresult);
        }
    };
    return retrieve();
};





arrayOfUrls = null;

if (system.args.length > 1) {
//    arrayOfUrls = Array.prototype.slice.call(system.args, 1);
} else {
    console.log("Usage: phantomjs render_multi_url.js [domain.name1, domain.name2, ...]");
    arrayOfUrls = ["www.google.com", "www.bbc.co.uk", "www.phantomjs.org"];
}

RenderUrlsToFile(website, (function(status, pagedata, filename) {
    if (status !== "success") {
        return console.log("Unable to render '" + pagedata.url + "'");
    } else {
        return console.log("Finished Rendering '" + pagedata.url + "' at '" + filename + "'");
    }
}), function(result) {
    console.log("Final Result: " + result.length);
    phantom.exit()
    return ;
});
