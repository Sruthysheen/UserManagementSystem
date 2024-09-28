import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/genarteToken.js'
const login=asyncHandler(async(req,res)=>{
console.log('hello');
const {email,password}=req.body

const user = await User.findOne({ $and: [{ isAdmin: 1 }, { email: email }] });



    if (!user) {
        res.status(400)
        throw new Error('Invalid User')
      }
  
      const isPasswordMatch = await user.isPasswordMatch(password);

      if(isPasswordMatch){
        generateToken(res,user._id)
        res.status(200).json(user)
      }else{
        res.status(400)
        throw new Error('Password is incorrect')
      }

})




const logout=asyncHandler(async(req,res)=>{
    res.cookie('jwt','',{
        httpOnly:true,
        expires: new Date(0)
    })
    res.json('competer')
})




const listUser=asyncHandler(async(req,res)=>{
    const users = await User.find({ isAdmin: { $ne: 1 } });



    res.status(200).json(users)
})


const editUser=asyncHandler(async(req,res)=>{
   
    const id=req.body.userForEdit._id;
   
const body=req.body
    const user=await User.findById(id)
    if (!user) {
        res.status(400)
        throw new Error('Invalid Id')
    }

    user.name = body.name || user.name;
    user.email = body.email || user.email;

    const updatedUser=await user.save()
   
res.status(200).json(updatedUser)

    

})



const deletUser=asyncHandler(async(req,res)=>{
   
const id=req?.body?._id
const user=await User.findByIdAndDelete(id)

res.status(200).json(user)


})


const searchUser = asyncHandler(async (req, res) => {
    const { query } = req.body;
    console.log(query,'this is query-------');


    const users = await User.find({
      name: { $regex: new RegExp(query, 'i') },
  }).sort({ name: 1 });

  console.log(users, 'this is users00000');


   
    res.status(200).json(users);
  });

   // const users = await User.find({
    //   $and: [
    //     {
    //       $or: [
    //     { name: { $regex: new RegExp(query, 'i') } },
    //     { email: { $regex: new RegExp(query, 'i') } },
    //   ],
    //     },
    //     { isAdmin: { $ne: 1 } }, 
    //   ],
    // });
    // console.log(users,'------------------');

export {
    login,
    logout,
    listUser,
    editUser,
    deletUser,
    searchUser

}


