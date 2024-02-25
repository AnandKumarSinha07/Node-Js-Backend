const mongoose=require('mongoose');

const mongoURL = 'mongodb://0.0.0.0:27017/hotels'
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