import Node from "./Node";

const BinarySearchTree = (arr) => {
  // console.log("arr", arr);
  const sortedArray = arr.sort((a, b) => a - b);
  // console.log("sortedArray", sortedArray);
  const dedupedArray = sortedArray.filter(
    (item, index) => sortedArray.indexOf(item) === index
  );
  // console.log("dedupedArray", dedupedArray);

  const buildTree = (array) => {
    if (array.length === 0) return null;

    const mid = Math.floor(array.length / 2);
    const node = new Node(array[mid]);
    // console.log("array", array);
    // console.log("node", node);
    // console.log("leftArray", array.slice(0, mid));

    node.left = buildTree(array.slice(0, mid));
    // console.log("leftNode", node.left);
    node.right = buildTree(array.slice(mid + 1));
    // console.log("node", node);

    return node;
  };

  const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    // eslint-disable-next-line no-console
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

  return {
    root: buildTree(dedupedArray),
    prettyPrint: prettyPrint(buildTree(dedupedArray)),
  };
};

export default BinarySearchTree;
