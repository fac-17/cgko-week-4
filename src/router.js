const { handleHome, handlePublic, handleQuery } = require("../src/handler");

const router = (request, response) => {
  const endpoint = request.url;
  console.log("This is", endpoint);

  if (endpoint === "/") {
    handleHome(request, response, endpoint);
  } else if (endpoint.indexOf("public") !== -1) {
    handlePublic(request, response, endpoint);
  } else if (endpoint !== "/") {
    handleQuery (request, response, endpoint);
  }else {
    response.writeHead(404);
    response.end("404 - PAGE NOT FOUND");
  }
};

// response.statusCode = 200;
// response.setHeader("Content-Type", "text/html");
// response.end("<h1>Hello World</h1>");

//call handler(request, response, endpoint)

// if (endpoint === '/') {

// } else if (endpoint)

module.exports = router;
