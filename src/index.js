const { exec } = require("child_process");
const internalIp = require("internal-ip");
const generateDockerCommandFromArgsAndConfigFile = require("./generateDockerCommandFromArgsAndConfigFile");

async function runDockerWithProperties([command, ...args]) {
  const internalIpV4 = await internalIp.v4();
  const dockerProxy = `http://${internalIpV4}:3128`;

  if (command !== "build") {
    throw new Error(`${command} not implemented!`);
  }

  const { stdout, stderr } = await exec(
    generateDockerCommandFromArgsAndConfigFile(command, args, { dockerProxy })
  );

  stdout.pipe(process.stdout);
  stderr.pipe(process.stderr);
}

let args = process.argv.slice(2);

runDockerWithProperties(args).catch(console.error);
