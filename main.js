const express = require('express')
var cors = require('cors')

const app = express()
app.use(cors())
const port = 3001

app.use(express.static('public'))

app.get('/user', (req, res, next) => {
  res.json({ avatar: `${req.protocol}://${req.get('host')}/avatar.jpeg` })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
