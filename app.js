var http = require('http');
var dt=require('./module');
var url=require('url');
var fs=require('fs');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write("the date and time are:"+dt.myDateTime());
  res.write(req.url);
  res.end('Hello World!');
}).listen(8080);


http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type':'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(3000);


http.createServer(function (req, res) {
  fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8070);