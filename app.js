var express = require("express");
var proxy = require("http-proxy-middleware");
var https = require('https');
var fs = require('fs');
const httpsOptions = {
  key: fs.readFileSync('/Users/hanlong/.mitmproxy/mitmproxy-ca.pem'),
  cert: fs.readFileSync('/Users/hanlong/.mitmproxy/mitmproxy-ca-cert.pem')
}

var app = express();
var proxyServer = proxy({
  target: "https://qe-pg.moe.edu.sg/"
});
const maintenanceHandler = (req, res, next) => {
  res.status(503).json({
    resultCode: -5031,
    error: {
      errorReason: "Under Maintenance",
      customMessage: "hjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yvvvvhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank yhjhjjhjhj. Thank y"
    }
  });
};
app.use((req, res, next) => {
  console.log(req.originalUrl);
  next();
});

// app.use((err, req, res, next) => {
//   console.log("res", req.originalUrl);
//   next();
// });

//app.use("/api/mobile/1/parents/devices", maintenanceHandler);
// app.use("/api/1/debug/version", (req, res, next) => {
//   res.sendStatus(204);
// });

app.use("/*", proxyServer);
// app.use("/*", maintenanceHandler);
var httpsServer = https.createServer(httpsOptions, app);

app.listen(80);
httpsServer.listen(443);

