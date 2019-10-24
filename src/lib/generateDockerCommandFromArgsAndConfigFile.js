function generateDockerCommandFromArgsAndConfigFile(
  command,
  args = [],
  config = {}
) {
  const configuredArgs = args;

  if (command !== "build") {
    throw new Error(`${command} not implemented!`);
  }

  if (config.proxy) {
    configuredArgs.push(
      `--build-arg http_proxy=${config.proxy} --build-arg https_proxy=${config.proxy}`
    );
  }

  const dockerCommand = `docker ${command} ${args.join(" ")}`.trim();
  return dockerCommand;
}

module.exports = generateDockerCommandFromArgsAndConfigFile;
