'use strict'
const  router = require('express').Router();

const  serviceController = require('../controllers/serviceController');
//***************************************** ***************/
//                 the post service
//******************************************************** */
router.route("/services").post((req, res, next) => serviceController.create(req, res, next) );
//************************************************************** */
//                  the get service
//********************************************************* */
router.route("/services").get((req, res, next) => serviceController.getAll(req, res, next) );
//*************************************************************************************** */
// The get id service
//**************************************************************************************** */
router.route("/services/:id").get((req, res, next) => serviceController.get(req, res, next) );
// faire la cocrection du registre id service
//************************************************************************************ */
//                        the delete service
//************************************************************************************* */
router.route("/services/:id").delete((req, res, next) => serviceController.deletet(req, res, next) );
//  export the serviceController to use in the route files
//********************************************************** */
module.exports = router;