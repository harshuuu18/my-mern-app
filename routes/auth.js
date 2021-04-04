 const express = require('express');
 const router = express.Router();
 const bcrypt = require('bcryptjs');
 const mongoose = require('mongoose');
 const User = mongoose.model("User");
 const jwt = require('jsonwebtoken');
 const { JWT_SECRET } = require('../config/keys');
const requireLogin = require('../middleware/requireLogin')

// router.get('/protected',requireLogin,(req,res)=>{
//     res.send("Hello User")
// })



 router.post('/signup', (req,res)=>{
     const {name, email, password, gender} = req.body
     if(!email || !password || !name){
        return res.status(422).json({error: "invailid details"})
     }
     User.findOne({email:email})
     .then((savedUser)=>{
         if(savedUser){
            return res.status(422).json({error: "User Already Existed"})
         }
         hashpassword = bcrypt.hash(password,12)
         .then(hashpassword=>{
            const user = new User({
                email,
                password:hashpassword,
                name,
                gender
            })
   
           user.save()
           .then(user=>{
               res.json({message:"Save Successfully"})
           })
           .catch(err=>{
               console.log(err)
           })
         })
     
     })
     .catch(err=>{
         console.log(err)
     })
 })

router.post('/signin', (req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
       return res.status(422).json({error: "Please add YOUr Email & Password"})
    }
    User.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser){
           return res.status(422).json({error:"invalid email or password"}) 
        }
        bcrypt.compare(password, savedUser.password)
        .then(doMatch=>{
            if(doMatch){
                // res.json({message:Successfully Logged in"})
                const token = jwt.sign({_id:savedUser._id},JWT_SECRET)
                const {_id,name,email,gender} = savedUser
                res.json({token,user:{_id,name,email,gender}})
            }
            else{
                return res.status(422).json({error:"invalid email or password"}) 
            }
        })
        .catch(err=>{
            console.log(err)
        })
    })
})

 module.exports = router