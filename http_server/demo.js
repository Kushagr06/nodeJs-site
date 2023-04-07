const http=require('http');
const path=require('path');
const fs=require('fs');

const server=http.createServer((req,res)=>{
  if(req.url==='/'){
    fs.readFile(path.join(__dirname,'index.html'),(err,content)=>{
      if (err){
        res.writeHead(404,{'Content-Type':'text/html'});
      res.end('<h1>Page Not Found</h1>');
      }
      res.writeHead(200,{'Content-Type':'text/html'});
      res.end(content);
    });  
  }

  if(req.url==='/api/users'){
    const users=[
      {name:'bob Smith', age:40},
      {name:'John',age:34}
    ];
    res.writeHead(200,{'Content-Type':'application/json'});
    res.end(JSON.stringify(users))
  }


});

const PORT=process.env.port || 5000;

server.listen(PORT, ()=>console.log(`Runnin on ${PORT}`))