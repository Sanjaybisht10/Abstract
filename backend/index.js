const express = require('express');
const app = express();
require('dotenv').config();
const port  = process.env.PORT || 8000;
const cors = require('cors');
const fileUpload = require('express-fileupload');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/temp"
}));
app.use(cors({
    origin:'http://localhost:3000',  //front-end 'url'
    credentials:true
}))

const cardRoutes = require('./routes/Card')
app.use('/api/v1',cardRoutes)

const dbConnect = require('./config/database')
dbConnect()

app.get('/',(req,res)=>{
    return res.json({
        success:true,
        message : `your server is Running at ${port}`
    })
})

//---> app hosted
app.listen(port ,(req,res)=>{
    console.log(`APP is  running successful at ${port}`)
})