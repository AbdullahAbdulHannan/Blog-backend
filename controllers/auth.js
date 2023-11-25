const jwt = require('jsonwebtoken')
module.exports=(req,res)=>{
    const {token}=req.body;
    if (token){
      try{
        const decode=jwt.verify(token,process.env.JWT_LOGIN_TOKEN)
        res.send({
            auth:true,
            data:decode,
        })
    }
    catch(err){
        res.send({
            auth:false,
            data:err.message
        })
    }
    }
    else{
        res.send({
            auth:false,
            msg:"No token found in request"
        })
    }
}