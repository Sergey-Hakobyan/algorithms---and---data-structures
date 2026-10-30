function isPrime(n){

}

function nextPrime(n){

}

class HashTable {
    constructor(capacity){
        this.capacity = capacity
        this.size = 0

        this.arr = new Array(size)
        this.loadFactor = 1
    }

    getSize(){
        return this.size
    }

    _hash(key){
        if(!key.length) return 
        let sum = 0;

        for(let i = 0; i<key.length; i++){
            sum += key.charCodeAt(i)
            //если key = cat например
            //i = 0 key.charCodeAt(0) = 99 (это c от cat)
            //i = 1 key.charCodeAt(1) = 97 (это c от cat)
            //i = 2 key.charCodeAt(2) = 116 (это c от cat)

        }
        sum = sum % this.capacity
        //это процесс индексации, 
        // поделив общее кол-во на размер массива получим число от 0 до arr.length
        //полученное число и послужит индексом для ячейки
        //312 % capacity даст остаток, 312 % 10 например 2 
        //индекс ему два
        return sum 
    }   


    _loadFactor(){
    //loadfactor = number of elements / capacity
        return this.loadfactor = this.size / this.capacity
    }
    
    has(key){
        let index = this._hash(key)
        let bucket = this.arr[index]

        return bucket.some(pair => pair[0] === key) //pair 0 это dog и cat 
        // ["dog", 20], ["cat", 10]; 
    }

    get(key){
        const index = this._hash(key)
        const bucket = this.arr[index]

        pair = bucket.find(pair => pair[0] === key) // вернет весь массив 
        if(!bucket) return 
        return pair ? pair[1] : undefined
    }

    set(key, value){
        const index = this._hash(key)
        let bucket = null
        if(!this.arr[index]) {
            this.arr[index] = new Array()
            bucket = this.arr[index]
        }
        else{
            bucket = this.arr[index]
            let buck = new Array()
            buck.push(key)
            buck.push(value)
            bucket.push(buck)
        }
        this.size++
        
    }

    resize() {
        const oldArr = this.arr;

        this.capacity *= 2;
        this.arr = new Array(this.capacity);
        this.size = 0;

        for (let i = 0; i < oldArr.length; i++) {
            if (!oldArr[i]) continue;

            for (let j = 0; j < oldArr[i].length; j++) {
                const [key, value] = oldArr[i][j];

                const index = this._hash(key);

                if (!this.arr[index]) {
                    this.arr[index] = [];
                }

                this.arr[index].push([key, value]);
                this.size++;
            }
        }
    }

    delete(key){
        const index = this._hash(key)
        const bucket = this.arr[index]
        if(!bucket) return false

        const pairIndex = this.bucket.findIndex(pair => pair[0] === key)
        if(pairIndex === -1) return false

        bucket.splice(pair, 1) // из этой ячейки этот id
        this.size--

        return true
    }

3
    *values(){

    }

    *entries(){

    }


    clear(){

    }

    *[Symbol.iterator](){

    }
}