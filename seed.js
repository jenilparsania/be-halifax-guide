require('dotenv').config()
const mongoose = require('mongoose')
const Place = require('./models/place')
const Neighbourhood = require('./models/neighbourhood')

const places = [
    {name: 'Obladee Wine Bar', category: 'bar', lat:44.6475, lng:-63.5810},
    { name: 'The Carleton', category: 'bar', lat: 44.6468, lng: -63.5798 },
    { name: 'Two If By Sea Cafe', category: 'cafe', lat: 44.6518, lng: -63.5748 },
    { name: 'Java Blend', category: 'cafe', lat: 44.6502, lng: -63.5901 },
    { name: 'Public Gardens', category: 'park', lat: 44.6433, lng: -63.5779 },
    { name: 'Point Pleasant Park', category: 'park', lat: 44.6218, lng: -63.5693 },
    { name: 'Seaport Farmers Market', category: 'market', lat: 44.6455, lng: -63.5683 },
    { name: 'Agricola Street Brasserie', category: 'food', lat: 44.6601, lng: -63.5891 },
    { name: 'Bicycle Thief', category: 'food', lat: 44.6452, lng: -63.5712 },
    { name: 'Hopyard', category: 'bar', lat: 44.6490, lng: -63.5770 },
]

const neighbourhoods = [
    {name : "North End", slug: 'north-end',color: '#4A90D9',vibe:'Artsy,trendy. independent shops',coords: [[44.663,-63.598],[44.663,-63.580],[44.652,-63.580],[44.652,-63.598]],},
    { name: 'Downtown Halifax', slug: 'downtown-halifax', color: '#E67E22', vibe: 'Business, nightlife, waterfront', coords: [[44.652,-63.580],[44.652,-63.565],[44.642,-63.565],[44.642,-63.580]] },
    { name: 'Hydrostone', slug: 'hydrostone', color: '#27AE60', vibe: 'Historic, quiet, family-friendly', coords: [[44.668,-63.598],[44.668,-63.585],[44.663,-63.585],[44.663,-63.598]] },
    { name: 'Quinpool', slug: 'quinpool', color: '#8E44AD', vibe: 'Restaurants, students, walkable', coords: [[44.650,-63.608],[44.650,-63.595],[44.642,-63.595],[44.642,-63.608]] },
    { name: 'South End', slug: 'south-end', color: '#C0392B', vibe: 'Universities, parks, quiet streets', coords: [[44.642,-63.580],[44.642,-63.565],[44.630,-63.565],[44.630,-63.580]] },
]

async function seed(){
    await mongoose.connect(process.env.MONGO_URL)
    await Place.deleteMany()
    await Neighbourhood.deleteMany()
    await Place.insertMany(places)
    await Neighbourhood.insertMany(neighbourhoods)
    console.log('Seeding complete')
    process.exit(0)
}

seed().catch((err)=>{
    console.error(err)
    process.exit(1)
})


