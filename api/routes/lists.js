const router = require('express').Router();
const verify = require('../verifytoken')
const Movie = require('../models/Movie');
const List = require('../models/List')

// Create
router.post('/', verify , async (req,res)=>{
    if(req.user.isAdmin){
        const newlist = new List(req.body);
        try{
          const list =   await newlist.save();
            res.status(201).json(list);

        }catch(err){
            res.status(500).json(err);

        }
    }else{
        res.status(403).json('your are not allowed')
    }
})


// delete
router.delete('/:id', verify , async (req,res)=>{
    if(req.user.isAdmin){
        try{
            await List.findByIdAndDelete(req.params.id);
            res.status(201).json('list has been deleted');
        }catch(err){
            res.status(500).json(err);

        }
    }else{
        res.status(403).json('your are not allowed')
    }
})

// GET

router.get('/', verify , async ( req , res)=>{
    const typeQuery = req.query.type;
    const genreQuery = req.query.genre;
    let list = [];
   try{
        if(typeQuery){
            if(genreQuery){
                list = await List.aggregate([
                    {$sample : { size : 10}},
                    {$match : {type : typeQuery , genre: genreQuery}},
                ]);
            }else{
                list = await List.aggregate([
                    {$sample : {size:10}},
                    {$match : {type: typeQuery}}
                ])
            }
        }else{
            
            list = await List.aggregate([{$sample : {size : 10}}]);
        }

        res.status(200).json(list);
   }catch(err){
    res.status(500).json(err);

   }
})

router.put('/:id', verify , async(req,res)=>{
    if(req.user.isAdmin){
        try{
       const updatedList = await List.findByIdAndUpdate(req.params.id,{
        $set:req.body
       },
       {new : true}
       );
       
        res.status(201).json(updatedList);

        }catch(err){
            res.status(500).json(err);
        }

    }else{
        res.status(403).json('you are not allowed');
    } 
})

module.exports = router