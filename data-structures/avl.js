class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.height = 1;
    }

    get data() {}

    get left() {}

    get right() {}

    get height() {}

    set data(value) {}

    set left(value) {}

    set right(value) {}

    set height(value) {}
}

class AVL {
    root;

    constructor() {}

    getHeight(node) {}

    getBalance(node) {}

    rightRotation(node) {}

    leftRotation(node) {}

    leftRightRotation(node) {}

    rightLeftRotation(node) {}

    _insert(node, value) {
        
    }

    _contains(node, value) {}

    _inorder(node, result) {}

    _preOrder(node, result) {}

    _postOrder(node, result) {}

    _levelOrder(node, level, result) {}

    calculateHeigh(node) {}

    _remove(node, value) {}

    getMin(node = this.root) {}

    getMax(node = this.root) {}

    insertRecursive(value) {}

    containsRecursive(value) {}

    inOrderRecursive() {}

    preOrderRecursive() {}

    postOrderRecursive() {}

    levelOrderRecursive() {}

    removeRecursive(value) {}
}
