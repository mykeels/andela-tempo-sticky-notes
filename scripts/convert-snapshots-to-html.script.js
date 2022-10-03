const fg = require("fast-glob");
const { promises: fs } = require("fs");
const path = require("path");

(async () => {
  const cwd = path.join(__dirname, "../src");
  const outputDir = path.join(__dirname, "../dist/snapshots");
  const files = await fg(["**/*.snap", "**/*.stories.storyshot"], { cwd });
  await fs.mkdir(outputDir, { recursive: true });
  for (let file of files) {
    const content = require(path.join(cwd, file));

    const keys = Object.keys(content);
    for (let key of keys) {
      const keyFilename =
        key.replace(/[&\/\\#,+()$~%.'":*?<>{} ]/g, "-").replace("@", "") +
        ".html";
      await fs.writeFile(path.join(outputDir, keyFilename), content[key].replace(/className=/g, "class="), "utf8");
      console.log(keyFilename);
    }
  }
})();
