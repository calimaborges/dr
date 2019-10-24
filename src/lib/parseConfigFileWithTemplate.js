const internalIp = require("internal-ip");
const ejs = require("ejs");
const jsonc = require("jsonc");

async function parseConfigFileWithTemplate(configJson) {
  const internalIpV4 = await internalIp.v4();
  const internalIpV6 = await internalIp.v6();

  return jsonc.parse(ejs.render(configJson, { internalIpV4, internalIpV6 }));
}

module.exports = parseConfigFileWithTemplate;
