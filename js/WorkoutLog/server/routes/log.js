var router = require('express').Router();
var sequelize = require('../db');
var Log = sequelize.import('../models/log');
var User = sequelize.import('../models/user');
var Definition = sequelize.import('../models/definition');

router.post('/', function(req, res) {
    var description = req.body.log.description;
    var result = req.body.log.result; 
    var userid = req.body.log.userid;
    var definitionid = req.body.log.definitionid;

    // Use our sequlize model to create user
   Log 
	    .create({ 
	    	description: description,
	    	result: result
	    })
	    .then(
	    	function createSuccess(log) {
	    		User.findById(userid)
	    		.then(
	    			function(user) {
						log.setUser(user);
		    		}, 
		    		function(err) {
		    			console.log(err);
		    		}
		    	);
		    	
		    	Definition.findById(definitionid)
		    	.then(
		    		function(definition) {
		    			log.setDef(definition);
		    		},
		    		function(err) {
		    			console.log(err);
		    		}
		    	);

	    	}, 
		    function createError(err) {
		        res.send(500, err.message);
		    }
	    );
});

/* 
LAB for students
Get them to build the fetch all for both log and definition
for history
*/

module.exports = router;