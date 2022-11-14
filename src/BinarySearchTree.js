import Node from "./Node";

const Tree = (arr) => {
  const sortedArray = arr.sort((a, b) => a - b);
  const dedupedArray = sortedArray.filter(
    (item, index) => sortedArray.indexOf(item) === index
  );

  const buildTree = (array) => {
    if (array.length === 0) return null;

    const mid = Math.floor(array.length / 2);
    const node = new Node(array[mid]);

    node.left = buildTree(array.slice(0, mid));

    node.right = buildTree(array.slice(mid + 1));

    return node;
  };

  const root = buildTree(dedupedArray);

  const insert = (value, checkNode = root) => {
    let node = checkNode;
    if (node === null) {
      const newNode = new Node(value);
      node = newNode;
      // console.log("inserted", value);
      // console.log("node", node);
      return node;
    }
    if (value < node.value) {
      node.left = insert(value, node.left);
    } else if (value > node.value) {
      node.right = insert(value, node.right);
    }
    // if (node.value === value) return node;

    return node;
  };

  const prettyPrint = (node = root, prefix = "", isLeft = true) => {
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
    root,
    insert,
    prettyPrint,
  };
};

export default Tree;
