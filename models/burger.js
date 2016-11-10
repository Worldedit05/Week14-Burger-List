var orm = require('../config/orm.js');

// Model that will interface with the database
var burger = {
    selectAll: function(callback) {
        orm.selectAll('burgers', function(res) {
            callback(res);
        });
    },
    // cols and vals are arrays
    insertOne: function(cols, vals, callback) {
        orm.insertOne('burgers', cols, vals, function(res) {
            callback(res);
        });
    },
    updateOne: function(objColVals, condition, callback) {
        orm.updateOne('burgers', objColVals, condition, function(res) {
            callback(res);
        });
    }
};

module.exports = burger;
