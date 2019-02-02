const db = require('../models')

// TEMP DEV REFERENCE
let testObj = {
  name: "eddief",
  maxTimeSurvived: 155,
  maxDifficulty: 8,
  maxEnemiesKilled: 400,
  maxShotsFired: 550,
  maxAccuracy: 72,
  recentTimeSurvived: 75,
  recentDifficulty: 6,
  recentEnemiesKilled: 333,
  recentShotsFired: 610,
  recentAccuracy: 55,
  historyTimeSurvived: [60, 72, 140, 126, 35, 111, 155, 75],
  historyDifficulty: [2, 3, 4, 4, 6, 7, 8, 6],
  historyEnemiesKilled: [127, 68, 88, 242, 301, 278, 400, 333],
  historyShotsFired: [235, 100, 140, 315, 350, 550, 610],
  historyAccuracy: [54, 68, 63, 77, 86, 51, 72, 55]
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
