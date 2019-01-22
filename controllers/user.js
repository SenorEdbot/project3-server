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
      // Find by this condition (player's username)
      const condition = { name: req.params.username }

      // Grab incoming stats to check whether to update or not
      const { maxTimeSurvived, maxDifficulty, maxEnemiesKilled, maxShotsFired, maxAccuracy} = req.body;

      // Set max stats, push to historical stats and set most recent stats
      const updatedStats = {
        $max: {
          maxTimeSurvived,
          maxDifficulty,
          maxEnemiesKilled,
          maxShotsFired,
          maxAccuracy
        },
        $push: {
          historyTimeSurvived: maxTimeSurvived,
          historyDifficulty: maxDifficulty,
          historyEnemiesKilled: maxEnemiesKilled,
          historyShotsFired: maxShotsFired,
          historyAccuracy: maxAccuracy
        },
        $set: {
          recentTimeSurvived: maxTimeSurvived,
          recentDifficulty: maxDifficulty,
          recentEnemiesKilled: maxEnemiesKilled,
          recentShotsFired: maxShotsFired,
          recentAccuracy: maxAccuracy
        }
      }

      const dbUser = await db.User.findOneAndUpdate(condition, updatedStats, { upsert: true })
      res.json(dbUser)
    } catch (err) {
      res.json(err)
    }
  }
}
