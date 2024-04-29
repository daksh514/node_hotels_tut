const mongoose = require('mongoose')

//Define mongoDB connection URL
const mongoURL = 'mongodb://127.0.0.1:27017/hotels'

// Setup mongoose connection
mongoose.connect(mongoURL)

const db = mongoose.connection

db.on('connected', ()=>{
    console.log('Mongoose connected')
})
db.on('error', (e)=>{
    console.log(e)
})
db.on('disconnected', ()=>{
    console.log('Mongoose disconnected')
})

module.exports = db;