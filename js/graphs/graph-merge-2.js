var gitgraph = new GitGraph({
  template: "metro",
  orientation: "horizontal",
  mode: "compact",
  elementId: "graph-merge-ff-1",
});
var master = gitgraph.branch("master");
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
  elementId: "graph-merge-ff-2",
});
var master2 = gitgraph2.branch("master2");
master2.commit().commit().commit().commit().commit();
