const express = require('express');

const app = express();

// Multiple route handlers
app.use("/users", (req, res, next) => {
    console.log("Handling route abc")
    next()
    // res.send("Response!!")
},
// (req, res) => {
//     console.log("Handling route abc2")
//     res.send("2nd response!!")
// }
)

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