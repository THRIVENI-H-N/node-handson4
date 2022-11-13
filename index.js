const express = require("express")

const app = express();

app.use(express.json())

app.use('/user', require("./Route/user"))

app.listen((4000), () => {
    console.log("Listening on port 5000")
})