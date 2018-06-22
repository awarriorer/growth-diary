var express = require('express');
var app     = express();

// 静态资源
app.use(express.static('dist'));

// start server
var server = app.listen(8009, function(){
	var host = server.address().address;
  	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
})