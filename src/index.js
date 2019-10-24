const runDockerWithProperties = require("./lib/runDockerWithProperties");

runDockerWithProperties(process.argv.slice(2)).catch(console.error);
