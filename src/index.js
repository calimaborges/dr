const { exec } = require("child_process");
const internalIp = require("internal-ip");

async function runDockerWithProperties([command, imageName, ...args]) {
  const dockerContextFolder = ".";

  const internalIpV4 = await internalIp.v4();
  const dockerProxy = `http://${internalIpV4}:3128`;

  if (command !== "build") {
    throw new Error(`${command} not implemented!`);
  }

  const { stdout, stderr } = await exec(
    `docker ${command} -t ${imageName} --build-arg http_proxy=${dockerProxy} --build-arg https_proxy=${dockerProxy} ${dockerContextFolder} ${args.join(
      " "
    )}`
  );

  stdout.pipe(process.stdout);
  stderr.pipe(process.stderr);
}

let args = process.argv.slice(2);

runDockerWithProperties(args).catch(console.error);
