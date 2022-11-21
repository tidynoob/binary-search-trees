import Tree from "./Tree";

function randomNum (max, min = 0) {
    if (min < 0) throw "Min must be greater than or equal to 0"
    let num = Math.floor(Math.random() * max);
    while (num < min) {
        num = Math.floor(Math.random() * max);
    }
    return num
}

function randomArray (n, max, min = 0) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        const num = randomNum(max);
        arr.push(num);
    }
    return arr
}

const tree = Tree(randomArray(10, 100));
tree.prettyPrint();
console.log("Is the tree balanced?", tree.isBalanced());
console.log("Level Order: ", tree.levelOrder());
console.log("Pre Order: ", tree.preOrder());
console.log("Post Order: ", tree.postOrder());
console.log("In Order: ", tree.inOrder());
let newNum = randomNum(1000, 100);
tree.insertVal(newNum);
console.log("Inserted: ", newNum);
newNum = randomNum(1000, 100);
tree.insertVal(newNum);
console.log("Inserted: ", newNum);
newNum = randomNum(1000, 100);
tree.insertVal(newNum);
console.log("Inserted: ", newNum);
newNum = randomNum(1000, 100);
tree.insertVal(newNum);
console.log("Inserted: ", newNum);
newNum = randomNum(1000, 100);
tree.insertVal(newNum);
console.log("Inserted: ", newNum);
console.log("Is the tree balanced?", tree.isBalanced());
tree.prettyPrint();
tree.rebalance();
console.log("Tree rebalanced");
console.log("Is the tree balanced?", tree.isBalanced());
tree.prettyPrint();
console.log("Level Order: ", tree.levelOrder());
console.log("Pre Order: ", tree.preOrder());
console.log("Post Order: ", tree.postOrder());
console.log("In Order: ", tree.inOrder());