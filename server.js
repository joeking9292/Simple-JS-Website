/*
 * Write your server code in this file.  Don't forget to add your name and
 * @oregonstate.edu email address below.
 *
 * name: Joseph Noonan
 * email: noonanj@oregonstate.edu
 */

 var http = require('http');
 var fs = require('fs');
 var PORT = process.env.PORT || 3000;

 var server = http.createServer(function (req, res) {
    res.statusCode = 200;
    switch(req.url){
        case "/style.css":
            res.end(fs.readFileSync("public/style.css"));
            console.log("== loaded style.css");
            break;
        case "/index.html":
            res.end(fs.readFileSync("public/index.htlm"));
            console.log("== loaded index.html");
            break;
        case "/":
            res.end(fs.readFileSync("public/index.html"));
            console.log("== loaded index.html");
            break;
        case "/index.js":
            res.end(fs.readFileSync("public/index.js"));
            console.log("== loaded index.js");
            break;
        case "/benny.jpg":
            res.end(fs.readFileSync("public/benny.jpg"));
            console.log("== loaded benny.jpg");
            break;
        default:
            res.end(fs.readFileSync("public/404.html"));
            res.statusCode = 404;
            console.log("== loaded 404.html");
            break;
    }
 });

 server.listen(PORT, function (err) {
     if (err) {
         throw err;
     }
     console.log("== Server listening on port 3000");
 });