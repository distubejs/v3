import semver from "semver";
import DocsSource from "./DocsSource";

const branchBlacklist = new Set(["docs", "js-docs", "v2", "main"]);
export default new DocsSource({
  id: "DisTube",
  name: "DisTube",
  repo: "skick1234/DisTube",
  global: "DisTube",
  branch: "docs",
  defaultTag: "stable",
  branchFilter: branch => !branchBlacklist.has(branch),
  tagFilter: tag => semver.gte(tag, "3.0.0"),
  defaultFile: { category: "general", id: "welcome" },
});
