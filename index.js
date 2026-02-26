let express = require('express');
let app = express();
app.get('/', function (req, res) {
 res.send('Привіт, мій друже!');
});

app.listen(3000, function() {
    console.log("Сервер працює на порту 3000!");
});
