const router = require('express').Router();
const aircraft = require('./aircraft');
const flights = require('./flight');
const shipments = require('./shipment');
const airport = require('./airport');
const users = require('./users');
const themes = require('./themes');
const posts = require('./posts');
const likes = require('./likes');
const test = require('./test');
const { authController } = require('../controllers');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);

router.use('/aircraft', aircraft);
router.use('/airports', airport);
router.use('/flights', flights);
router.use('/shipments', shipments);
router.use('/users', users);
router.use('/themes', themes);
router.use('/posts', posts);
router.use('/likes', likes);
router.use('/test', test);

module.exports = router;
