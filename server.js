const express = require('express')
const app = express()
const connectDb = require('./Database/connect')
const userRoute = require('./Routes/user')
const jobRoute = require('./Routes/jobs')
connectDb()
app.use(express.json())
const dotenv = require('dotenv')
dotenv.config()
app.use('/userapi', userRoute)
app.use('/jobapi', jobRoute)

app.get('/' , (req,res) =>{
    res.send('bhuwan')
})
app.listen(3000)