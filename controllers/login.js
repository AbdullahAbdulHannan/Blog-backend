const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken")
const User=require("../Modals/User")
module.exports=async(req,res)=>{
    const{email,password}=req.body;
    const dbUser=await User.findOne({email}).exec()
    if(dbUser){
         const match=bcrypt.compare(password,dbUser.password) 
         if (match){
             const token=jwt.sign({_id:dbUser._id,name:dbUser.name,email},process.env.JWT_LOGIN_TOKEN,{expiresIn:"1d"});
             res.send({
                msg:"Login Successfull!",
                token,
             })
         }
         else{
             res.status(400).send({
                 msg:"Username  or password is incorrect!!"
             })
             return false;
         }
    }
    else{
        res.status(400).send({
            msg:"Email not registered please signup!"
        })
        return false;
    }
}