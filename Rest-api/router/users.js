const express = require('express');
const router = express.Router();
const { authController } = require('../controllers');
const { auth } = require('../utils');

router.get('/profile', auth(),authController.getProfileInfo);
router.get('/profiles', auth(),authController.getAllProfiles);
router.put('/profile', auth(),authController.editProfileInfo);
router.put('/profile/create-admin/:userId', auth(), authController.makeUserAdmin);
router.put('/profile/remove-admin/:userId', auth(), authController.removeAdminPrivilege);

module.exports = router