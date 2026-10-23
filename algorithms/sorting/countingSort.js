const arr = [5, 3, 5, 4, 3]


const countingSort = () => {
    const max = Math.max(...arr)
    const min = Math.min(...arr)
    const countArr = new Array(max-min+1).fill(0);

    for(let i = 0; i<arr.length; i++){
        countArr[arr[i] - min]++
    }

    const res = []

    for(let i = 0;i<countArr.length; i++){
        while(countArr[i]>0){
            res.push(min+i)
            countArr[i]--
        }
    }
    return res
}


console.log(countingSort(arr))


