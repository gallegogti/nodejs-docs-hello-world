const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World 2!");
});

const port = process.env.PORT || 1337;
server.listen(port);
const demo = "eduar"
console.log("Server running at http://localhost:%d", port);
