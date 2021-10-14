exports.index = function(req,res){
    res.send('<h1>Hello</h1>');
};
exports.apiIndex = function(req,res){
    let model = {
        title: 'api index',
        api: [
            { name:'users', url: '/api/users'},
            { name:'user by ID', url: '/api/users/1'},
            { name:'Front Page', url: '/api/frontpage'},
            {name:'users', url: '/api/users'}
        ],
    }
    res.render('api-index', model);
};
exports.users = function(req, res) {
let query = 'select * from dbo.[User]';
// If there's an ID passed along
if (typeof(req.params.id) !== 'undefined') {
    if (isNumber(req.params.id)) {
    query = query.concat(' where id=' + req.params.id);
    } else {
    query = query.concat(' where Username=\'' + req.params.id + '\'');
    }
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
exports.default = function(req,res){
    res.status('404');
    res.send('<h1>Invaliidne route</h1>');
};
let sql = require('./sql');

exports.users = function(req, res) {
let query = 'select * from dbo.[User]';
// If there's an ID passed along
if (typeof(req.params.id) !== 'undefined') {
    if (isNumber(req.params.id)) {
    query = query.concat(' where id=' + req.params.id);
    } else {
    query = query.concat(' where Username=\'' + req.params.id + '\'');
    }
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
exports.frontpage= function(req,res){
    let username = "cbaccup3b";
    let query = `
    SELECT Post.ID as PostID,
    PostMedia.MediaTypeID, MediaFileUrl
    FROM Post inner join
    [User] on Post.UserID = [User].ID inner join
    PostMedia on Post.ID = PostMedia.PostID
    Where Username = '${username}'
    order by Post.CreationTime desc, PostID desc
    `;
// If there's an ID passed along
if (typeof(req.params.id) !== 'undefined') {
    if (isNumber(req.params.id)) {
    query = query.concat(' where id=' + req.params.id);
    } else {
    query = query.concat(' where Username=\'' + req.params.id + '\'');
    }
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
};
exports.profilePage= function(req,res){
    let username = '';

    let query =` DECLARE @Username nvarchar(50) = 'cbaccup3b';
    SELECT  [User].id, Username, Website, Description, ImageUrl,
        (SELECT count(Post.ID) FROM post where Post.UserID = [User].ID) as PostCount,
        (SELECT count(FolloweeID) FROM Following where [User].id = Following.FolloweeID) as FollowerCount,
        (SELECT count(FollowerID) FROM Following where [User].id = Following.FollowerID) as FollowingCount
        FROM [User]
    where Username = '${username}';
    SELECT Post.ID as PostID,
    PostMedia.MediaTypeID, MediaFileUrl
    FROM Post inner join
    [User] on Post.UserID = [User].ID inner join
    PostMedia on Post.ID = PostMedia.PostID
    Where Username = '${username}'
    order by Post.CreationTime desc, PostID desc`
    // If there's an ID passed along
    if (typeof(req.params.id) !== 'undefined') {
        if (isNumber(req.params.id)) {
        query = query.concat(' where id=' + req.params.id);
        } else {
        query = query.concat(' where Username=\'' + req.params.id + '\'');
        }
        }
    let result = sql.querySql(query, function(data) {
        let profile = data.recordsets[0][0];
        if(data.recirdsets.lenght > 1){
        let posts = data.recordsets[1];
        if(post !== 'undefined'){
        profile.posts = posts;}
        }
        }, function(err) {
        console.log('ERROR: ' + err);
        res.status(500).send('ERROR: ' + err);
        });
};
exports.postDetails= function(req,res){
    res.status('404');
    res.send('<h1>Invaliidne route</h1>');
};
exports.statistics= function(req,res){
    res.status('404');
    res.send('<h1>Invaliidne route</h1>');
};
exports.top10CommentedUsers= function(req,res){
    res.status('404');
    res.send('<h1>Invaliidne route</h1>');
};
exports.userRegistrations= function(req,res){
    res.status('404');
    res.send('<h1>Invaliidne route</h1>');
};
exports.genderDivision= function(req,res){
    res.status('404');
    res.send('<h1>Invaliidne route</h1>');
};

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
    }