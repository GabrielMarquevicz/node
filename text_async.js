var fs = require("fs");

for (var i = 1; i <= 50; i++) {
  var file = "async-txt" + i + ".txt";
  fs.writeFile(file, "Ola Node!", function (err, out) {
    console.log(out);
  });
}
