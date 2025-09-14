const express = require('express');
const busController = require('../controllers/busControllers');
const router = express.Router();

router.post('/', busController.addBus);
router.get('/available/:seats', busController.getAvailableBuses);

module.exports = router;
