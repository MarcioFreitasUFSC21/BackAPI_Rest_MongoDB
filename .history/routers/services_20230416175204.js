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
//  export the serviceController to use in the route files
//********************************************************** */
module.exports = router;