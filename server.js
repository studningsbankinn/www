const express = require('express')
const compression = require('compression')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const enforceHttps = require('express-sslify').HTTPS
const app = express()

if (process.env.NODE_ENV === 'production') {
  app.use(enforceHttps({
    trustProtoHeader: true
  }))
  app.use(compression())
  app.use(helmet({
    contentSecurityPolicy: false
  }))
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }))

app.use(express.static('dist', {
  maxAge: '1y'
}))

const port = process.env.PORT || 3010
app.listen(port)
