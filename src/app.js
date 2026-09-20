const express = require('express');
const connectDB = require('./config/database');
const User = require('./models/user')

const app = express();

app.use(express.json());

app.post('/signup', async (req, res) => {
    // Creating a new instance of User model
    const user = new User(req.body)

    try {
        await user.save();
        res.send('User added successfully')
        // throw new Error('errorrrrrr')
    } catch (error) {
        res.status(400).send("Error saving the user:" + error.message)
    }
})

connectDB().then(() => {
    console.log('Connected to DB successfully');

    app.listen(3000, () => {
        console.log('Server is listening on port 3000')
    });
}).catch((e) => {
    console.log(e)
})