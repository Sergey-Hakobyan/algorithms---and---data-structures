const RED = 'RED';
const BLACK = 'BLACK';

class TreeNode {
    constructor(data, color = RED, parent = null, left = null, right = null) {
        this.data = data;
        this.color = color;
        this.parent = parent;
        this.left = left;
        this.right = right;
    }
}

class RBTree {
    constructor() {
        this.nil = new TreeNode(null);
        this.nil.color = BLACK;
        this.root = this.nil;
    }

    rightRotate(y) {
        
    }

    leftRotate(x) {
        
    }

insert(value) {
    const newNode = new TreeNode(value);

        if (this.root === this.nil) {
            this.root = newNode;
        } else {
            let parentNode = this.nil;
            let current = this.root;

            while (current !== this.nil) {
                parentNode = current;

                if (value < current.value) {
                    current = current.left;
                } else if (value > current.value) {
                    current = current.right;
                } else {
                    return;
                }
            }

            if (value < parentNode.value) {
                parentNode.left = newNode;
            } else {
                parentNode.right = newNode;
            }

            newNode.parent = parentNode;
        }

        newNode.left = this.nil;
        newNode.right = this.nil;
        newNode.color = RED;

        this.insertFixUp(newNode);
    }

insertFixUp(newNode) {
    while (newNode.parent.color === RED) {
        let gp = newNode.parent.parent;

        if (newNode.parent === gp.left) {
            let uncle = gp.right;

            if (uncle.color === RED) {
                newNode.parent.color = BLACK;
                uncle.color = BLACK;
                gp.color = RED;
                newNode = gp;
            } else {
                if (newNode === newNode.parent.right) {
                    newNode = newNode.parent;
                    this.leftRotate(newNode);
                }

                newNode.parent.color = BLACK;
                gp.color = RED;
                this.rightRotate(gp);
            }
        } else {
            let uncle = gp.left;

            if (uncle.color === RED) {
                newNode.parent.color = BLACK;
                uncle.color = BLACK;
                gp.color = RED;
                newNode = gp;
            } else {
                if (newNode === newNode.parent.left) {
                    newNode = newNode.parent;
                    this.rightRotate(newNode);
                }

                newNode.parent.color = BLACK;
                gp.color = RED;
                this.leftRotate(gp);
            }
        }
    }

    this.root.color = BLACK;
    }
}

const rb = new RBTree();

rb.insert(10);
rb.insert(20);
rb.insert(30);
rb.insert(15);
rb.insert(25);
rb.insert(5);

console.log(rb);