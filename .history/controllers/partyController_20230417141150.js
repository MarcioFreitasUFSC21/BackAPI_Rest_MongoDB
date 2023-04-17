'use strict'
const PartyModel = require('../modells/Party');
//***************************************** ***************/
//            the service funcionality main function
//******************************************************** */
const partyController = {
        create: async(req, res, next) => {
            try {
                
                const party = {
                    title: req.b
                }

            } catch (error) {
                console.log("error: ", error);
            }
        }

};
//*************************************************************** */
//             the module exports
//***************************************************************** */
module.exports = partyController;