'use strict'
const PartyModel = require('../modells/Party');
//***************************************** ***************/
//             auxiliary function
//******************************************************** */
const checkPartyBudget = (budget, services) => {
    const priceSum = services.reduce((sum, services) => sum + services.price,0);
    console.log(priceSum, budget);
    if (priceSum > budget){
        return false;
    }
    return true; 
};
//********************************************************** */
//            the service funcionality main function
//********************************************************** */
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
                if(party.services && !checkPartyBudget(party.budget, party.services) ){
                res.status(406).json({msg: "the budget is insufficient"});
                return;
                }
                const response = await PartyModel.create(party);
                res.status(201).json({response, msg: "party successfully created!"});
            } catch (error) {
                console.log("error: ", error);
            }
        },
        getAll: async (req, res, next) => {
            try {
                const parties = await PartyModel.getAll();
                res.status(200).json({parties: parties, msg: "party successfully"});
            } catch (error) {
                console.log("error: ", error);
            }
        },
        get: async (req, res, next) => {
            try {
                const id = req.params.id;
                const party = await PartyModel.findById(id);
                if(!party){
                    res.status(404).json({msg: "party not found"})
                }
                res.status(200).json({parties: parties, msg: "party successfully"});
            } catch (error) {
                console.log("error: ", error);
            }

        }
};
//*************************************************************** */
//             the module exports
//***************************************************************** */
module.exports = partyController;