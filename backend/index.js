
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

// mongodb+srv://shinchannahara4ku:shinchannahara4ku@cluster0.f4zgz1h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

mongoose.connect('mongodb+srv://shinchannahara4ku:shinchannahara4ku@cluster0.f4zgz1h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')



app.get("/",(req,res)=>{
    res.send("Hello World")
})

//Image storage
const storage = multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
const upload = multer({storage:storage})

app.use('/images',express.static('upload/images'))
//Creating Upload endpoing for images
app.post('/upload',upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})

app.listen(port,console.log(`Server is running on port ${port}`))

