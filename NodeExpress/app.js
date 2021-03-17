const http = require('http');

const server = http.createServer((req, res) => {
    console.log("INCOMINIG REQ");
    console.log(req.method);

    res.end("succss");
})

server.listen(5000);