const passport=require('passport');
const LocalStrategy=  require('passport-local').Strategy;
const person=require('./models/person')


passport.use(new LocalStrategy(async(USERNAME,PASSWORD,done)=>{
    try
    {
       console.log('Received Credentials',USERNAME,PASSWORD);
       const user= await person.findOne({username:USERNAME});
       if(!user)
       return done(null,false,{message:'Incorrect username'});
  
       const isPasswordMatch= await user.comparePassword(PASSWORD) 
       if(isPasswordMatch)
       {
         return done(null,user)
       }
       else{
        return done(null,false,{message:'Incorrect password'});
       }
  
  
    }catch(e){
      return done(e)
    }
  
  }))
  module.exports=passport;