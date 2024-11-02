const express = require('express')
const app = express()
const PORT = 3000

app.get( '/login/esquecisenha', (req, res) => {
 console.log("canela")
 res.send("hi")
})

app.listen( PORT)