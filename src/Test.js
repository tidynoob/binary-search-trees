// import Node from './Node.js';
import Tree from "./Tree";
// import otherTree from "./other/other";

const tree = Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);

// tree.prettyPrint();
// tree.insert(5);
// tree.prettyPrint();
tree.insertVal(2);
tree.prettyPrint();
tree.deleteVal(8);
tree.prettyPrint();
console.log(tree.findVal(6345));
