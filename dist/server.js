require('newrelic')
var history = require('connect-history-api-fallback')
var express = require('express')
var serveStatic = require('serve-static')
app = express()

app.get('/sitemap.xml', function(req, res) {
	res.sendFile(__dirname + '/sitemap.xml')
})

app.get('/robots.txt', function(req, res) {
	res.sendFile(__dirname + '/robots.txt')
})

app.use(history())
app.use(serveStatic(__dirname))
var port = process.env.PORT || 5000


app.listen(port)
console.log('server started '+ port)