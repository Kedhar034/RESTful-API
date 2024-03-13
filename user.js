const User = require('../models/users')

async function handlegetAllUsers(req,res) {
    const allDbUsers = await UserActivation.find({});
    return res.json(allDbUsers);
}

async function handlegetUserbyId(req,res){
    const user = await User.findById(req.params.id);
    return res.json(user);
}

async function handleUpdateUserbyId(req,res){
    await User.findByIdAndUpdate(req.params.id,{lastName:"Changed"});
    return res.json({status:"Sucess"});
}
async function handledeleteUserbyId(req,res){
    await User.findByIdAndDelete(req.params.id);
    return res.json({status:"Success"});   
}
async function handleCreateUserbyId(req,res){
    const body = req.body;
    if (
        !body ||
        !body.first_name ||
        !body.last_name ||
        !body.email ||
        !body.gender ||
        !body.job_title
    ) {
        return res.status(401).json({msg:"All fields are required"});
    }
    const result = await User.create({
        firstName:body.first_name,
        lastName:body.last_name,
        email:body.email,
        gender:body.gender,
        jobTitle:body.job_title,
    });
    return res.status(201).json({msg:"Success",id:result._id});    
}

module.exports = {
    handlegetAllUsers,
    handlegetUserbyId,
    handleUpdateUserbyId,handledeleteUserbyId,
    handleCreateUserbyId
}