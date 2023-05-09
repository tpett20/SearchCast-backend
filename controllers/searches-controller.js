// DEPENDENCIES 
const express = require('express')
const { Search } = require('../models')

// CONTROLLER ACTIONS

// Index
async function index(req, res, next) {
    try {
        res.status(200).json(await Search.find())
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}

module.exports = {
    index
}