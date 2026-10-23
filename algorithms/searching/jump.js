const arr = [2, 5, 8, 12, 15, 19, 23, 27, 31, 35];

const jumpSearch = (arr) =>{
    const n = arr.length
    let prev = 0
    let step = Math.floor(Math.sqrt(arr.length))
    let target = 35

    while(arr[Math.min(step, n)-1] < target){
        prev = step
        step += Math.floor(Math.sqrt(arr.length))
    }
    if(arr[Math.min(step,n)-1]>=target){
        for(let i = prev; i<=Math.min(step, n-1); i++){
            if(arr[i] === target) return arr[i]
        }
    }

}

console.log(jumpSearch(arr))



