const express=require('express');
const router=express.Router();
const menu=require('./../models/Menu')

router.post('/',async(req,res)=>{
    try{
    const data=req.body;
    const newMenu=new menu(data);
    const response= await newMenu.save(); 
    console.log("Data saved succesufully")
    res.status(200).json(response);
    }
    catch(err){
      console.log("error in the code")
      
      res.status(500).json({error:'There is a Internal Error'})
    }
  })

  router.get('/',async(req,res)=>{
    try{
      const data= await menu.find();
      console.log('data fetched in the menu section');
      res.status(200).json(data);
   }catch(e){
     console.log(e);
     res.status(500).json({error:'internal server error'})
  
   }
  })
// comment added for testing purpose
module.exports=router;
  
  