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

// Create
async function create(req, res, next) {
    try {
        res.status(201).json(await Search.create(req.body))
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}

// Show
async function detail(req, res, next) {
    try {
        res.status(200).json(await Search.findById(req.params.id))
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}

// Destroy
async function destroy(req, res, next) {
    try {
        res.status(200).json(await Search.findByIdAndDelete(req.params.id))
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}

module.exports = {
    index, 
    create,
    getOne: detail, 
    delete: destroy
}