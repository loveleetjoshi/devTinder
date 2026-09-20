const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect(
        'mongodb+srv://loveleetjoshiramjas_db_user:J6UjmqyJ4UQ1JprR@namastenode.cvgakrt.mongodb.net/devTinder'
    )
}

module.exports = connectDB