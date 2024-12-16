const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { newsController } = require('../controllers');

// middleware that is specific to this router

router.get('/:limit',  newsController.getLatestNews);
router.get('/', newsController.getNews);
router.get('/details/:id', newsController.getNewsDetails);
router.post('/', auth(), newsController.createNewsRecord);
router.put('/:newsId', auth(), newsController.updateNewsRecord);
router.delete('/:newsId', auth(), newsController.deleteRecord);

module.exports = router