import DocsSource from './DocsSource';

const branchBlacklist = new Set(['docs', 'v3-dev']);
export default new DocsSource({
  id: 'distube',
  name: 'DisTube',
  repo: 'skick1234/DisTube',
  defaultTag: 'v3-beta',
  branchFilter: branch => !branchBlacklist.has(branch) && !branch.startsWith('dependabot/'),
  tagFilter: () => false,
  defaultClass: 'DisTube',
});
