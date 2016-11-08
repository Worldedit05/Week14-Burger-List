var orm = require('../config/orm.js');

// Model that will interface with the database
var burger = {
    selectAll: function(cb) {
        orm.all('cats', function(res) {
            callback(res);
        });
    },
    // cols and vals are arrays
    insertOne: function(cols, vals, cb) {
        orm.create('cats', cols, vals, function(res) {
            callback(res);
        });
    },
    updateOne: function(objColVals, condition, cb) {
        orm.update('cats', objColVals, condition, function(res) {
            callback(res);
        });
    }
};

module.exports = burger;
