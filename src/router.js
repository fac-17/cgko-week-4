const router = (resquest, response) => {
  const endpoint = request.url;

  // console.log('this is your url: ', endpoint);
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/html");
  response.end("<h1>Hello World</h1>");
};

// if (endpoint === '/') {

// } else if (endpoint)

module.exports = router;
