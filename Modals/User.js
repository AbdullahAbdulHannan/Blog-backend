const mongoose=require("mongoose")
const {isEmail}=require("validator")
const userSchema=new mongoose.Schema({
    name:{
       type: String,required:[true,"Please Enter a name!"]
    },
    email:{
        type: String,required:[true,"Please Enter email!"],
        unique:true,
        validate:[isEmail,"Please enter valid email!"]
    },
    password:{
        type: String,required:[true,"Please Enter email!"],
        required:[true, "Please enter password!"],
        minlength:[6,"Minimum password length is 6!"]
    }
})
const User=mongoose.model('Users',userSchema);
module.exports=User;