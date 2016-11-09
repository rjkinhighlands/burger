var connection = require('./connection.js');

var orm ={
	selectAll: function(table,cb){
		var queryString = 'SELECT * FROM ' + table;

		connection.query(queryString, function(err, data){
			if(err) throw err;
			cb(data);
    	});	
	},
 
 	insert: function(table, column, burgerInput, cb){
 		var queryString = 'INSERT INTO ' + table + '(' + column +') VALUES (?)';

		connection.query(queryString, [burgerInput], function(err, data){
			if(err) throw err;
			cb(data);
    	});	
	},

	update: function(table, col, colVal, condition, conditionVal, cb){
 		var queryString = 'UPDATE ' + table + ' SET ' + col + '=?' + 'WHERE ' + condition + '=?';

		connection.query(queryString, [colVal, conditionVal], function(err, data){
			if(err) throw err;
			cb(data);
    	});	
	},

	delete: function(table, condition, conditionVal, cb){
 		var queryString = 'DELETE FROM ' + table + ' WHERE ' + condition + '=?';

		connection.query(queryString, [conditionVal], function(err, data){
			if(err) throw err;
			cb(data);
    	});
    }	
};

module.exports = orm;