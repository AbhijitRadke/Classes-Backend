const express = require('express')
const bodyparser = require('body-parser')
const route = require("./routes/route")
const mongoose = require('mongoose');
const app = express()

app.use(bodyparser.json());


mongoose.connect("mongodb+srv://AbhijitRadke:7768916626@cluster0.v76zsxi.mongodb.net/classes", {
    useNewUrlParser: true
})
    .then(() => console.log("Mongoose is connected"))
    .catch(err => console.log(err));


app.use("/", route)

app.listen(3000, () => console.log("express is runing on port 3000"))


