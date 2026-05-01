const express = require('express')
const router = express.Router()
const Place = require('../models/Place')

router.get('/',async(req,res)=>{
    try{
        const filter = {}
        if(req.query.category){
            filter.category = req.query.category
        }
        const places = await Place.find(filter)
        res.json(places)

    }catch(err){
        res.status(500).json({message: 'Server error', error:err.message})
    }
})

module.exports = router
