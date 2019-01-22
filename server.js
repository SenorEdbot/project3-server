const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3001
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/midWaste";
const server = express()
const routes = require('./routes')
const cors = reauire('cors')

// Middleware
server.use(express.urlencoded({ extended: false }))
server.use(express.json())
server.use(express.static('client/dist'))

// Set up a CORS whitelist...
const whitelist = ['https://midwaste.herokuapp.com', 'http://localhost:3000']
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback (new Error('Not allowed by CORS'))
    }
  }
}
// ...and check against it.
server.use(cors(corsOptions))

// Routes
server.use(routes)
server.get('*', (req, res) => {
  res.redirect('/')
})

// Mongoose Connection
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// Starting the server
server.listen(PORT, () => {
  console.log(`👌 Listening on port ${PORT} 👌`)
})

module.exports = server
