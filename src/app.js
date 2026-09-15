const express = require('express');

const app = express();

app.get("/user", (req, res) => {
    res.send({ firstName: "Loveleet", lastName: "Joshi" })
})

app.post("/user", (req, res) => {
    res.send("Saved data to DB!")
})

// this will match all HTTP methods
app.use("/test", (req, res) => {
    res.send("test route served")
})

app.listen(3000, () => {
    console.log('Server is listening on port 3000')
});