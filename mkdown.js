var fs = require('fs');
var MarkDownIt = require('markdown-it');
var mk = require('markdown-it-katex');
var md = new MarkDownIt();
md.use(mk);
var str = fs.readFileSync('test.md','utf-8');
console.log(str);
var result = md.render(str);


fs.writeFileSync('data.html',result);
