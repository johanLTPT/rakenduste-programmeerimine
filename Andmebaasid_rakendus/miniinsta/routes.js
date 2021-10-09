exports.index = function(req,res){
    res.send('<h1>Hello</h1>');
};
exports.default = function(req,res){
    res.status('404');
    res.send('<h1>Invaliidne route</h1>');
};
let sql = require('./sql');

exports.users = function(req, res) {
let query = 'select * from dbo.[User]';
if (typeof(req.params.id) !== 'undefined') {
    query = query.concat(' where id=' + req.params.id);
    }
let result = sql.querySql(query, function(data) {
if (data !== undefined){
    console.log('DATA rowsAffected: ' + data.rowsAffected);
    res.send(data.recordset);
    }
    }, function(err) {
    console.log('ERROR: ' + err);
    res.status(500).send('ERROR: ' + err);
    });
}