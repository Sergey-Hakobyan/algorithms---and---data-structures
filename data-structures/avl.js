class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.height = 1;
    }

}

class AVL {
    root;

    constructor() {}

    getHeight(node) {
        if(node === null) return 0
        
        return node.height 
    }

    getBalance(node) {
        if(node === null) return 0;
        return this.getHeight(node.left) - this.getHeight(node.right)
    }

    rightRotation(node) {
        let temp = node.left
        let subtree = temp.right
        
        temp.right = node
        node.left = subtree

        node.height = this.calculateHeight(node);
        temp.height = this.calculateHeight(temp);

        return temp 
    }

    leftRotation(node) {
        let temp = node.right
        let subtree = temp.left

        temp.left = node
        node.right = subtree   

        node.height = this.calculateHeight(node);
        temp.height = this.calculateHeight(temp);

        return temp 
    }

    leftRightRotation(node) {
        node.left = this.leftRotation(node.left) // в нод лефт сохраняется результат функции вызванный от ноды в лево
        return this.rightRotation(node) // зовется от той же ноды, из которой выше шла влево 
    }


    rightLeftRotation(node) {}


    _insert(value) { // эта функция создает все условия (если их нет), чтоб запустилась рекурсия
        const node = new TreeNode(value)
        if(!this.root){
            this.root = node
            return this.root
        }
        this.insertRecursive(this.root, node) 
    }

    insertRecursive(current, node) {
        if(current.value > node.value){
            if(!current.left){
                current.left = node

            }
            else{
                this.insertRecursive(current.left, node)
            }
        }
        else{
            if(current.value < node.value){
                if(!current.right){
                    current.right = node
                }
                else{
                    this.insertRecursive(current.right, node)
                }
            }
        }
        current.height = this.calculateHeight(current);

        let bf = this.getBalance(current);

        if (bf > 1) {
            if (this.getBalance(current.left) >= 0) {
                return this.rightRotation(current);
            } else {
                return this.leftRightRotation(current);
            }
        }

        if (bf < -1) {
            if (this.getBalance(current.right) <= 0) {
                return this.leftRotation(current)
            } else {
                return this.leftRightRotation(current)
            }
        }

        return current;
    }

    _contains(node, value) {
        if(!node) return false



        this.containsRecursive(node, value)
    }
 
    containsRecursive(value) {
        if(!node) return false

        if(node.value === value) return true

        if(value > node.value) {
            return this.containsRecursive(node.right, value)
        }

        return this.containsRecursive(node.right, value)
    }

    inorder() {
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
    _inorder(node, result){
        if(!node) return 
        this._inorder(node.left, result)
        result.push(node.value)
        this._inorder.apply(node.right, result)
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
    _preorder(node, result){
        if(!node) return

        result.push(node)
        this._preorder(node.left, result)
        this._preorder(node.right, result)

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

    _postorder(node, result){
        if(!node) return 
        this._postorder(node.left, result)
        this._postorder(node.right, result)
        result.push(node.value)
    }

    levelOrder() {

    }

    _levelOrder(){
        
    }
    //тут будет левел ордер 

    calculateHeight(node) {
        if(node === null) return 

        return 1 + Math.max(
            this.getHeight(node.left),
            this.getHeight(node.right)
        )
    }

    _remove(node, value) {
        if (!node) return null;

        if (value < node.value) {
            node.left = this._remove(node.left, value);
        } else if (value > node.value) {
            node.right = this._remove(node.right, value);
        } else {

            if (!node.left && !node.right) {
                return null;
            }


            if (!node.right) {
                return node.left;
            }


            if (!node.left) {
                return node.right;
            }


            let minNode = this._getMin(node.right);

            node.value = minNode.value;

            node.right = this._remove(node.right, minNode.value);
        } 
    // ищем самую маленькую переменную и заменяем ее на ту, что хотим удалить. Потом удаляем число из дерева
    // если нет 
        

    return node;
    }

    removeRecursive(value) {
        this.root = this._remove(this.root, value);
    }

    getMin(node) {
        if(!node.left) return node

        return this.getMin(node.left)
    }

    getMax(node) {
        if(!node.right) return node

        return this.getMin(node.right)
    }

    search(value) {
    let curr = this.root;

    while (curr) {
        if (curr.value === value) {
            return curr;
        }

        if (value < curr.value) {
            curr = curr.left;
        } else {
            curr = curr.right;
        }
    }

    return null;
}
}
