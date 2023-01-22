import 'dotenv/config'
//import './database/connectdb.js'
import './database/dynamodb.js'
import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.json({
        status: 'true',
        message: 'todo listo!'
    })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => { 
    console.log(" Hola mundo :) http://localhost:"+PORT)
})