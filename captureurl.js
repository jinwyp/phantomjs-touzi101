// Render Multiple URLs to file

var  website = [
    {"pagename":"Homepage", "url":"http://www.touzi101.cn/", "title":"", "keyword":"", "description":"", "status":"", "filename":""},
    {"pagename":"ChannelPage-dictionary", "url":"http://www.touzi101.cn/dictionary/", "title":"", "keyword":"", "description":"", "status":"", "filename":""}
    ];

var RenderUrlsToFile,  system;
system = require("system");



/*
Render given urls
@param array of URLs to render
@param callbackPerUrl Function called after finishing each URL, including the last URL
@param callbackFinal Function called after finishing everything
*/
RenderUrlsToFile = function(websitedata, callbackPerUrl, callbackFinal) {
    var  next, finish, page, retrieve, urlIndex, webpage, websiteresult;
    websiteresult = [];
    urlIndex = 0;
    webpage = require("webpage");
    page = null;

    next = function(status, pagedata) {
        page.close();
        callbackPerUrl(status, pagedata);
        return retrieve();
    };

    finish = function(result) {
        return callbackFinal(result);
    };

    retrieve = function() {
        var pagedata ;
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
                var datenow = new Date();
                var starttime = datenow.getFullYear()+"-"+datenow.getMonth()+1+"-"+datenow.getDate()+"-"+datenow.getHours()+":"+datenow.getMinutes()+":"+datenow.getSeconds() ;

                pagedata.filename = pagedata.pagename + "-num" + urlIndex + ".png";
                pagedata.status = status;
                console.log("Start to capture page: " + pagedata.url + ". save in:" + pagedata.filename + ". starttime:" + starttime);

                if (status === "success") {
                    pagedata = page.evaluate(function(pagedata1) {
                        pagedata1.title = document.titlel;
                        pagedata1.title = document.querySelector("title").innerText;
                        pagedata1.keyword = document.querySelector("meta[name=Keywords]").getAttribute("content");
                        pagedata1.description = document.querySelector("meta[name=Description]").getAttribute("content");
                        return pagedata1;
                    }, pagedata);
                    websiteresult.push(pagedata);

                    window.setTimeout((function() {
                        page.render( pagedata.filename);

                        var datenow = new Date();
                        var endtime = datenow.getFullYear()+"-"+datenow.getMonth()+1+"-"+datenow.getDate()+"-"+datenow.getHours()+":"+datenow.getMinutes()+":"+datenow.getSeconds() ;

                        console.log("Finish capture time: " + endtime);
                        return next(status, pagedata);
                    }), 200);

                } else {
                    websiteresult.push(pagedata);
                    return next(status, pagedata);
                }
            });

        } else {
            return finish(websiteresult);
        }
    };
    return retrieve();
};




if (system.args.length > 1) {
//    arrayOfUrls = Array.prototype.slice.call(system.args, 1);
} else {
    console.log("Usage: phantomjs --config=config.json captureurl.js ");

}

RenderUrlsToFile(website, (function(status, pagedata) {
    if (status !== "success") {
        return console.log("Unable to render '" + pagedata.url + "'");
    } else {
        return console.log("Finished Rendering '" + pagedata.url + "' at ' Title:" + pagedata.filename + "'" + pagedata.title);
    }
}), function(result) {
    console.log("Final Result: " + result.length);
    phantom.exit()

});
