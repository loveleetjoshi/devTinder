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

// Get user by email
app.get("/users", async (req, res) => {
    console.log(req.query)
    const email = req.query.email

    try {
        const users = await User.find({ email })

        if (!users.length) {
            res.status(404).send("User not found");
            return;
        }

        res.send(users)
    } catch (error) {
        res.status(400).send("Something went wrong" + error)
    }
})

// Feed API - get all users from DB
app.get('/feed', async (req, res) => {
    try {
        const users = await User.find()

        res.send(users)
    } catch (error) {
        res.status(400).send("Something went wrong" + error)
    }
})

app.delete('/users/:id', async (req, res) => {
    const userId = req.params.id

    try {
        const user = await User.findByIdAndDelete(userId)
        console.log(user)

        res.send("User deleted successfully")
    } catch (error) {
        res.status(400).send("Something went wrong" + error)
    }
})

app.patch('/users/:id', async (req, res) => {
    const userId = req.params.id;
    const userData = req.body;

    try {
        const user = await User.findByIdAndUpdate(userId, userData, { returnDocument: 'before' })
        console.log(user)
        res.send("User data successfully updated")
    } catch (error) {
        res.status(400).send("Something went wrong" + error)
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