const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function () {
    console.log('App listening on port ' + app.get('port'));
});