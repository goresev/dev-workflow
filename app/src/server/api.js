const http = require('http')
const fs = require('fs')

const port = 8080;

const listener = function (req, res) {
    res.writeHead(200, { 'content-type': 'text/html' });
    fs.createReadStream('app/src/index.html').pipe(res)
}

const server = http.createServer(listener)
server.listen(port)
