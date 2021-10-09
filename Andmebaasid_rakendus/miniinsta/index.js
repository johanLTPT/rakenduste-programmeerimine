let express = require('express');
let routes = require('./routes');
let app = express();

app.get('/', routes.index);
app.get('/api/users:id?', routes.users);
app.get('*', routes.default);


let server = app.listen(3000, function(){
    console.log('Listening on port 3000');
})