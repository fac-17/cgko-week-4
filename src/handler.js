const fs = require("fs");
const querystring = require("querystring");
const path = require("path");

function handleHome(request, response, endpoint) {
  const filePath = path.join(__dirname, "..", "public/index.html");
  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(error);
      response.writeHead(500, { "content-type": "text/html" });
      response.end("<h1>Sorry! We had a problem on our end</h1>");
    } else {
      response.writeHead(200, { "content-type": "text/html" });
      response.end(file);
    }
  });
}

function handlePublic(request, response, endpoint) {
  const extension = endpoint.split(".")[1];
  console.log("this is for the extentsion", extension);
  const extensionType = {
    css: "text/css",
    js: "text/js",
    ico: "image/x-icon"
  };
  const filePath = path.join(__dirname, "..", "public", endpoint);
  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(error);
    } else {
      response.writeHead(200, { "content-type": extensionType[extension] });
      response.end(file);
    }
  });
}

module.exports = { handleHome, handlePublic };
