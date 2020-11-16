const mongoose=require('mongoose');

mongoose.Promise=global.Promise;

mongoose.connect('mongodb://localhost:27017/ciaosoaps',{useNewUrlParser:true}).then(()=>{
    console.log("Connected to MongoDB Successfully");
}).catch((e)=>{
    console.log("Error while connecting to mongoDB");
    console.log(e);
    })

mongoose.set('useCreateIndex',true);
mongoose.set('useFindAndModify',false);

module.exports= mongoose;
