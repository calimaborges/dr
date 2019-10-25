const generateDockerCommandFromArgsAndConfigFile = require("./generateDockerCommandFromArgsAndConfigFile");

test("generate command using passed args", function() {
  const dockerCommand = generateDockerCommandFromArgsAndConfigFile(["build"]);
  expect(dockerCommand).toBe("docker build");
});
