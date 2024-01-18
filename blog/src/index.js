const path =require('path')
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
const { engine } = require('express-handlebars')

const SortMiddleware = require('./app/middlewares/sortMiddleware')

const route = require('./routes')
const db = require('./config/db')

// Connect to DB
db.connect()

const app = express()
const port = 3000



app.use(express.static(path.join(__dirname, 'public')))

// HTTP logger
app.use(morgan('combined'))

app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

app.use(methodOverride('_method'))

// Custom middleware

app.use(SortMiddleware)

// Template engine
app.engine('hbs', engine({
  extname: '.hbs',
  helpers: require('./helpers/handlebars')
}))

app.set("view engine", 'hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))

// Routes init
route(app)




app.listen(port, () => console.log(`App listening at http://localhost:${port}`))
