const mongoose=require('mongoose')
const bycrpt=require('bcrypt')

const personSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true

    },
    age:{
        type:Number      
    },
    work:{
        type:String,
        enum:['chef','waiter','manager'],
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,
        
    },
   salary:{
    type:Number,
    require:true
   },
//    username:{
//     required:true,
//     type:String
//    },
//    password:{
//     required:true,
//     type:String
//    }

    
})
personSchema.pre('save',async function(next){
    const person=this;
    if(!person.isModified('password'))return next();
    try{
        const salt=await bycrpt.genSalt(10);
        const haspassword=await bycrpt.hash(person.password,salt)
        person.password=haspassword;
        next();
    }
    catch(err){
         return next(err)
    }

    
})

personSchema.methods.comparePassword=async function(candidatePassword){
    try{
        const isMatch= await bycrpt.compare(candidatePassword,this.password)
        return isMatch;
    }
    catch(e){
        throw err
    }
}
// we make a person model and then we are exporting it
const Person=mongoose.model('Person',personSchema);
module.exports=Person;