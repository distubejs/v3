import DocsSource from './DocsSource';

const branchBlacklist = new Set(['docs']);
export default new DocsSource({
  id: 'distube',
  name: 'DisTube',
  repo: 'skick1234/DisTube',
  defaultTag: 'v3-dev',
  branchFilter: branch => !branchBlacklist.has(branch) && !branch.startsWith('dependabot/'),
  tagFilter: () => false,
  defaultClass: 'DisTube',
});
