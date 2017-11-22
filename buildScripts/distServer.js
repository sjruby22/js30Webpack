import express from "express"
import path from "path"
import open from "open"
import compression from 'compression'

const port = 8080
const app = express()

app.use(compression())
app.use(express.static('dist'))

app.get('/', function(request, result) {
    result.sendFile(path.join(__dirname, '../dist/index.html'))
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