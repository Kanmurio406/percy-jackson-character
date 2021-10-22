const express = require('express')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')
const charactersList = require('./characters.json')

// render engine setting
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// static file setting
app.use(express.static('public'))

// route setting - index
app.get('/', (req, res) => {
  res.render('index', { characters: charactersList.results})
})

// route setting - each character
app.get('/characters/:character_id', (req, res) => {
  const character = charactersList.results.find(character => character.id.toString() === req.params.character_id)
  res.render('show', { character: character})
})

// server listening
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})