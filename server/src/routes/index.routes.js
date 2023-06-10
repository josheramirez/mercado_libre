
const express = require('express')
const router = express.Router()
const controller = require('../controllers/index.controller')
const middleware = require('../middlewares/index.middleware')



router.get("/items", middleware.author, controller.index);
router.get("/items/:id", middleware.author, controller.item);

module.exports = router