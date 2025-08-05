const express = require('express')
const router = express.Router()
const YoutubeController = require('../controller/youtube-controller')
const { validatParamsMiddleware, validateBodyMiddleware } = require('../middleware/zod-validation')


router.post('/info', validateBodyMiddleware, YoutubeController.getInformation)
router.get('/download', validatParamsMiddleware, YoutubeController.download)

module.exports = router