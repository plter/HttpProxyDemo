var express = require('express');
var router = express.Router();
const http = require("http");

/* GET home page. */
router.get('/proxy', function (req, res, next) {

    console.log(req.query.url);

    http.get(req.query.url, function (r) {
        var buffer = new Buffer(0);
        r.on("data", function (data) {
            buffer = Buffer.concat([buffer, data]);
        });
        r.on("end", function () {
            res.send(buffer.toString());
        });
    }).on("error", function () {
        res.send("Can not load content");
    });

});

module.exports = router;
