var fs = require("fs");

for (var i = i; i <= 5; i++) {
  var file = "sync-txt" + i + ".txt";
  var out = fs.writeFileSync(file, "Ola Node!");
  console.log(out);
}
