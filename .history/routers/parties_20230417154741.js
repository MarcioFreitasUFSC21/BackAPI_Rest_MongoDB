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
//***************************************** ***************/
//                 the get  party service
//******************************************************** */
router.route("/parties/:id").get((req, res, next)=> partyController.get(req, res, next));
//***************************************** ***************/
//                 the delete  party service
//******************************************************** */
router.route("/parties/:id").delete((req, res, next)=> partyController.delete(req, res, next));


module.exports = router;