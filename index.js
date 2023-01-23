import express from 'express'
import 'dotenv/config'
import './database/connectdb.js'
//import './database/dynamodb.js'
import authRouter from './routes/auth.route.js'


const app = express()

app.use(express.json())
app.use('/api/auth', authRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => { 
    console.log(" Hola mundo :) http://localhost:"+PORT)
})