// Graph pull avec commit local - origin/branch1
var gitgraph = new GitGraph({
  template: "metro",
  orientation: "vertical-reverse",
  mode: "compact",
  elementId: "graph-pull-3-origin",
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
  elementId: "graph-pull-3-local",
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
  tagColor: 'blue',
  displayTagBox: false,
});

// Graph pull avec commit local - origin/branch1
var gitgraph3 = new GitGraph({
  template: "metro",
  orientation: "vertical-reverse",
  mode: "compact",
  elementId: "graph-pull-3-local-updated",
});
gitgraph3.branch("branch1");
gitgraph3.commit({
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
}).commit({
  tag: "D",
  tagColor: 'blue',
  displayTagBox: false,
});