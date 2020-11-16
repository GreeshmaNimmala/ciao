const mongoose=require('mongoose');

const ProductSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true,
        minlength:1,
        trim:true
    },
    price:{
        type:Number,
        required:true,

    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    ingredients:{
        type:String,
        required:true,
        trim:true
    },
    usage:{
        type:String,
        required:true,
        trim:true
    },
    imageURL:{
        type:String,
        required:true
    }
})

const Product=mongoose.model('Product',ProductSchema);

module.exports=Product;