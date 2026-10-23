class DynamicArray {
   #arr;
   #size;
   #capacity;
   #GROWTH = 2;

   constructor(cap) {
       if (cap <= 0 || !Number.isInteger(cap)) {
           throw new Error("Error");
       }

       this.#arr = new Uint32Array(cap);
       this.#capacity = cap;
       this.#size = 0;
   }

   #resize() {
       const newCap = this.#capacity * this.#GROWTH;
       const tmp = new Uint32Array(newCap);

       for (let i = 0; i < this.#size; ++i) {
           tmp[i] = this.#arr[i];
       }

       this.#capacity = newCap;
       this.#arr = tmp;
   }

   push_back(elem) {
       if (this.#size === this.#capacity) {
           this.#resize();
       }

       if (!Number.isInteger(elem)) {
           throw new Error("Error");
   }

       this.#arr[this.#size++] = elem;
   }

   pop_back() {
       if (!this.#size) {
           throw new Error("error");
       }

       return this.#arr[--this.#size];
   }

   at(index) {
       if (!Number.isInteger(index) || index < 0 || index >= this.#size) {
           throw new Error("Error");
       }

       return this.#arr[index];
   }

   set(index, value) {
       if (
           !Number.isInteger(index) ||
           index < 0 ||
           index >= this.#size ||
           !Number.isInteger(value)
       ) {
           throw new Error("Error");
       }

       this.#arr[index] = value;

       return value;
   }

   front() {}

   back() {}

   erase(pos) {}

   insert(pos, value) {
       if (!Number.isInteger(pos) || pos < 0 || pos >= this.#size) {
           throw new Error("Error");
       }

       if (this.#size === this.#capacity) {
           this.#resize();
       }

       for (let i = this.#size; i > pos; --i) {
            this.#arr[i] = this.#arr[i - 1];
       }

       this.#arr[pos] = value;
       this.#size++;

       return pos;
   }

   swap(i, j) {}

   *values() {}

   *keys() {}

   forEach(fn) {}

   map(fn) {}

   filter(fn) {}

   reduce(fn, init) {}

   some(fn) {}

   find(fn) {}

   findIndex(fn) {}

   includes(value) {}

   [Symbol.iterator]() {}
}

const arr = new DynamicArray(5);

arr.push_back(10);
arr.push_back(15);
arr.push_back(20);
arr.push_back(30);
arr.push_back(40);
arr.push_back(50);