const express = require('express')
const app = express()
require('express-async-errors')
const path = require('path')
const config = require('config')
const logicOGP = require('./logic/ogp')
const {LogicalError, NotFoundError} = require('./libs/error')
const setCron = require('./cron')
let manifest = {}

app.use(express.json({extended: true, limit: '5mb'}))
app.use(express.urlencoded({extended: true, limit: '5mb'}))
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')
app.disable('x-powered-by')

if (process.env.NODE_ENV !== 'production' && config.enableViteServer) {
  // viteに転送する
  const proxy = require('express-http-proxy')
  app.get('/src/*', proxy('localhost:3001/src'))
  app.get('/node_modules/*', proxy('localhost:3001/node_modules'))
} else if (process.env.NODE_ENV !== 'production' && !config.enableViteServer) {
  // vite build modeを利用する code-server用
  app.use(express.static(path.join(__dirname, 'dev')))
  manifest = require('./dev/manifest.json')
} else {
  app.use(express.static(path.join(__dirname, 'dist')))
  manifest = require('./dist/manifest.json')
}

app.use('/api/auth', require('./api/auth'))
app.use('/api/groups', require('./api/group'))
app.use('/api/media', require('./api/media'))
app.use('/api/entries', require('./api/entry'))

app.get('*', async (req, res, next) => {
  const frontConfig = {
    enableViteServer: config.enableViteServer
  }

  const ogp = await logicOGP.get(req)
  res.render('index', {manifest, config: frontConfig, ogp})
})

// set cron
setCron()

// error handler
app.use((err, req, res, next) => {
  if (!err || err instanceof NotFoundError) return next()
  console.error(err)

  const errorJson = (() => {
    if (err.extendBaseError) {
      return err.toJSON()
    } else {
      return (new LogicalError('エラーが発生しました。しばらくしてから再度実行してみてください。')).toJSON()
    }
  })()
  res.status(500)
  res.format({
    json: (req, res) => res.json(errorJson),
    html: (req, res) => res.redirect('/error')
  })
})

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const notFoundError = new NotFoundError()
  res.status(404)
  res.format({
    json: (req, res) => res.json(notFoundError.toJSON()),
    html: (req, res) => res.redirect('/not_found')
  })
})

// https://fsymbols.com/generators/carty/
console.log(`
░█████╗░██╗░░██╗██╗██████╗░██████╗░███████╗██████╗░░██████╗
██╔══██╗██║░░██║██║██╔══██╗██╔══██╗██╔════╝██╔══██╗██╔════╝
██║░░╚═╝███████║██║██████╔╝██████╔╝█████╗░░██████╔╝╚█████╗░
██║░░██╗██╔══██║██║██╔══██╗██╔═══╝░██╔══╝░░██╔══██╗░╚═══██╗
╚█████╔╝██║░░██║██║██║░░██║██║░░░░░███████╗██║░░██║██████╔╝
░╚════╝░╚═╝░░╚═╝╚═╝╚═╝░░╚═╝╚═╝░░░░░╚══════╝╚═╝░░╚═╝╚═════╝░`)

console.log('deliver chirps to only your best friends!')
console.log('PORT:3000')
app.listen(3000)