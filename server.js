require('dotenv').config()
const express = require('express')
const app = express()

const port = process.env.PORT || 4289
app.listen(port,()=>console.log('server on ',port))