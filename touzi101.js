// Render Multiple URLs to file
var website = {
    "web1":[
    {"url":"www.google.com", "title":"", "status":""},
    {"url":"www.bbc.co.uk", "title":"", "status":""}
    ]
};

/*console.log(website.web1[0].url);
console.log(website.web1[1].url);
len = eval(website.web1);
console.log(len.length);*/

//==============================================
var RenderUrlsToFile, arrayOfUrls, system;

system = require("system");

/*
Render given urls
@param array of URLs to render
@param callbackPerUrl Function called after finishing each URL, including the last URL
@param callbackFinal Function called after finishing everything
*/
RenderUrlsToFile = function(urls, callbackPerUrl, callbackFinal) {
    var getFilename, next, page, retrieve, urlIndex, webpage;
    urlIndex = 0;
    webpage = require("webpage");
    page = null;
    getFilename = function() {
        return "rendermulti-" + urlIndex + ".png";
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
            return page.open("http://" + url, function(status) {
                var file;
                file = getFilename();
                if (status === "success") {
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
arrayOfUrls = null;

if (system.args.length > 1) {
    arrayOfUrls = Array.prototype.slice.call(system.args, 1);
} else {
    console.log("Usage: phantomjs render_multi_url.js [domain.name1, domain.name2, ...]");
    arrayOfUrls = ["www.google.com", "www.bbc.co.uk", "www.phantomjs.org"];
    var len = eval(website.web1);
    console.log(len.length);
     for(var i=0; i<len.length; i++){
        console.log(i);
        console.log(website.web1[i].url);
        //arrayOfUrls[i] = website.web1[i].url;
    }
}

RenderUrlsToFile(arrayOfUrls, (function(status, url, file) {
    if (status !== "success") {
        return console.log("Unable to render '" + url + "'");
    } else {
        return console.log("Rendered '" + url + "' at '" + file + "'");
    }
}), function() {
    return phantom.exit();
});

function touzi101_url(){
        var fs = require('fs'),system = require('system');
        var content = '', lines = null, f = null;
        var eol = system.os.name == 'windows'? "\r\n" : "\n";
        try{
             f = fs.open('C:/phantomjs-1.9.0-windows/test.txt', "r");
             content = f.read();
        }catch(e){
            console.log(e);    
        }
        lines = content.split();
        return lines; 
         
    /*    if(content){
            lines = content.split();
            for (var i = 0, len = lines.length, url = "", page = require('webpage').create(); i<len; i++){
                console.log(lines[i]);
            }
        }*/
    }