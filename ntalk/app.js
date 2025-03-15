var express = require("express");
var load = require("express-load");
var app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.cookieParser("ntalk"));
app.use(express.session());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.get("/", routes.index);
app.get("/usuarios", routes.user.index);

load("models").then("controllers").then("routes").into(app);

io.sockets.on('connection', function (client) {
  client.on('send-server', function (data) {
    var msg = "<b>"+data.nome+":</b> "+data.msg+"<br>";
    client.emit('send-client', msg);
  });
});

app.listen(3000, function () {
  console.log("Ntalk it's on! :)");
});
