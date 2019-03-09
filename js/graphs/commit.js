// var gitgraph = new GitGraph();
var gitgraph = new GitGraph({
  template: "metro",
  orientation: "vertical-reverse",
  mode: "compact",
  elementId: "graph1",
  // commit: {
  //   widthExtension: 512,
  //   tag: {
  //     color: 'white',
  //   }
  // },
});
var master = gitgraph.branch("master");
master.commit();
var develop = gitgraph.branch("develop");
master.commit().commit();
develop.commit()

develop.commit({
  // dotColor: "white",
  // dotSize: 10,
  // dotStrokeWidth: 10,
  // sha1: "666",
  // sha1Display: true,
  // message: "Pimp dat commit",
  // messageDisplay: true,
  author: "Jacky <prince@dutunning.com>",
  // tag: "HEAD",
  tag: "HEAD",
  tagColor: 'red',
  displayTagBox: false,
  // tag: {
  //   color: 'white',
  // }
  onClick: function(commit) {
    console.log("Oh, you clicked my commit?!", commit);
  }
});

// var hotfix = gitgraph.branch({
//   parentBranch: develop,
//   name: "hotfix",
//   column: 2             // which column index it should be displayed in
// });

// hotfix.commit()


// var gitgraph2 = new GitGraph({
//   template: "metro",
//   orientation: "vertical-reverse",
//   mode: "compact",
//   elementId: "graph2",
// });
// var master2 = gitgraph2.branch("master");
// master2.commit();
// var develop2 = gitgraph2.branch("develop2");
// master2.commit().commit();
// develop2.commit()
