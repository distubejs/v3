import semver from "semver";
import DocsSource from "./DocsSource";

const branchBlacklist = new Set(["docs", "js-docs", "v2", "alpha"]);
export default new DocsSource({
  id: "DisTube",
  name: "TypeScript DisTube",
  repo: "skick1234/DisTube",
  global: "DisTube",
  branch: "docs",
  defaultTag: "beta",
  branchFilter: branch => !branchBlacklist.has(branch),
  tagFilter: tag => semver.gte(tag, "3.0.0") || semver.gte(tag, "3.0.0-beta.34"),
  defaultFile: { category: "general", id: "welcome" },
});
