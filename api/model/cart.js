const mongoose=require('mongoose');
const Product=require('./product');

 const CartSchema=new mongoose.Schema({

    product:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product',
    }],
    qty:{
        type:Number,
        default:1
    }
 })

 const Cart=mongoose.model('Cart',CartSchema);
 module.exports=Cart;