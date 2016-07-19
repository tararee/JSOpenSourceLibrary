var jwt = require('jsonwebtoken');
var sequelize = require('../db');
var User = sequelize.import('../models/user');
var constants = require('../config/constants');

module.exports = function(req, res, next) {
    var sessionToken = req.headers.authorization;

    if (!req.body.user && sessionToken) {
      jwt.verify(sessionToken, constants.JWT_SECRET, function(err, decodedId) {
        console.log(decodedId);
          if (decodedId) {
            User.findOne({ where: { id: decodedId} }).then(function(user) {
                req.user = user;
                next();
            }, function() {
              res.status(401).send({error: 'not authorized' });
            });
          } else {
            res.status(401).send({error: 'not authorized' });
          }
      });
    } else {
      next();
    }
};