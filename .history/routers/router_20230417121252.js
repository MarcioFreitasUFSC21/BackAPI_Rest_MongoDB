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
const  partyRouter = require('./services');
//********************************************************* */
//  export the serviceController to use in the route files
//********************************************************** */
module.exports = router;