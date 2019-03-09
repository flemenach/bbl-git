var gitgraph = new GitGraph({
  template: "metro",
  orientation: "vertical-reverse",
  mode: "compact",
  elementId: "graph-exemple",
});
var master = gitgraph.branch("master");
master.commit();
var branch1 = gitgraph.branch("branch1");
master.commit();
branch1.commit().commit({
  tag: "branch-1",
  tagColor: 'grey',
  displayTagBox: false,
});
master.commit();
branch1.merge(master);
master.commit({
  tag: "master",
  tagColor: 'grey',
  displayTagBox: false,
});
