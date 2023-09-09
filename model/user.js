const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

    name: {
        type: String
    },
    email: {
        type: String
    },
    age: {
        type: String
    },
    education: {
        type: String
    },
    institute: {
        type: String
    },
    study: {
        type: String
    },
    work: {
        type: String
    },
    admit: {
        type: String
    },
    country: {
        type: String
    },
    goals: {
        type: String
    },
    listen: {
        type: String
    },
    reading: {
        type: String
    },
    speaking: {
        type: String
    },
    writing: {
        type: String
    },
    tution: {
        type: String
    },
    pay: {
        type: String
    },
    gic: {
        type: String
    },
    howpay: {
        type: String
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User
