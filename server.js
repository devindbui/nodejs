var http = require("http");
var server = http.createServer(function(request,response){
	response.writeHead(200, {"Content-Type": "text/html"});
	response.end("Hello Devin");
}).listen(8888);

//http://localhost:8888/