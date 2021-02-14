var http = require("http");

function startServer() {
  var server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Hello");
    res.end();
  });

  server.listen(8888, () => {
    console.log("Server started at 8888");
  });
}

module.exports = startServer;
