// DEPENDENCIES
const express = require('express')
const router = express.Router()

// ROUTES

// Searches Index Route
router.get('/', async (req, res) => {
    res.status(200).json({message: 'Hit Searches Index Route'})
})

// Searches Create Route
router.post('/', async (req, res) => {
    console.log(req.body)
    res.status(201).json({message: 'Hit Searches Create Route'})
})

// Searches Show Route
router.get('/:id', async (req, res) => {
    res.status(200).json({message: 'Hit Searches Show Route: ' + req.params.id})
})

module.exports = router