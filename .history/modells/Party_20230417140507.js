//************************************************** */
// data required
//**************************************************/*css*/
                'use strict'
const mongoose = require('mongoose');
//***************************************** ***************/
// the skelector of API rest full
//******************************************************** */
const {Schema} = mongoose;
const {serviceSchema} = require('./Service');

//********************************************************* */
// models creation
//********************************************************** */
const partySchema = new Schema({
    title: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    budget: {
        type: Number,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    services: {
        type: [ serviceSchema],
    },
}, 
    {timestamp: true}
);
/********************************************************* */
// models creation
//********************************************************** */
const  Party = mongoose.model('Party', partySchema);
//****************************************************** */
module.exports = Party;