'use strict'
const  router = require('express').Router();

const  partyController = require("../controllers/partyController");
//***************************************** ***************/
//                 the post  party service
//******************************************************** */
router.route("/parties").post((req, res, next)=> partyController.create(req, res, next));
//***************************************** ***************/
//                 the get  party service
//******************************************************** */
router.route("/parties").get((req, res, next)=> partyController.getAll(req, res, next));


module.exports = router;