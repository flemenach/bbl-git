// Graph pull sans commit local - origin/branch1
var gitgraph = new GitGraph({
  template: "metro",
  orientation: "vertical-reverse",
  mode: "compact",
  elementId: "graph-pull-1-origin",
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
  tagColor: 'grey',
  displayTagBox: false,
}).commit({
  tag: "D",
  tagColor: 'grey',
  displayTagBox: false,
});

// Graph pull sans commit local - local/branch1
var gitgraph2 = new GitGraph({
  template: "metro",
  orientation: "vertical-reverse",
  mode: "compact",
  elementId: "graph-pull-1-local",
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
  tag: "C",
  tagColor: 'grey',
  displayTagBox: false,
});

// Graph pull sans commit local - origin/branch1
var gitgraph3 = new GitGraph({
  template: "metro",
  orientation: "vertical-reverse",
  mode: "compact",
  elementId: "graph-pull-1-local-updated",
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
  tagColor: 'grey',
  displayTagBox: false,
}).commit({
  tag: "D",
  tagColor: 'grey',
  displayTagBox: false,
});
