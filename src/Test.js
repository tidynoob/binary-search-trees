// import Node from './Node.js';
import Tree from "./Tree";
// import otherTree from "./other/other";

// const tree = Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
const tree = Tree([1, 2, 3]);

tree.insertVal(4);
tree.insertVal(5);
tree.prettyPrint();
console.log(tree.isBalanced());
tree.rebalance();
tree.prettyPrint();
console.log(tree.isBalanced());

// console.log(tree.height(tree.root.left));