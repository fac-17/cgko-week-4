const { handleHome, handlePublic } = require("../src/handler");

const router = (request, response) => {
  const endpoint = request.url;
  console.log("This is", endpoint);

  if (endpoint === "/") {
    handleHome(request, response, endpoint);
  } else if (endpoint.indexOf("public") !== -1) {
    handlePublic(request, response, endpoint);
  } else {
    response.writeHead(404);
    response.end(
      `<h1 style="text-align:center"> 
      404: Sorry, this page doesn't exist. 
      </h1> <img style="display:block; margin: 0 auto;" 
      src="https://media.giphy.com/media/jUwpNzg9IcyrK/giphy.gif">`
    );
  }
};

module.exports = router;
