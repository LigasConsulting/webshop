var express = require('express');
var prerenderNode = require('prerender-node');
const handler = require('serve-handler');

var app = express();
const port = 5000;

app.use(prerenderNode
        .set('prerenderToken', 'WRXhbE5LQL0DZEsbeNS2')
    // .set('prerenderServiceUrl', 'http://localhost:3000/')
);
app.use((req, res, next) => {
    return handler(req, res, {
        "public": "build",
        "rewrites": [{
            source: '**',
            destination: '/index.html'
        }]
    });
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});
