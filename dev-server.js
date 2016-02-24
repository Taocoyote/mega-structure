var express = require('express'),
	app = express(),
	serveIndex = require('serve-index');

app.use(express.static(__dirname));
app.use(serveIndex(__dirname,{icons:true, view:'details'}));

app.listen(5050);