const express = require('express')
const router = express.Router()
const YoutubeController = require('../controller/youtube-controller')


router.post('/info',YoutubeController.getInformation)
router.post( '/download', YoutubeController.download)

module.exports = router