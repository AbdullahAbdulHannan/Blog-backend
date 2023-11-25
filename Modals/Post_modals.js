const mongoose=require('mongoose');
const postSchema=new mongoose.Schema({
    post:{
       type: String,required:true,
    },
    user:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'Users',
        name:"ss"
    }
})
const post=mongoose.model('Posts',postSchema)
module.exports=post;
