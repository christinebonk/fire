var db = require("../models");
var bodyparser = require("body-parser");
const path = require("path");



function routes(app) {
	
	app.get("/profile", function(req,res,next) {
		var user = req.user.userid;
		if (!user) {
			user = req.user;
		}
		console.log(user);

		db.User.findAll({where: {id: user}}).then(function(result) {
			res.json(result);
		});
	})
}

module.exports = routes;