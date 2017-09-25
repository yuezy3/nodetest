const http = require('http');
const cycle = require('./cycle.js');
const express = require('express');
const mk = require("./mkdown.js")
const hostname = '127.0.0.1';
const port = 3000;


app = express();
// =============================================================
let handleFunc = (req, res) => {
    res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    // let reqJOSN = {};
    // Object.keys(req).map((reqkey)=>{reqJOSN[reqkey]=req[reqkey];});
    // res.write(JSON.stringify(cycle.decycle(req)));
    res.write(mk.markd)
    res.write('Hello World\n');
  }

// ==============================================================
app.use(function(req,res,next){
  handleFunc(req,res);
  next();
})
app.use(function(req,res,next){res.end();})
const server = http.createServer(app);


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
