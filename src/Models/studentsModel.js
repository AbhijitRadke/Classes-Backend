const mongoose = require("mongoose")
const objectId = mongoose.Schema.Types.ObjectId

const studentSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            trem: true
        },
        lastName: {
            type: String,
            required: true,
            trim: true
        },
        gender: {
            type: String,
            required: true,
            enum: ["M", "F"],
            trim: true

        },
        age: {
            type: Number,
            required: true
        },
        standerd: {
            type: Number,
            required: true
        },
        address:{
            type: String,
            required: true,
            trim: true
        },
        pinCode:{
            type: Number,
            required: true
        },
        mobile: {
            type: Number,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true
        },
        password: {
            type: String,
            required: true,
            trim: true
        },
        isDeleted:{
            type:Boolean,
            default:false
        },
        deletedAt:{
            type:Date
        },

        
    }, { timestamps: true })

    module.exports = mongoose.model("Students", studentSchema)