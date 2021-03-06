const { exec } = require("child_process");
const os = require("os");
const path = require("path");
const chalk = require("chalk");
const generateDockerCommandFromArgsAndConfigFile = require("./lib/generateDockerCommandFromArgsAndConfigFile");
const parseConfigFileWithTemplate = require("./lib/parseConfigFileWithTemplate");
const readFirstEncounteredFileOrNull = require("./lib/readFirstEncounteredFileOrNull");

async function runDockerWithProperties(args) {
  const configBuffer = await readFirstEncounteredFileOrNull([
    ".drrc.json",
    path.join(os.homedir(), ".drrc.json"),
    path.join(os.homedir(), "config", ".drrc.json"),
    path.join("etc", ".drrc.json")
  ]);
  const config = configBuffer.toString();

  const parsedConfig = await parseConfigFileWithTemplate(config || "");
  const dockerCommand = generateDockerCommandFromArgsAndConfigFile(
    args,
    parsedConfig
  );

  // FIXME: Use logger
  console.log(chalk.green(dockerCommand));
  const { stdout, stderr } = await exec(dockerCommand);

  stdout.pipe(process.stdout);
  stderr.pipe(process.stderr);
}

runDockerWithProperties(process.argv.slice(2)).catch(console.error);
