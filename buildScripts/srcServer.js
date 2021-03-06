import express from "express"
import path from "path"
import open from "open"
import webpack from 'webpack'
import config from '../webpack.config.dev'

const port = 8080
const app = express()
const compiler = webpack(config)

app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}))

app.get('/', function(request, result) {
    result.sendFile(path.join(__dirname, '../src/index.html'))
})  

app.get('/users', function(request, result) {
    result.json([
  {
    "id": 41343615,
    "firstName": "Orlando",
    "lastName": "Bergstrom",
    "email": "Sylvia.Wiegand@gmail.com"
  },
  {
    "id": 42036944,
    "firstName": "Norris",
    "lastName": "Barrows",
    "email": "Cody51@yahoo.com"
  },
  {
    "id": 63067022,
    "firstName": "Sigmund",
    "lastName": "Blanda",
    "email": "Rashawn15@yahoo.com"
  }
])
    
})

app.listen(port, function(err) {
    if (err) {
        console.log(err) // eslint-disable-line no-console
    } else {
        open('http://createstuff-sjruby.c9users.io/')
    }
})