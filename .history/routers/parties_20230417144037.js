'use strict'
const  router = require('express').Router();

const  partyController = require("../controllers/partyController");
//***************************************** ***************/
//                 the post service
//******************************************************** */
router.route("/parties").post((req, res, next)=> partyController.create(req)

module.exports = router;