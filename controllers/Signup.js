const bcrypt=require('bcrypt')
const {isEmail}=require('validator')
const User = require('../Modals/User')
const saltRounds=10;
const validateSignupdata=async(req,res)=>{
    const{name,email,password}=req.body;
    if(name.trim().length===0){
        res.status(400).send({msg:"Please Enter a name!"})
        return false;
    }
    if(!isEmail(email)){
        res.status(400).send({msg:"Please Enter a valid email!"})
        return false;
    }
    if(password.trim().length===0){
        res.status(400).send({msg:"Please Enter password!"})
        return false;
    }
    else if (password.trim().length<=5){
        res.status(400).send({msg:"Minimum password length is 6 characters!"})
        return false;
    }
    const existingUser=await User.findOne({email}).exec();
    if(existingUser){
        res.status(400).send({msg:"Email already in use"})
        return false;    
}
return true;
}
module.exports=async(req,res)=>{
    const{name,email,password}=req.body;
    const isValid=await validateSignupdata(req,res);
    if(isValid){
        try{
        const hashedPassword=await bcrypt.hash(password,saltRounds)
        const user=await User.create({name,email,password:hashedPassword})
        res.send(
            {
                msg:"Account created successfully!",
                user:{_id:user.id,name:user.name,email:user.email}
            }
        )
    }
    catch(error){
             res.status(400).send({
                msg:error,
             })  
             console.log(error);
    }
}
}