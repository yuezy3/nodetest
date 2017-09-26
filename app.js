const http = require('http');
const fs   = require("fs");
const cycle = require('./cycle.js');
const express = require('express');
// const hljs = require("highlight.js");
const hostname = '127.0.0.1';
const port = 3000;


app = express();
// =============================================================
let handleFunc = (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    let MarkDownIt = require('markdown-it');
    let mk = require('markdown-it-katex');
    let md = new MarkDownIt({html:true});
    md.use(mk);
    fs.readFile('test.md','utf-8',function(err,data){
      if(err){console.log(err);res.end("end with error");}
      else {
        console.log("render file");
        let result = md.render(data);
        fs.writeFileSync('data.html',result);
        res.end(result);
      }
    });
    res.write("hello test res.end");
    next();
  };

// ==============================================================
// app.get("/mktest.html",function(req,res,next){
//   res.statusCode = 200;
//   res.setHeader("Content-Type","text/html");
//   fs.readFile("mktest.html",{encodeing:"utf-8"},function(err,data){
//     res.end(data);
//   });
// });
// app.get("/prism.js",function(req,res,next){
//   res.statusCode = 200;
//   res.setHeader("Content-Type","text/javascript");
//   fs.readFile("prism.js",{encodeing:"utf-8"},function(err,data){
//     res.end(data);
//   });
// });
// app.get("/prism.css",function(req,res,next){
//   res.statusCode = 200;
//   res.setHeader("Content-Type","text/css");
//   fs.readFile("prism.css",{encodeing:"utf-8"},function(err,data){
//     res.end(data);
//   });
// });
app.use(express.static('.'))
app.use(handleFunc);
const server = http.createServer(app);


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
