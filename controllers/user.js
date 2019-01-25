const db = require('../models')

module.exports = {
  async findAll (req, res) {
    try {
      const allUsers = await db.User.find({})
      res.json(allUsers)      
    } catch (err) {
      res.json(err)
    }
  },
  async findByUsername (req, res) {
    try {
      const dbUser = await db.User.findOne({ name: req.params.username })
      res.json(dbUser)      
    } catch (err) {
      res.json(err)
    }
  },
  async findByUsernameAndUpdate (req, res) {
    try {
      const condition = { name: req.params.username }
      const dbUser = await db.User.findOneAndUpdate(condition, req.body, { upsert: true })
      res.json(dbUser)
    } catch (err) {
      try {
        const newDbUser = await db.User.create({ name: req.params.username })
        res.json(newDbUser)        
      } catch (error) {
        res.json(error)        
      }
    }
  }
}
