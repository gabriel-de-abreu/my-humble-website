var express = require('express');
var app = express();

app.use(express.static('my-site'));

var port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log(`My Humble Website listening on port ${port}!`);
});
