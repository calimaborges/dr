const { exec } = require("child_process");
const generateDockerCommandFromArgsAndConfigFile = require("./generateDockerCommandFromArgsAndConfigFile");
const parseConfigFileWithTemplate = require("./parseConfigFileWithTemplate");

async function runDockerWithProperties([command, ...args]) {
  const config = `{ "proxy": "http://<%= internalIpV4; %>:3128" }`;

  const parsedConfig = await parseConfigFileWithTemplate(config);
  const dockerCommand = generateDockerCommandFromArgsAndConfigFile(
    command,
    args,
    parsedConfig
  );

  // FIXME: Use logger
  console.log(dockerCommand);
  const { stdout, stderr } = await exec(dockerCommand);

  stdout.pipe(process.stdout);
  stderr.pipe(process.stderr);
}

module.exports = runDockerWithProperties;
