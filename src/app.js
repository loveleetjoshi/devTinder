const express = require('express');

const app = express();

app.get("/users", (req, res) => {
    console.log(req.query)
    res.send([
        { firstName: "Loveleet", lastName: "Joshi" },
        { firstName: "Rohit", lastName: "Chand" }
    ])
})

app.get("/users/:userId", (req, res) => {
    console.log(req.params)
    res.send({ firstName: "Rohit", lastName: "Chand" })
})

app.post("/users", (req, res) => {
    res.send("Saved data to DB!")
})

// this will match all HTTP methods
app.use("/test", (req, res) => {
    res.send("test route served")
})

app.listen(3000, () => {
    console.log('Server is listening on port 3000')
});