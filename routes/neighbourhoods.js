const express = require('express')
const router = express.Router()
const Neighbourhood = require('../models/neighbourhood')

router.get('/',async (req,res)=> {
    try{
        const neighbourhoods = await Neighbourhood.find()
        res.json(neighbourhoods)
    }
    catch(err)
    {
        res.status(500).json({message:'Server error', error: err.message})
    }
})

router.get(':/slug',async(req,res)=> {
    try{
        const n = await Neighbourhood.findOne({slug:req.params.slug})

        if (!n){ return res.status(400).json({message: 'Not Found'})}
        res.json(n)
     
    }catch(err){
        res.status(500).json({message : 'Server Error', error:err.message})

    }
})

module.exports = router

