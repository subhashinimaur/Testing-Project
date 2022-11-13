const {Usersdetail}=require("../modle/index")



// require("./db/con")
// const Usersdetail=require("../models/schema")

const Post_Profile=async(req,res)=>{
    try{
        const user=new Usersdetail({
            name:req.body.name,
            Phone_No:req.body.Phone_No,
            email:req.body.email,
            password:req.body.password,
        })
        const insertdata=await user.save();
        res.send(insertdata)
    }catch(e){
        res.send(e)
    }
}

const Get_Profile=async(req,res)=>{
    try{
        res.send(await Usersdetail.find({}))
        // res.status(201).send(getMens)
    }catch(err){
        console.log(err);
        res.status(400).send(err)
    }
}

const update_Profile=async(req,res)=>{
    try{
        const id=req.params.id
        const result =await Usersdetail.findByIdAndUpdate(id,{
            $set:{
                name:req.body.name,
                Phone_No:req.body.Phone_No,
                email:req.body.email,
                password:req.body.password
            } 
        })
        res.send(result)

    }catch(err){
        console.log(err);
    }
    
}

const Delete_Profile=async(req,res)=>{
    try{
        const id=Usersdetail.id
        const result=await Usersdetail.deleteOne(id)
        console.log(result);
        res.send({message:"delete data successfuly..:",result:result})
    }catch(err){
        console.log(err);
    }
}
module.exports={Post_Profile,Get_Profile,update_Profile,Delete_Profile}