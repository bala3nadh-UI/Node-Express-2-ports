var url = require('url');
var fs = require('fs');
var http = require('http');

module.exports = {
	handleRequest: function (request, response) {
		response.writeHead(200, {'Content-Type': 'text/html'});

		var path = url.parse(request.url).pathname;
		var pdfData = request;
		
		switch (path) {
			//Web Routes
			case '/web/index':
				renderHTML('./views2/index.html', response);
				break;

			default:
				//renderHTML('./views/index.html', response);
				response.writeHead(404);
				response.write('Route not found..!');
				response.end();
				break;
		}
	}
}

function renderHTML(path, response) {
	fs.readFile(path, null, function(error, data) {
		if (error) {
			response.writeHead(404);
			response.write('File not found..!');
		} else {
			response.write(data);
		}
		response.end();
	});
}
