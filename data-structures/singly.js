class Node {
    constructor(data) {
        this.value = data
        this.next = null 
    }
}

class SList {
    constructor(iterables) {
        this.head = null 
        this.size = 0

        if(iterables){
            for(elem of iterables){
                const node  = new Node(elem)
                node.next = node.next.next
            }
                if (previous === null) {
                    this.head = node;
                } else {
                    previous.next = node;
                }

                previous = node;
            
    }
    }

    get size() {
        return this.size
    }

    clear() {
        this.head = null 
        this.size = 0
    }

    push_back(elem) {
        const node = new Node(elem)
        let current = this.head
        while(current.next){
            current = current.next
        }
        current.next = node
        this.size ++
    }

    push_front(elem) {
        const node = new Node(elem)
        node.next = this.head
        this.head = node
        this.size ++
    }

    pop_back() {
        if(this.size === 0){
            return undefined
        }
        if(this.size === 1){
            this.head = null
            this.next = null
            this.size--
        }
        let cur = this.head
        while(cur.next.next){
            cur.next = cur.next.next
        }
        cur.next = null
        this.size--
    }

    pop_front() {
        if(this.size === 0){
            return undefined
        }
        if(this.size === 1){
            this.size -- 
            this.head = null
            return
        }
        temp = this.head.next
        this.head = temp
        this.size--
        
    }

    toArray() {
        let toarr = []
        let cur = this.head
        while(cur){
            toarr.push(cur.value)
            cur = cur.next
        }
        return toarr
    }

    front() {
        return this.head.value
    }

    isEmpty() {
        return this.size === null 
    }

    at(index) {
        let cur = this.head
        for(let i = 0; i<=index; i++){
            if(index === i) return cur.data
            cur = cur.next
        }
    }

    insert(index, value) {
        if (index < 0 || index > this.size) return;

        const node = new Node(value);

        if (index === 0) {
            node.next = this.head;
            this.head = node;
            this.size++;
            return;
        }

        let curr = this.head;

        for (let i = 0; i < index - 1; i++) {
            curr = curr.next;
        }

        node.next = curr.next;
        curr.next = node;

        this.size++;
    }

    erase(index) {
        if(index<0 || index >= this.size) return 
        if (index === 0) {
            this.head = this.head.next;
            this.size--;
            return;
        }
        curr = this.head
        curr2 = this.head
        
        for(let i = 0; i<index-1; i++){
            curr2 = curr2.next
        }
        
        for(let i = 0; i<index; i++){
            curr = curr.next
        }
        curr2.next = curr.next
        curr.next = null
        this.size -- 
    }
    reverse() {
        let curr = this.head
        let prev = null
        let next = null
        for(let i = 0; i<this.size; i++){
            next = curr.next
            curr.next = prev
            next = next
        }
    }

    merge(list2) {
        if(list2.size === 0) return

        if(this.size === 0){
            this.head = list2.head
            this.size = list2.size
            return
        }

        let curr = this.head
        while(curr.next){
            curr = curr.next
        }

        curr.next = list2.head
        this.size += list2.size
    }

    remove(value) {
        let curr = this.head
        if(this.size === 0 ) return 

        if(this.head.value === value) {
            let temp = this.head.next
            this.head = temp
            this.size -- 
            return
        }
        while(curr.next){
            if(curr.next.value === value){
                curr.next = curr.next.next
                this.size --
                return
            }
            cur = cur.next
        }
    }

sort(cmp = (a, b) => a - b) {
    function mergeSort(head) {
        if (head === null || head.next === null) {
            return head;
        }

        let slow = head;
        let fast = head.next;

        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let right = slow.next;
        slow.next = null;

        let leftSorted = mergeSort(head);
        let rightSorted = mergeSort(right);

        return merge(leftSorted, rightSorted);
    }

    function merge(left, right) {
        let dummy = new Node(null);
        let tail = dummy;

        while (left !== null && right !== null) {
            if (cmp(left.value, right.value) <= 0) {
                tail.next = left;
                left = left.next;
            } else {
                tail.next = right;
                right = right.next;
            }

            tail = tail.next;
        }

        tail.next = left !== null ? left : right;

        return dummy.next;
    }

    this.head = mergeSort(this.head);
}


    *[Symbol.iterator]() {
        let curr = this.head
        while(curr){
            yield curr.value
            curr = curr.next
        }
    }
}
