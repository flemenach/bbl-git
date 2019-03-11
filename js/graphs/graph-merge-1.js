var gitgraph = new GitGraph({
  template: "metro",
  orientation: "horizontal",
  mode: "compact",
  elementId: "graph-merge-1",
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

var gitgraph2 = new GitGraph({
  template: "metro",
  orientation: "horizontal",
  mode: "compact",
  elementId: "graph-merge-2",
});
var master2 = gitgraph2.branch("master2");
master2.commit();
var branch2 = gitgraph2.branch("branch2");
master2.commit();
branch2.commit().commit({
  tag: "branch-1",
  tagColor: 'grey',
  displayTagBox: false,
});
master2.commit();
branch2.merge(master2);
