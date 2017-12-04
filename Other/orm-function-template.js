var connection = require("./connection.js");

var orm = {
  select: function(whatToSelect, tableInput) {
    var queryString = /* Fill in Query String */;
    
    connection.query(queryString, [whatToSelect, tableInput], function(err, result) {
      /* If there's an error, print it.
         Otherwise, print 'result' */
    });
  },
  selectWhere: function(tableInput, colToSearch, valOfCol) {
    var queryString = /* Fill in Query String */;

    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      /* If there's an error, print it.
         Otherwise, print 'result' */
    });
  },
  leftJoin: function(whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol) {
    var queryString = /* Fill in Query String */;

    connection.query(queryString, [whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol], function(err, result) {
      /* If there's an error, print it.
         Otherwise, print 'result' */
    });
  }
};

module.exports = orm;
