const express = require('express')
const {isAuthenticatedUser} = require('../middleware/auth')
const { createFollowUpTitle, updateFollowUpTitle, getFollowUpTitle} = require('../controllers/followUpTitleController')


const router = express.Router();


router.route("/createFollowUpTitle").post(isAuthenticatedUser, createFollowUpTitle)

router.route('/updateFollowUpTitle').put(isAuthenticatedUser, updateFollowUpTitle)

router.route('/getFollowUpTitle').get(isAuthenticatedUser, getFollowUpTitle)

module.exports = router