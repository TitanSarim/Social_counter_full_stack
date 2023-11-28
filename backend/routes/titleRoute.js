const express = require('express')
const {isAuthenticatedUser} = require('../middleware/auth')
const { createTitle, updateTitle, getTitle} = require('../controllers/titleController')


const router = express.Router();


router.route("/createTitle").post(isAuthenticatedUser, createTitle)

router.route('/updateTitle').put(isAuthenticatedUser, updateTitle)

router.route('/getTitle').get(isAuthenticatedUser, getTitle)

module.exports = router