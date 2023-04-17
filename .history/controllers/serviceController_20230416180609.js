'use strict'
const { Service: serviceModel } = require('../modells/Service');
//***************************************** ***************/
//    the service funcionality function
//******************************************************** */
const  serviceController = {
    create: async (req, res, next) => {
        try {
            const service = {
                name: req.body.name, 
                description:req.body.description,
                price:  req.body.price,
                image: req.body.image
            };
            const response = await serviceModel.create(service);
            res.status(201).json({response, msg: "Le service est cree avec success!"});
            
        } catch (error) {
            console.log(error);
        }
    },
   getAll: async (req, res, next) => {
        try {
            const services = await serviceModel.find();
            res.status(200).json({services});
        }catch (error) {
            console.log(error); 
        }

    },
    get: async  (req, res, next) => {

        try {
            // id => url
            const id = req.params.id;
            const service = await serviceModel.findById(id);
            res.status(200).json({response, msg: "Le service est retornee avec success!"});
            // la condition de un problem dans les registres
            if(!service){
            res.status(404).json({response, msg: "Le service n'est pas retornee avec success!"});
            return;
            }

        } catch (error) {
            console.log(error);
        }
    },
    //******************************************************************************************* */
    delete: async (req, res, next) => {



    }

}
//********************************************************* */
//  export the serviceController to use in the route files
//********************************************************** */
module.exports = serviceController;