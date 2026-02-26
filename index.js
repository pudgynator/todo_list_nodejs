let express = require('express');
let bodyParser = require("body-parser");
let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

let task = ["Опанувати JavaScript", "Опанувати Node.js"];
app.post("/addnewtask", function (req, res) {
    let newTask = req.body.newtask;
    task.push(newTask);
    res.redirect("/");
});


app.get("/", function (req, res) {
    res.render("index", { task: task });
});

app.listen(3000, function() {
    console.log("Сервер працює на порту 3000!");
});


