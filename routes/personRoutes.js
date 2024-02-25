const express=require('express');
const router=express.Router();
const person=require('./../models/person')

router.post('/',async(req,res)=>{
    try{
    const data=req.body;
  
    const newPerson=new person(data);
    const respone=await newPerson.save();
    console.log('data saved');
    res.status(200).json(respone);
  
    }
  catch(err){
    console.log(err);
    res.status(500).json({error:'Internal error'});
  }
  })

    router.get('/',async(req,res)=>{
    try{
       const data= await person.find();
       console.log('data fetched');
       res.status(200).json(data);
    }catch(e){
      console.log(e);
      res.status(500).json({error:'internal server error'})
  
    }finally{
  
    }
  })

  router.get('/:workType',async(req,res)=>{
  try{
    //Extract the worktype from the parameter
    const workType= await req.params.workType;
    // validation 
    if(workType=='chef'|| workType=='waiter'|| workType=='manager'){
        const response=await person.find({work:workType})
        console.log('response fetched succesufully')
        res.status(200).json(response);
    }
    else{
      res.status(404).json({error:'Internal server error'})
    }
  }catch(err){
    console.log(e);
    res.status(500).json({error:'internal server error'})
  }
    
})


router.put('/:id',async(req,res)=>{
    try{
      // step 1 to get the data
      const personId=req.params.id;
      const updatedPersonData=req.body;
      const response=await person.findByIdAndUpdate(personId,updatedPersonData,{
        new:true,// return the updated document
        runValidators:true,//run moongose validation
      })
       
       if(!response){
         return res.status(404).json({error:'Response not found'})
      }
      console.log('data updated')
      res.status(200).json(response)
    }
    
    catch(err){
        console.log('Error inside the id part')
        res.status(500).json({error:'Internal error'})
        
    }
})

router.delete('./:id',async(req,res)=>{
  try{
    const personId=req.params.id;
    const response=await personId.findByIdAndRemove(personId);
    if(!response){
      return req.status(404).json({error:'Person Not found'})
    }
    console.log("Data deleted succuesfully");
    req.status(200).json({message:'person data delted'})
  }
  
  catch(err){

    console.log('Not able to delete');
    req.status(500).json({error:'Internal Error'});
  }
     
     
})
module.exports=router;
  