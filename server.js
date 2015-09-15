var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request,response)
{
	console.log("Request URL: " , request.url);
	var fileUrl = "";
	if(request.url === "/cars/new")
	{
		fileUrl = "./views/car_form.html";
	}
	else if(request.url === "/cars")
	{
		fileUrl = "./views/cars.html";
	}
	else if(request.url === "/cats")
	{
		fileUrl = "./views/cats.html";
	}
	else if(request.url === "/form")
	{
		fileUrl = "./views/car_form.html";
	}

	var imgUrl = "";
	if(request.url === "/images/car")
	{
		imgUrl = "./images/car.png";
	}
	else if (request.url === "/images/car1")
	{
		imgUrl = "./images/car1.jpg";
	}
	else if (request.url === "/images/cat")
	{
		imgUrl = "./images/cat.jpeg";
	}
	else if (request.url === "/images/cat1")
	{
		imgUrl = "./images/cat1.jpg";
	}

	if(fileUrl)
	{
		fs.readFile(fileUrl, 'utf8', function(errors, contents)
		{
			response.writeHead(200, {'Content-type' : 'text/html'});
			response.write(contents);
			response.end();
		});
	}
	else if(imgUrl)
	{
		fs.readFile(imgUrl, function(errors, contents)
		{
			response.writeHead(200, {'Content-type' : 'image/jpg'});
			response.write(contents);
			response.end();
		});
	}
	else if(request.url === "/css")
	{
		fs.readFile("./stylesheets/style.css", "utf8", function(errors, contents)
		{
			response.writeHead(200, {'Content-type' : 'text/css'});
			response.write(contents);
			response.end();
		});
	}
	else
	{
		response.writeHead(404);
		response.end("Page not found");
	}
});
server.listen(7077);
console.log("Running server in local host at port 7077");
