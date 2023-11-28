const express = require('express')
const {isAuthenticatedUser} = require('../middleware/auth')
const {uploadImage} = require('../middleware/uploadFile');
const {createLogo, getLogo, updateLogo} =  require ('../controllers/LogoController')


const router = express.Router();


router.route("/uploadAvatar").post(isAuthenticatedUser, uploadImage.single('avatar'), createLogo)

router.route('/updateAvatar').put(isAuthenticatedUser, uploadImage.single('avatar'), updateLogo)

router.route('/getAvatar').get(isAuthenticatedUser, getLogo)

module.exports = router