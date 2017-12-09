import express from "express"
import path from "path"
import open from "open"
import webpack from 'webpack'
import config from '../webpack.config.dev'
import { mockData } from './mockApi/mockData'

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

app.get('/sounds', function(request, result) {
    result.json(mockData)
})

app.listen(port, function(err) {
    if (err) {
        console.log(err) // eslint-disable-line no-console
    } else {
        open('http://createstuff-sjruby.c9users.io/')
    }
})