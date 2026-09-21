const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        minLength: 4,
        maxLength: 50
    },
    lastName: {
        type: String,
        trim: true,
        minLength: 4,
        maxLength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error('Invalid email address:' + value)
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if (!validator.isStrongPassword(value)) {
                throw new Error("Please enter a strong password")
            }
        },
    },
    age: {
        type: Number,
        min: 18
    },
    gender: {
        type: String,
        validate(value) {
            if (!["male", "female", "others"].includes(value.toLowerCase())) {
                throw new Error("Gender data is not valid")
            }
        },
    },
    photoUrl: {
        type: String,
        default: 'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png',
        validate(value) {
            if (!validator.isURL(value)) {
                throw new Error("Invalid photo url")
            }
        },
    },
    about: {
        type: String,
        default: "This is a default about of the user",
        trim: true,
    },
    skills: {
        type: [String]
    }
}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema);

module.exports = User;