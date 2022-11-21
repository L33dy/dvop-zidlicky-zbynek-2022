const express = require('express')
const app = express()
const port = 3000

app.use(express.json()) // for parsing application/json

app.get("/", (req, res) =>{
    res.send("Hello world!")
})

app.post("/data", (req, res) => {
    console.log("body: ", req.body)
    res.send({
        data: {
            user: {
                name: "Zbyněk",
                lastname: "Židlický",
                message: req.body.message,
            },
        },
    })
})

app.listen(port, () => {
    console.log('Example app listening on port ' + port)
})