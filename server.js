const http= require("http");
const fs= require("fs");


const server=http.createServer(function(req,res){

    fs.readFile("index.html",function(err,data){

    res.writeHead(200,{"content-type":"text/html"});
    res.write(data);
    res.end();

});
});

server.listen("3000");
console.log("server running:3000");


