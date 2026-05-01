const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/places',require('./routes/places'))
app.use('/api/neighbourhoods',require('./routes/neighbourhoods'))

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("MongoDB connected")
    app.listen(process.env.PORT, ()=> {
        console.log(`Server running on port ${process.env.PORT}`);
    })


})
.catch((err)=>console.error('MongoDB connection error',err))

