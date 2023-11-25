const PostModel=require('../Modals/Post_modals')
module.exports.getPosts=async(req,res)=>{
     const posts=await PostModel.find();
     res.send(posts)
}
module.exports.savePosts=(req,res)=>{
     const {post}=req.body
     PostModel.create({post})
     .then((data)=>{
         console.log("saved");
         res.status(201).send(data)
     }
)
.catch((err)=>{
     console.log(err);
     res.send({
          error:err,
          msg:'Something went wrong!'
     })
})
}
module.exports.updatePost=(req,res)=>{
     const {id}=req.params
     const {post}=req.body
     // PostModel.create({post})
     PostModel.findByIdAndUpdate(id,{post})
     .then(()=>{
         console.log("saved");
         res.status(201).send('Updated Successfully!')
     }
)
.catch((err)=>{
     console.log(err);
     res.send({
          error:err,
          msg:'Something went wrong!'
     })
})
}
module.exports.deletePost=(req,res)=>{
     const {id}=req.params
     // const {post}=req.body
     // PostModel.create({post})
     PostModel.findByIdAndDelete(id)
     .then(()=>{
         console.log("saved");
         res.status(201).send('Deleted Successfully!')
     }
)
.catch((err)=>{
     console.log(err);
     res.send({
          error:err,
          msg:'Something went wrong!'
     })
})
}

