// Graph pull avec commit local - origin/branch1
var gitgraph = new GitGraph({
  template: "metro",
  orientation: "vertical-reverse",
  mode: "compact",
  elementId: "graph-pull-2-origin",
});
gitgraph.branch("branch1");
gitgraph.commit({
  tag: "A",
  tagColor: 'grey',
  displayTagBox: false,
}).commit({
  tag: "B",
  tagColor: 'grey',
  displayTagBox: false,
}).commit({
  tag: "C",
  tagColor: 'red',
  displayTagBox: false,
});

// Graph pull avec commit local - local/branch1
var gitgraph2 = new GitGraph({
  template: "metro",
  orientation: "vertical-reverse",
  mode: "compact",
  elementId: "graph-pull-2-local",
});
gitgraph2.branch("branch1");
gitgraph2.commit({
  tag: "A",
  tagColor: 'grey',
  displayTagBox: false,
}).commit({
  tag: "B",
  tagColor: 'grey',
  displayTagBox: false,
}).commit({
  tag: "D",
  tagColor: 'red',
  displayTagBox: false,
});

// Graph pull avec commit local - origin/branch1
var gitgraph3 = new GitGraph({
  template: "metro",
  orientation: "vertical-reverse",
  mode: "compact",
  elementId: "graph-pull-2-local-updated",
});
var branch1 = gitgraph3.branch("branch1");
gitgraph3.commit({
  tag: "A",
  tagColor: 'grey',
  displayTagBox: false,
}).commit({
  tag: "B",
  tagColor: 'grey',
  displayTagBox: false,
});
var branch2 = gitgraph3.branch('branch2')
branch2.commit({
  tag: "C & D",
  tagColor: 'grey',
  displayTagBox: false,
});
branch1.commit();
branch2.merge(branch1, {
  tag: "E (merge)",
  tagColor: 'grey',
  displayTagBox: false,
});