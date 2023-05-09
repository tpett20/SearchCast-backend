// DEPENDENCIES
const express = require('express')
const router = express.Router()

// ROUTES

// Searches Create Route
router.post('/', async (req, res) => {
    res.status(201).json({message: 'Hit Searches Create Route'})
})

module.exports = router