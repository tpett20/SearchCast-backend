// DEPENDENCIES
const mongoose = require('mongoose')

// MODEL
const SearchSchema = new mongoose.Schema({
    input: {type: String, required: true},
    user: String,
}, {
    timestamps: true
})

const Search = mongoose.model('Search', SearchSchema)

module.exports = Search