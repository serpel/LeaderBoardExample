var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser());

const port = process.env.PORT || 3000;

var server = app.listen(port, function () {
    console.log("hola mundo estoy vivo!!!!");
});

app.get('/api/leaderboard', function(req, res){
    console.log('lead endpoint');

    var result = [
            {
                Username: 'sergio',
                Points: 2000
            },
            {
                Username: 'alex',
                Points: 430
            },
            {
                Username: 'javier',
                Points: 100
            }
        ];

    res.send(result); 
});

app.post('/api/v1/student', function(req, res, next){
    console.log("Entro en post");
    var name = req.body.name || "";
    res.send(`El parametro mandado en el body es: ${name}`);
});