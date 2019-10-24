const fs = require("fs");

async function readFirstEncounteredFileOrNull(files) {
  const readableFiles = await Promise.all(
    files.map(async function(file) {
      try {
        await fs.promises.access(file, fs.constants.F_OK | fs.constants.R_OK);
        return file;
      } catch (error) {
        return false;
      }
    })
  );

  const foundFile = readableFiles.find(function(file) {
    return file;
  });

  if (foundFile.length < 1) {
    return null;
  } else {
    return fs.promises.readFile(foundFile);
  }
}

module.exports = readFirstEncounteredFileOrNull;
