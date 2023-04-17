'use strict';
const  router = require('express').Router();
//***************************************** ***************/
// the  router services
//******************************************************** */
const  serviceRouter = require('./services');
router.use('/', serviceRouter);
//***************************************** ***************/
// the  router services
//******************************************************** */
const  partyRouter = require(".\routers\parties.js");
router.use('/', partyRouter);
//********************************************************* */
//  export the serviceController to use in the route files
//********************************************************** */
module.exports = router;