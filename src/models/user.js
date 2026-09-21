const mongoose = require('mongoose');

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
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
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
        trim: true,
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