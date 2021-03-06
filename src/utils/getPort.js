const readEnv = require("./readEnv");
const { isProd } = require("./isEnv");

const getPort = () => {
  const portKey = isProd() ? "PROD_PORT" : "DEV_PORT";
  const port = parseInt(readEnv(portKey), 10);

  return port;
};

module.exports = getPort;
