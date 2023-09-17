const express = require("express")

const {home , creatUser} = require("../controllers/userController.js")

const  router = express.Router()

router.get("/" , home)
router.post('/createUser' ,creatUser)
module.exports = router