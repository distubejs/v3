import semver from "semver";
import DocsSource from "./DocsSource";

const branchBlacklist = new Set(["docs", "js-docs", "beta", "alpha"]);
export default new DocsSource({
  id: "JS DisTube",
  name: "JS DisTube",
  repo: "skick1234/DisTube",
  global: "DisTube",
  branch: "js-docs",
  defaultTag: "beta",
  branchFilter: branch => !branchBlacklist.has(branch) && !branch.startsWith("dependabot/"),
  tagFilter: tag => !semver.gte(tag, "3.0.0-beta.34"),
  defaultClass: "DisTube",
});
