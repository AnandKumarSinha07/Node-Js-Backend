const mongoose=require('mongoose');
require('dotenv').config();
//const mongoURL = process.env.LOCAL_URL
const mongoURL=process.env.MONGODB_URL
mongoose.connect(mongoURL,{
    useNewUrlParser:false,
    // useUnifiedTopology:true,

})
const db=mongoose.connection;

db.on('connected',()=>{
    console.log('conncected to mongodb server');
})

db.on('error',(err)=>{
    console.log('MongoDb connection error',err);
})

db.on('disconnected',()=>{
    console.log('disconncected to mongodb server');
})
// EXPORT THE DATABASE CONNECTION
module.exports.db;