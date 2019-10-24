function generateDockerCommandFromArgsAndConfigFile(
  command,
  args = [],
  config = {}
) {
  const configuredArgs = args;
  if (config.dockerProxy) {
    configuredArgs.push(
      `--build-arg http_proxy=${config.dockerProxy} --build-arg https_proxy=${config.dockerProxy}`
    );
  }
  const dockerCommand = `docker ${command} ${args.join(" ")}`.trim();
  console.log(dockerCommand);
  return dockerCommand;
}

module.exports = generateDockerCommandFromArgsAndConfigFile;
