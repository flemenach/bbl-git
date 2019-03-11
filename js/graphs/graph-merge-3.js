var gitgraph = new GitGraph({
  template: "metro",
  orientation: "horizontal",
  mode: "compact",
  elementId: "graph-merge-noff-1",
});
var master = gitgraph.branch("master2");
master.commit().commit().commit();
var branch1 = gitgraph.branch("branch1");
branch1.commit().commit({
  tag: "branch-1",
  tagColor: 'grey',
  displayTagBox: false,
});


var gitgraph2 = new GitGraph({
  template: "metro",
  orientation: "horizontal",
  mode: "compact",
  elementId: "graph-merge-noff-2",
});
var master2 = gitgraph2.branch("master");
master2.commit().commit().commit();
var branch2 = gitgraph2.branch("branch2");
branch2.commit().commit({
  tag: "branch-1",
  tagColor: 'grey',
  displayTagBox: false,
});
branch2.merge(master2);