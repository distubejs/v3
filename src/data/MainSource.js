import semver from "semver";
import DocsSource from "./DocsSource";

const branchBlacklist = new Set(["docs", "js-docs", "v2"]);
export default new DocsSource({
  id: "DisTube",
  name: "DisTube",
  repo: "skick1234/DisTube",
  global: "DisTube",
  branch: "docs",
  defaultTag: "main",
  branchFilter: branch => !branchBlacklist.has(branch),
  tagFilter: tag => semver.gte(tag, "4.0.0"),
  defaultFile: { category: "general", id: "welcome" },
});
