class TreeNode {
    constructor(data) {
        this.value = data;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    // insert(value) {
    //     if(this.root === null){
    //         this.root = new TreeNode(value)

    //     }
    //     let curr = this.root

    //     while(curr){

    //         if(curr.value>value){
    //             if(!curr.left){
    //                 curr.left = new TreeNode(value)
    //                 return
    //             }
    //         curr = curr.left
    //         }

    //         else if(curr.value < value){
    //             if(!curr.right){
    //                 curr.right = new TreeNode(value)
    //                 return
    //             }
    //         curr = curr.right
    //         }
    //         else return
    //     }
    // }
    insert(value){
        const node = new TreeNode(value)
         if(!this.root){
            this.root = node
            return this.root
         }
         _insertRecursive(this.root, node)
    }
    _insertRecursive(current, node){
        if(current.value > value){
            if(!current.left){
                current.left = node
            }
            else{
                this._insertRecursive(current.left, node)
            }
        }
        else if(current.value < value){
            if(!current.right){
                current.right = node
            }
            else{
                this._insertRecursive(current.righ, node)
            }
        }
    }



    contains(value) {
        let curr = this.root
        while(curr){
            if (curr.value === value){
                return true
            }
           if(value > curr.value){
            curr = curr.right
           }
           if(value < curr.value){
            curr = curr.left
           } 
        }
        return false
    }

    inorder(node) {
        let result = []
        let stack = []
        let curr = this.root
        while(curr || stack.length > 0){
            while(curr){
                stack.push(curr)
                curr = curr.left
            }
            curr = stack.pop()
            result.push(curr.value)
            curr = curr.right
        }
        return result
    }

preorder() {
    let stack = [this.root]
    let curr = this.root

    while(stack.length>0){
        curr = stack.pop()
        result.push(curr)
        
        if(curr.right){
            stack.push(curr.right)
        }

        if(curr.left){
            stack.push(curr.left)
        }
    }


}
postorder() {
    let result = [];
    let stack = [];
    let curr = this.root;
    let prev = null;

    while (curr || stack.length > 0) {
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }

        curr = stack[stack.length - 1];

        if (curr.right && prev !== curr.right) {
            curr = curr.right;
        } else {
            result.push(curr.value);
            prev = curr;
            stack.pop();
            curr = null;
        }
    }

    return result;
}


    getMin(node) {
        if(!node){
            return null
        }
       while(node.left){
        node = node.left
       } 
       return node.value
    }

    getMax(node) {
        if(!node){
            return null
        }
        while(node.right){
            node = node.right
       } 
       return node.value
    }

remove(value) {
    if (!this.root) return

    if (this.root.value === value) {
        if (!this.root.left && !this.root.right) {
            this.root = null
            return
        }

        if (!this.root.left) {
            this.root = this.root.right
            return
        }

        if (!this.root.right) {
            this.root = this.root.left
            return
        }

        let minNode = this.root.right

        while (minNode.left) {
            minNode = minNode.left
        }

        this.root.value = minNode.value
        this._removeRecursive(this.root, minNode.value)
        return
    }

    this._removeRecursive(this.root, value)
}

_removeRecursive(current, value) {
    if (value < current.value) {
        if (!current.left) return

        if (current.left.value === value) {
            if (!current.left.left && !current.left.right) {
                current.left = null
            } else if (!current.left.left) {
                current.left = current.left.right
            } else if (!current.left.right) {
                current.left = current.left.left
            } else {
                let minNode = current.left.right

                while (minNode.left) {
                    minNode = minNode.left
                }

                current.left.value = minNode.value
                this._removeRecursive(current.left, minNode.value)
            }
        } else {
            this._removeRecursive(current.left, value)
        }
    } else if (value > current.value) {
        if (!current.right) return

        if (current.right.value === value) {
            if (!current.right.left && !current.right.right) {
                current.right = null
            } else if (!current.right.left) {
                current.right = current.right.right
            } else if (!current.right.right) {
                current.right = current.right.left
            } else {
                let minNode = current.right.right

                while (minNode.left) {
                    minNode = minNode.left
                }

                current.right.value = minNode.value
                this._removeRecursive(current.right, minNode.value)
            }
        } else {
            this._removeRecursive(current.right, value)
        }
    }
}
}