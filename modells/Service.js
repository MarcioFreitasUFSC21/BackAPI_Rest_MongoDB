//************************************************** */
// data required
//**************************************************/*css*/
'use strict'
const mongoose = require('mongoose');
//***************************************** ***************/
// the skelector of API rest full
//******************************************************** */
const {Schema} = mongoose;
const serviceSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    description: {
    type: String,
    require: true
},
    price: {
    type: Number,
    require: true
},
    image: {
    type: String,
    require: true
},
}, {timestamp: true}
);
//********************************************************* */
// models creation
//********************************************************** */
const Service = mongoose.model('Service', serviceSchema);
//****************************************************** */
module.exports = {Service, serviceSchema};