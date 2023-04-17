'use strict'
const  router = require('express').Router();

const  partyController = require("../controllers/partyController");
//***************************************** ***************/
//                 the post  party service
//******************************************************** */
router.route("/parties").post((req, res, next)=> partyController.create(req, res, next));

module.exports = router;