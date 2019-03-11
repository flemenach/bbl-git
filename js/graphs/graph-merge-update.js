var gitgraph = new GitGraph({
  template: "metro",
  orientation: "horizontal",
  mode: "compact",
  elementId: "graph-merge-update",
});
var master = gitgraph.branch("master");
master.commit();
var branch1 = gitgraph.branch("branch1");
master.commit();
branch1.commit();
master.commit();
master.merge(branch1);
master.commit();
master.merge(branch1);
master.commit();

branch1.commit({
  tag: "branch-1",
  tagColor: 'grey',
  displayTagBox: false,
});
