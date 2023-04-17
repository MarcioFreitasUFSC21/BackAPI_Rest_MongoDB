'use strict'
const PartyModel = require('../modells/Party');
//***************************************** ***************/
//            the service funcionality main function
//******************************************************** */
const partyController = {
        create: async(req, res, next) => {
            try {
                
                const party = {
                    title: req.body.title,
                    author: req.body.author,
                    description: req.body.description,
                    budget: req.body.budget,
                    image: req.body.image,
                    services: req.body.services,
                }
                // if buget < valor dos serviços então n != novo serviço
                if(party.services )
            } catch (error) {
                console.log("error: ", error);
            }
        }

};
//*************************************************************** */
//             the module exports
//***************************************************************** */
module.exports = partyController;