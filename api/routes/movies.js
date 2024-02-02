const router = require('express').Router();
const Movie = require('../models/Movie');
const verify = require('../verifytoken');



// create
router.post('/', verify , async(req,res)=>{
        if(req.user.isAdmin){
           const newmovie = new Movie(req.body);
           
            try{
                const savedmovie = await newmovie.save();
                res.status(201).json(savedmovie);
            }catch(err){
                res.status(500).json(err);
            }

        }else{
            res.status(403).json('you are not allowed');
        } 
})

// update
router.put('/:id', verify , async(req,res)=>{
    if(req.user.isAdmin){
        try{
       const updatedmovie = await Movie.findByIdAndUpdate(req.params.id,{
        $set:req.body
       },
       {new : true}
       );
       
        res.status(201).json(updatedmovie);

        }catch(err){
            res.status(500).json(err);
        }

    }else{
        res.status(403).json('you are not allowed');
    } 
})


// delete
router.delete('/:id', verify , async(req,res)=>{
    if(req.user.isAdmin){
        try{
            await Movie.findByIdAndDelete(req.params.id);
            res.status(200).json('movie has been deleted...');    
        }catch(err){
            res.status(500).json(err);
        }

    }else{
        res.status(403).json('you can delete only your account');
    } 
})


// GET 

router.get('/find/:id', verify , async(req,res)=>{
    
    try{
        const movie = await Movie.findById(req.params.id);
       
        res.status(200).json(movie);    
    }catch(err){
        res.status(500).json(err);
    }

})

//GET RANDOM
router.get('/random' ,verify, async ( req, res)=>{
    const type = req.query.type;
    let movie;
    try{
        if(type === 'series'){
            movie = await Movie.aggregate([
                {$match : {isSeries : true}},
                {$sample: { size : 1}},
            ]);
        }else{
            movie = await Movie.aggregate([
                {$match : {isSeries : false}},
                {$sample: { size : 1}},
            ]);
        }

    res.status(200).json(movie)
    }catch(err){
        res.status(500).json(err);
    }
})


// GET ALL MOVIES

router.get('/', verify, async ( req, res)=>{
    if(req.user.isAdmin){
        try{
           const movies =  await Movie.find();
           res.status(200).json(movies.reverse());
        }catch(err){
            res.status(500).json(err);
        }
    }else{
        res.status(401).json("you are not allowed");
    }
})




module.exports = router