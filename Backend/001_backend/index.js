require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
// ()=>{}       // it is a callback.

app.get('/twitter', (req, res) => {
  res.send('twitter username.')
})

app.get('/login', (req, res) => {
  res.send('<h1>Please Log in</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
