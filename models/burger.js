var orm = require('../config/orm.js')

var burger = {
	selectAll: function(cb){
		orm.selectAll('burgers', function(res){
			cb(res);
		});
	},

//  getMenu: function(cb){
//    orm.selectAll('menu', function(res){
//     cb(res);
//    });
// },

	insert: function(cb){
		orm.insert('burgers', 'burger_name', val, function(res){
			cb(res);
		});
	},

	update: function(colVal, conditionVal, cb){
		orm.update('burgers', 'devoured', colVal, 'id', conditionVal, function(res){
			cb(res);
		});
	},

	delete: function(conditionVal, cb){
		orm.insert('burgers', 'id', conditionVal, function(res){
			cb(res);
		});
	}
},

module.exports = burger;