const router = require('express').Router();
const CryptoJS  = require('crypto-js')
const jwt = require('jsonwebtoken')
const User = require('../models/User');

//registration
router.post('/register', async(req,res)=>{
    const newuser =  new User({
        username:req.body.username,
        email:req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString()
    });
    try{
    await newuser.save()
    res.status(201).json(newuser);
    }catch(err){
        res.status(500).send(err);
    }
});

//LOGIN
router.post('/login', async(req,res)=>{
    try{
        const user = await User.findOne({email:req.body.email});
        !user && res.status(401).json('wrong password or email');

        // for decryption of password
        var bytes  = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
        var originalPass = bytes.toString(CryptoJS.enc.Utf8);

        // if password doesn't matches
        originalPass !== req.body.password && res.status(401).json('wrong username or password');
        
        // creating jwt token
        const accesstoken = jwt.sign({id:user._id , isAdmin: user.isAdmin},
            process.env.SECRET_KEY,
            { expiresIn:'5d'}
            );

        const {password , ...info} = user._doc;
        res.status(200).json({...info , accesstoken});
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router