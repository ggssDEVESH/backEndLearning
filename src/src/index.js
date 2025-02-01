require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req,res) => {
    res.send("Hello God!")
})

app.get('/twitter',(req,res) => {
    res.send("this is my twitter")
})

app.get('/login', (req,res) => {
    res.send("<h1>veera venkata naga surya chandhra gandhipathi sri sai devesh gokavarapu </h1>")
})

app.listen(process.env.PORT, () => {
    console.log(`shivaya govindya ${process.env.PORT}`)
})
