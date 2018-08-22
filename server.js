const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// settings:
app.set('port', process.env.PORT || 3000);

// middlewares:
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.get('/', (req, res) => {
	res.send('Response From Server: GET Request Succeed!');
	console.log('SERVER LOG on GET Request');
});

app.post('/', (req, res) => {
	res.send('Response From Server: POST Request Succeed!');
	console.log('SERVER LOG on POST Request: ' + JSON.stringify(req.body));
});

app.listen(app.get('port'), () => {
	console.log ("Server on port", app.get('port'))
});
