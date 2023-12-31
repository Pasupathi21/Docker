const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

console.log(process.env.DB)
mongoose.connect(`${process.env.DB}`).then(() => console.log('DB connection success 🟢')).catch((e) => {
    console.log('error', e)
    console.log('DB connection failed 🔴')
})

const app = express()

// ************* | Controll|

app.get('/get-list', (req, res) =>{
    try{

    }catch(e){
        console.log('ERROR: ', e)
        res.json({
            status: false,
            message: 'Error'
        })
    }
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})