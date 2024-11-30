var fs = require("fs");
var leituraSync = function (arquivo) {
  console.log("Fazendo leitura Sync!");
  var inicio = new Date().getTime();
  fs.readFileSync(arquivo);
  var fim = new Date().getTime();
  console.log("Bloqueio Sync!: " + (fim - inicio) + "ms");
};
module.exports = leituraSync;
