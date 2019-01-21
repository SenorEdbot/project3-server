const router = require('express').Router()
const userController = require('../../controllers/user')

router.get('/', userController.findAll)
router.get('/:username', userController.findByUsername)
router.post('/:username', userController.findByUsernameAndUpdate)

module.exports = router
