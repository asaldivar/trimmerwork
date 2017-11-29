// require('newrelic')
var history = require('connect-history-api-fallback')
var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')
var enforce = require('express-sslify')
app = express()

app.use(function (req, res, next) {
  if (!/https/.test(req.protocol)) {
		return res.redirect("https://" + req.headers.host + req.url)
  } else {
		return next()
  }
})

app.use(history())
// app.use(serveStatic(__dirname))
// app.use(enforce.HTTPS())
app.use(express.static(__dirname))
var port = process.env.PORT || 5000


app.listen(port)
console.log('server started '+ port)