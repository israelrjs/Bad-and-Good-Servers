var http = require("http");

var PORTNICE = 7000;

var PORTBAD = 7500;

function niceRequest(request, response) {
  response.end("You are awesome!!" + request.url);
}
function badRequest(request, response) {
  response.end("You Suck!!!" + request.url);
}

var badserver = http.createServer(niceRequest);
var goodserver = http.createServer(badRequest);

badserver.listen(PORTNICE, function() {
  console.log("Good Server link : http://localhost:" + PORTNICE);
});
goodserver.listen(PORTBAD, function() {
  console.log("Bad Server link http://localhost:" + PORTBAD);
});
