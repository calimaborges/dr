function generateDockerCommandFromArgsAndConfigFile(args = [], config = {}) {
  const configuredArgs = args;
  const command = args.length > 0 ? args[0] : null;

  if (config.proxy) {
    if (command === "build") {
      configuredArgs.push(
        `--build-arg http_proxy=${config.proxy} --build-arg https_proxy=${config.proxy}`
      );
    }
  }

  const dockerCommand = `docker ${args.join(" ")}`.trim();
  return dockerCommand;
}

module.exports = generateDockerCommandFromArgsAndConfigFile;
