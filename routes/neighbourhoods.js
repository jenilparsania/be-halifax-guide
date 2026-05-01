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

