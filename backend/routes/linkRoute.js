const express = require("express");
const {isAuthenticatedUser} = require('../middleware/auth')

const { createUrl, UpdateUrl, getAllUrl} = require('../controllers/linksController')

const router = express.Router();


router.route("/addurl").post(isAuthenticatedUser, createUrl);

router.route('/updateUrl').put(isAuthenticatedUser, UpdateUrl);

router.route('/getUrls').get(isAuthenticatedUser, getAllUrl)



module.exports = router