import express from 'express'
import 'dotenv/config'
//import './database/connectdb.js'
import './database/dynamodb.js'
import authRouter from './routes/auth.route.js'

const app = express()

app.use('/api', authRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => { 
    console.log(" Hola mundo :) http://localhost:"+PORT)
})