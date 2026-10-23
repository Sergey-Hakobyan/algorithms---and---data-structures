class Node {
    constructor(data) {
        this.value = data
        this.next = null
        this.prev = null
    }
}

class DList {
    constructor(iterables) {
        if(iterables){
            this.head = null
            this.size = 0
        }
    }

    static fromArray(arr) {

    }

    get size() {}

    clear() {}

    push_back(elem) {}

    push_front(elem) {}

    pop_back() {}

    pop_front() {}

    toArray() {}

    front() {}

    back() {}

    isEmpty() {}

    at(index) {}

    insert(index, value) {}

    erase(index) {}

    reverse() {}

    merge(list) {}

    remove(value) {}

    sort(cmp) {
        function mergeSort() {}
        function merge() {}
    }

    [Symbol.iterator]() {}
}

