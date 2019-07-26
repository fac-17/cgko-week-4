const { handleHome, handlePublic, handleQuery } = require("../src/handler");

const router = (request, response) => {
  const endpoint = request.url;

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

module.exports = router;
