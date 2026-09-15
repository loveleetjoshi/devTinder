const express = require('express');

const app = express();

app.use("/", (req, res) => {
    res.send("Hello from server!")
})

app.use("/test", (req, res) => {
    res.send("test route served")
})

app.listen(3000, () => {
    console.log('Server is listening on port 3000')
});