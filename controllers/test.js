const db = require('../models')

// TEMP DEV REFERENCE
let testObj = {
  name: "eddieTester",
  maxTimeSurvived: 7,
  maxDifficulty: 8,
  maxEnemiesKilled: 14,
  maxShotsFired: 700,
  maxAccuracy: 75,
  recentTimeSurvived: 6,
  recentDifficulty: 4,
  recentEnemiesKilled: 2,
  recentShotsFired: 700,
  recentAccuracy: 75,
  historyTimeSurvived: [4, 2, 6, 7, 3],
  historyDifficulty: [1,2, 4, 5, 6],
  historyEnemiesKilled: [6, 5, 13, 6, 8],
  historyShotsFired: [33, 16, 44, 200, 455],
  historyAccuracy: [45, 21, 85, 45, 67],
  friends: ['_10389382','_1038342', '_1068453', '_1098275', '_1065412'],
}

module.exports = {
  async test (req, res) {
    try {
      const dbUser = await db.User.create(testObj)
      res.json(dbUser)      
    } catch (err) {
      res.json(err)
    }
  }
}
