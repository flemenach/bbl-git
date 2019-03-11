// var gitgraph = new GitGraph();
var gitgraph = new GitGraph({
  template: "metro",
  orientation: "vertical-reverse",
  mode: "compact",
  elementId: "graph1",
});
var master = gitgraph.branch("master");
master.commit();
var develop = gitgraph.branch("develop");
master.commit().commit();
develop.commit()

develop.commit({
  author: "Jacky <prince@dutunning.com>",
  tag: "HEAD",
  tagColor: 'red',
  displayTagBox: false,
  onClick: function(commit) {
    console.log("Oh, you clicked my commit?!", commit);
  }
});
