const mongoose=require("mongoose");
// require('dotenv')
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/mydatabse'

// const MONGO_URL = process.env.MONGO_URL || 'mongodb+srv://HyperLeap:HyperLeap@123@cluster0.hasahlg.mongodb.net/mydatabse?retryWrites=true&w=majority'
mongoose.connect(MONGO_URL)
.then(()=>{
    console.log('connection');
}).catch((err)=>{
    console.log(err);
})
const menSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    Phone_No:{
        type:Number,
        required:true,
        unique:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        unique:true,
        trim:true
    }
})

//we are creating a new collection

const {Usersdetail}=new mongoose.model("Profile",menSchema)

module.exports={Usersdetail}