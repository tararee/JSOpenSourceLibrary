var router = require('express').Router();
var sequelize = require('../db');
var User = sequelize.import('../models/user');
var Definition = sequelize.import('../models/definition');

router.post('/', function(req, res) {
    var description = req.body.definition.description;
    var logType= req.body.definition.logType; 
    var userid = req.body.definition.userid;

  	Definition 
	    .create({ 
	    	description: description,
	    	logType: logType
	    })
	    .then(
	    	function createSuccess(definition) {
	    		User.findById(userid)
	    		.then(
	    			function(user) {
						definition.setUser(user);
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