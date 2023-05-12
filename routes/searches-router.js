// DEPENDENCIES
const express = require('express')
const router = express.Router()

const searchesCtrl = require('../controllers/searches-controller')

// ROUTES

// Searches Index Route
router.get('/', searchesCtrl.index)

// Searches Create Route
router.post('/', searchesCtrl.create)

// Searches Show Route
router.get('/:id', searchesCtrl.getOne)

// Searches Delete Route
router.delete('/:id', searchesCtrl.delete)

module.exports = router