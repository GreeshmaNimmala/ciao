const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const mongoose=require('../api/db/mongoose');
const cors=require('cors');

const Product=require('../api/model/product');
const Cart = require('./model/cart');


app.use(bodyParser.json());
app.use(cors());
app.get('/',(req,res)=>{
    res.send("hello world")
});

app.get('/soaps',(req,res)=>{
    Product.find({}).then((products)=>{
        res.send(products);
    })

});


app.post('/soaps',(req,res)=>{

    let name=req.body.name;
    let price=req.body.price;
    let description=req.body.description;
    let ingredients=req.body.ingredients;
    let usage=req.body.usage;
    let imageURL=req.body.imageURL

    let newProduct=new Product({
        name,
        price,
        description,
        ingredients,
        usage,
        imageURL
    });

    newProduct.save().then((productItem)=>{
        res.send(productItem);
    })
})

app.patch('/soaps/:id',(req,res)=>{
    Product.findOneAndUpdate({_id:req.params.id},{
        $set:req.body
    }).then(()=>{
        res.sendStatus(200);
    })
})

app.delete('/soaps/:id',(req,res)=>{
    Product.findOneAndRemove({_id:req.params.id}).then((removedItem)=>{
        res.send(removedItem)
    })
});

app.get('/cart',(req,res)=>{
    Cart.find({}).then((cartItem)=>{
        res.send(cartItem);
    })
})

app.post('/cart/:id',async(req,res)=>{
    const _product = await Product.findById({_id:req.params.id})
    console.log(_product);
    let newCart=new Cart({
        product:_product,
        qty:req.body.qty
    });

    newCart.save().then((items)=>{
        res.send(items);
    })
});

// app.get('/cart/:productId',(req,res)=>{
//     Cart.find({
//         _productId:req.params.productId
//     }).then((items)=>{
//         res.send(items);
//     })
// });

app.listen(3000,()=>{
    console.log("Server is listening on Port 3000")
});