
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

const connectDB = mongoose.connect('mongodb+srv://shinchannahara4ku:shinchannahara4ku@cluster0.f4zgz1h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

if (connectDB){
    console.log("Successfull Database Connection ^_^")
}

//for default checking
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

//Routes

//Creating Upload endpoing for images
app.post('/upload',upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})

//Schema
const Product = mongoose.model("Product",{
    id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    new_price:{
        type:Number,
        required:true
    },
    old_price:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    avilable:{
        type:Boolean,
        default:true
    }
})


app.post('/addproduct',async(req,res)=>{
    let products = await Product.find({});
    let id;
    if(products.length>0){
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id + 1;
    }else{
        id = 1;
    }
    const {name,image,category,new_price,old_price} = req.body;
    const product = new Product({
        id,
        name,
        image,
        category,
        new_price,
        old_price
    })
    // console.log(product);
    await product.save();
    // console.log("Product Added Successfully");
    res.json({success:true,message:product})

})

//creating API for deleting products

app.post('/removeproduct',async(req,res)=>{
    const {id} = req.body;
    await Product.findOneAndDelete({id:id});
    res.json({success:true,message:"Product Deleted Successfully", name:req.body.name})
})

//API for getting all products

app.get('/allproducts',async(req,res)=>{
    let products = await Product.find({});
    res.json({products})

})


app.listen(port,console.log(`Server is running on port ${port}`))

