express = require('express');
path = require('path')

app = express();

app.use(express.static(__dirname + '/dist/kp-todos'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/kp-todos/index.html'));
});

port = process.env.PORT || 8080;
app.listen(port);

console.log('Application is running...');
