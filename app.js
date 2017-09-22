const http = require('http');
const cycle = require('./cycle.js')
const hostname = '127.0.0.1';
const port = 3000;



// =============================================================
let handleFunc = (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    let reqJOSN = {};
    Object.keys(req).map((reqkey)=>{reqJOSN[reqkey]=req[reqkey];});
    res.write(JSON.stringify(reqJOSN));
    res.end('Hello World\n');
  }

// ==============================================================
const server = http.createServer(handleFunc);


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
