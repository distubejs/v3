import DocsSource from "./DocsSource";

export default new DocsSource({
  id: "JS-DisTube",
  name: "JS DisTube",
  repo: "skick1234/DisTube",
  global: "DisTube",
  branch: "js-docs",
  defaultTag: "beta",
  branchFilter: branch => branch === "v2",
  tagFilter: tag => tag === "3.0.0-beta.33",
  defaultClass: "DisTube",
});
