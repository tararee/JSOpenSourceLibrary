// build a user model in sqllize
module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define('user', {
		username: { type: DataTypes.STRING, unique: true },
		passwordhash: DataTypes.STRING
	},{
	});

	return User;
};