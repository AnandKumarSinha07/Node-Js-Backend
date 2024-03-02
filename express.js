const express = require('express') 
const app = express()
const db=require('./db')

require('dotenv').config();

const passport=require('./auth');
const LocalStrategy=  require('passport-local').Strategy;

const PORT=process.env.PORT || 3000 
const bodyParser=require('body-parser')
app.use(bodyParser.json());

const person=require('./models/person')
const menu=require('./models/Menu')

//MIDDLE WARE FUNCTION
const logRequest=(req,res,next)=>{
  console.log(`[${new Date().toLocaleString()}] Request made to: ${req.originalUrl}`);
  next();
}
app.use(logRequest);

app.use(passport.initialize())
const localMiddleWire=passport.authenticate('local',{session:false})


//Authentication and Password Code 
app.get('/',localMiddleWire,function (req, res) {
  res.send('Hello World')
})



const personRoutes=require('./routes/personRoutes')
app.use('/person',personRoutes);

const menuItemRoutes=require('./routes/menuItemRoutes');
app.use('/menu',menuItemRoutes)


app.listen(PORT,()=>{
     console.log('port is availavle')
})