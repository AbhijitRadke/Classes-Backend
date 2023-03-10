const express = require('express')
const router = express.Router()
const studentController = require("../Controllers/studentControler")


router.get('/gettext', function (req,res){
    res.send("hi Abhijit")
})

router.post("/register",studentController.registorStduents)


module.exports = router