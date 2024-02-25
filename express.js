const express = require('express') 
const app = express()
const db=require('./db')

const bodyParser=require('body-parser')
app.use(bodyParser.json());

const person=require('./models/person')
const menu=require('./models/Menu')

app.get('/', function (req, res) {
  res.send('Hello World')
})





// Imports  the route file
const personRoutes=require('./routes/personRoutes')
// use the routes
app.use('/person',personRoutes);

const menuItemRoutes=require('./routes/menuItemRoutes')
app.use('/menu',menuItemRoutes)





app.listen(3000,()=>{
     console.log('port is availavle')
})