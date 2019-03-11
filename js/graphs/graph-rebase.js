var gitgraph = new GitGraph({
  template: "metro",
  orientation: "horizontal",
  mode: "compact",
  elementId: "graph-rebase-1",
});
var master = gitgraph.branch("master");
master.commit();
var branch1 = gitgraph.branch("branch1");
master.commit();
master.commit();
branch1.commit().commit({
  tag: "branch-1",
  tagColor: 'grey',
  displayTagBox: false,
});


var gitgraph2 = new GitGraph({
  template: "metro",
  orientation: "horizontal",
  mode: "compact",
  elementId: "graph-rebase-2",
});
var master2 = gitgraph2.branch("master2");
master2.commit();
master2.commit();
master2.commit();
var branch2 = gitgraph2.branch("branch1");
branch2.commit().commit({
  tag: "branch-1",
  tagColor: 'grey',
  displayTagBox: false,
});
