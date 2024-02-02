const router = require('express').Router();
const User = require('../models/User');
const CryptoJS = require('crypto-js');
const verify = require('../verifytoken');
const { query } = require('express');


// update
router.put('/:id', verify , async(req,res)=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            if(req.body.password){
                req.body.password = CryptoJS.AES.encrypt(req.body.password , process.env.SECRET_KEY,).toString();
            }

            try{

                const updateduser = await User.findByIdAndUpdate(req.params.id , 
                    {$set:req.body},
                    {new:true});

                res.status(200).json(updateduser);    
            }catch(err){
                res.status(500).json(err);
            }

        }else{
            res.status(403).json('you can update only your account');
        } 
})

// delete
router.delete('/:id', verify , async(req,res)=>{
    if(req.user.id === req.params.id || req.user.isAdmin){
        try{

            await User.findByIdAndDelete(req.params.id);
            res.status(200).json('user has been deleted...');    
        }catch(err){
            res.status(500).json(err);
        }

    }else{
        res.status(403).json('you can delete only your account');
    } 
})


// GET ALL

router.get('/', verify , async(req,res)=>{
    const query = req.query.new;

        if(req.user.isAdmin){
        try{
            const user = query ?  await User.find().sort({_id:-1}).limit(5) :await  User.find(); 
           
            res.status(200).json(user);    
        }catch(err){
            res.status(500).json(err);
        }
    }else{
        res.status(403).json('you are not authorize to see all users');
    }
  
})

// GET 

router.get('/find/:id', verify , async(req,res)=>{
    
    try{
        const user = await User.findById(req.params.id);
        const {password, ...info} = user._doc;
        res.status(200).json(info);    
    }catch(err){
        res.status(500).json(err);
    }

})


// GET USER STATS
router.get('/stats', verify, async (req, res)=>{
    const today = new Date();
    const lastyear = today.setFullYear(today.setFullYear() - 1);

    const monthsArray = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
          "December"
    ] ;

    try{
        const data= await User.aggregate([
            {
                $project:{
                    month:{$month : "$createdAt"}
                }
            },{
                $group : {
                    _id : "$month",
                    total : {$sum : 1}
                }
            }
        ])
        res.status(200).json(data);
    }catch(err){
        res.status(500).json(err)
    }
});



module.exports = router