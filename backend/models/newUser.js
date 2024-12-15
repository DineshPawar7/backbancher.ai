const mongoose = require('mongoose')

const newUserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const newUserModel = mongoose.model("newUser", newUserSchema)
module.exports = newUserModel