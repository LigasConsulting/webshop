var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')
var prerenderNode = require('prerender-node')

var app = express()
const port = 5000;

app.use(prerenderNode
    .set('prerenderToken', 'WRXhbE5LQL0DZEsbeNS2')
    // .set('prerenderServiceUrl', 'http://localhost:3000/')
);
app.use(serveStatic(path.join(__dirname, 'build')));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
