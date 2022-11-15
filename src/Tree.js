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

  const insertVal = (value, checkNode = root) => {
    let node = checkNode;
    if (node === null) {
      const newNode = new Node(value);
      node = newNode;
      // console.log("inserted", value);
      // console.log("node", node);
      return node;
    }
    if (value < node.value) {
      node.left = insertVal(value, node.left);
    } else if (value > node.value) {
      node.right = insertVal(value, node.right);
    }
    // if (node.value === value) return node;

    return node;
  };

  const getMinNode = (node) =>
    node.left === null ? node : getMinNode(node.left);

  const deleteVal = (value, checkNode = root) => {
    let node = checkNode;
    if (node === null) {
      return node;
    }
    if (value < node.value) {
      node.left = deleteVal(value, node.left);
    } else if (value > node.value) {
      node.right = deleteVal(value, node.right);
    } else if (value === node.value) {
      if (node.left === null && node.right === null) {
        node = null;
      } else if (node.left === null) {
        node = node.right;
      } else if (node.right === null) {
        node = node.left;
      } else {
        const minNode = getMinNode(node.right);
        node.value = minNode.value;
        node.right = deleteVal(minNode.value, node.right);
      }
    }
    return node;
  };

  const findVal = (value, checkNode = root) => {
    const node = checkNode;
    if (node === null) {
      return node;
    }
    if (value < node.value) {
      return findVal(value, node.left);
    }
    if (value > node.value) {
      return findVal(value, node.right);
    }
    if (value === node.value) {
      return node;
    }
    return undefined;
  };

  const levelOrder = (node = root, callback = null) => {
    const queue = [node];
    const levelOrderArr = [];
    while (queue.length > 0) {
      const currentNode = queue.shift();
      levelOrderArr.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    if (callback) {
      return levelOrder.map((num) => callback(num));
    }
    return levelOrderArr;
  };

  const inOrder = (node = root, callback = null, inOrderArr = []) => {
    if (node !== null) {
      inOrder(node.left, callback, inOrderArr);
      inOrderArr.push(node.value);
      inOrder(node.right, callback, inOrderArr);
    }
    if (callback) {
      return inOrderArr.map((num) => callback(num));
    }
    return inOrderArr;
  };

  const preOrder = (node = root, callback = null, preOrderArr = []) => {
    if (node !== null) {
      preOrderArr.push(node.value);
      preOrder(node.left, callback, preOrderArr);
      preOrder(node.right, callback, preOrderArr);
    }
    if (callback) {
      return preOrderArr.map((num) => callback(num));
    }
    return preOrderArr;
  };

  const postOrder = (node = root, callback = null, postOrderArr = []) => {
    if (node !== null) {
      postOrder(node.left, callback, postOrderArr);
      postOrder(node.right, callback, postOrderArr);
      postOrderArr.push(node.value);
    }
    if (callback) {
      return postOrderArr.map((num) => callback(num));
    }
    return postOrderArr;
  };

  const height = (node = root, h = 0) => {
    if (node === null) {
      return h - 1;
    }
    const leftHeight = height(node.left, h + 1);
    const rightHeight = height(node.right, h + 1);
    // console.log(
    //   "node: ",
    //   node.value,
    //   "leftHeight: ",
    //   leftHeight,
    //   "rightHeight: ",
    //   rightHeight
    // );
    return Math.max(leftHeight, rightHeight);
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
    insertVal,
    deleteVal,
    findVal,
    levelOrder,
    inOrder,
    preOrder,
    postOrder,
    height,
    prettyPrint,
  };
};

export default Tree;
