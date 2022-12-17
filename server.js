const express = require('express')
const compression = require('compression')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const enforceHttps = require('express-sslify').HTTPS
const app = express()

app.use((_, res, next) => {
  res.cookie(
    'STUDNINGSBANKINN_API',
    process.env.STUDNINGSBANKINN_API_KEY,
    {
      domain: '.studningsbankinn.is',
      secure: isProduction,
      maxAge: 2147483647000,
      httpOnly: true,
      sameSite: true,
      path: '/'
    }
  )

  return next()
})

app.use(helmet({
  contentSecurityPolicy: false
}))

if (process.env.NODE_ENV === 'production') {
  app.use(enforceHttps({
    trustProtoHeader: true
  }))
  app.use(compression())  
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }))

app.use(express.static('dist', {
  maxAge: '1y'
}))

const port = process.env.PORT || 3010
app.listen(port)
