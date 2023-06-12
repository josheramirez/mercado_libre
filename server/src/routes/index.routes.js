
const express = require('express')
const router = express.Router()
const controller = require('../controllers/index.controller')
const middleware = require('../middlewares/index.middleware')



router.get("/api/items", middleware.author, controller.items);
router.get("/api/items/:id", middleware.author, controller.detail);
// router.get("/test", middleware.author, controller.test);

module.exports = router