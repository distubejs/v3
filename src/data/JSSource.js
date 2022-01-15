import DocsSource from "./DocsSource";

export default new DocsSource({
  id: "JS-DisTube",
  name: "DisTube V2",
  repo: "skick1234/DisTube",
  global: "DisTube",
  branch: "js-docs",
  defaultTag: "v2",
  branchFilter: branch => branch === "v2",
  tagFilter: () => false,
  defaultClass: "DisTube",
});
