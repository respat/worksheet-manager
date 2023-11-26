const express = require('express')
const router = express.Router()
const Location = require('../models/location')

router.get('/', async(req, res) => {
    try {
        const locations = await Location.find()
        res.json(locations)
    }
    catch {

    }
})

router.post('/', async (req, res) => {
    const location = new Location({
        name: req.body.name,
        zipCode: req.body.zipCode,
        city: req.body.city,
        address: req.body.address
    })
    try{
        const newLocation = await location.save()
        res.status(201).json(newLocation)
    }
    catch (err) {
        res.status(400).json({message: err.message})
    }
})

router.get('/:id', getLocation, (req, res) => {
    res.send(res.location)
})

router.patch('/:id', getLocation, async (req, res) => {
    if(req.body.name != null) {
        res.location.name = req.body.name
    }
    if(req.body.zipCode != null) {
        res.location.zipCode = req.body.zipCode
    }
    if(req.body.city != null) {
        res.location.city = req.body.city
    }
    if(req.body.address != null) {
        res.location.address = req.body.address
    }
    try {
        const updatedLocation = await res.location.save()
        res.json(updatedLocation)
    }
    catch(err) {
        res.status(400).json({message: err.message})
    }
})

router.delete('/:id', getLocation, async (req, res) => {
    try {
        await res.location.deleteOne()
        res.json({message: "Helyszín törölve"})
    }
    catch(err) {
        res.status(500).json({message: err.message})
    }
})

async function getLocation(req, res, next) {
    let location
    try {
        location = await Location.findById(req.params.id)
        if (location == null) {
            return res.status(404).json({ message: "Cím nem található."})
        }
    }
    catch(err) {
        return res.status(500).json({message: err.message})
    }

    res.location = location
    next()
}

module.exports = router