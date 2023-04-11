const client = require("prom-client");

const hitrootCounter = new client.Counter({
  name: "hit_root_path",
  help: "hit_root_path_express",
});
module.exports = hitrootCounter;
