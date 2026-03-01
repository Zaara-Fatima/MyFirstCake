import User from "../models/User.js"

import generateToken from "../utils/generateToken.js"
import asyncHandler from "../middleware/asyncHandler.js"


// @desc    Get logged in user profile
// @route   GET /api/users/profile
// @access  Private
export const getUserProfile = asyncHandler(async (req, res )=>{
    const user =await User.findById(req.user._id).select("-password")
    if (!user){
        res.status(404)
        throw new Error("USER NOT FOUND")
    }
    res.json(user)
})

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private

export const updateUserProfile = asyncHandler(async(req,res)=>{
    const user =await User.findById(req.user._id)

    if(!user){
        res.status(404)
    throw new Error("User not found")
    }
    
    user.email = req.body.email || user.email
    user.name =req.body.name || user.name

    if (req.body.password){
        user.password=req.body.password
    }

    const updatedUser = await user.save()

    res.json({
        _id:updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        role: updatedUser.role,
        token : generateToken(updatedUser._id)
    })
})

// @desc    Get all users
// @route   GET /api/users
// @access  Admin
 export const getUsers= asyncHandler(async(req,res)=>{
    const users=await User.find({}).select("-password")
    res.json(users)
 }) 

 // @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Admin

export const getUserById =asyncHandler(async(req,res)=>{
    const user=await User.findById(req.params.id).select("-password")

    if (!user){
        res.status(404)
        throw new Error("User not found")
    }

    res.json(user)
})

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Admin
export const deleteUser= asyncHandler(async(req,res)=>{
    const user= await User.findById(req.params.id)

    if(!user){
        res.status(404)
        throw new Error("USER NOT FOUND")
    }

    await user.deleteOne()
    res.json({message: "USER REMOVED"})
})

// @desc    Update user (Admin)
// @route   PUT /api/users/:id
// @access  Admin
export const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)

  if (!user) {
    res.status(404)
    throw new Error("User not found")
  }

  user.name = req.body.name || user.name
  user.email = req.body.email || user.email
  user.role = req.body.role || user.role

  const updatedUser = await user.save()

  res.json({
    _id: updatedUser._id,
    name: updatedUser.name,
    email: updatedUser.email,
    role: updatedUser.role,
  })
})