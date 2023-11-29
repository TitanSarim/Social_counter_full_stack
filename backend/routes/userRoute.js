const express = require('express')
const {isAuthenticatedUser} = require('../middleware/auth')
const {resgisterUser, loginUser, updateUser, logout} = require('../controllers/userController')


const router = express.Router();


router.route("/register").post(resgisterUser, isAuthenticatedUser)

router.route('/loggedIn').post(loginUser, isAuthenticatedUser)

router.route("/usernameupdate").put(isAuthenticatedUser, updateUser)

router.route('/logout').get(logout)

module.exports = router