let arr = [7, 2, 9, 4, 1, 6, 3, 8, 5, 10];

const quickSort = (arr) => {

    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[arr.length - 1];

    let left = [];
    let right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [
        ...quickSort(left),
        pivot,
        ...quickSort(right)
    ];
};

console.log(quickSort(arr));





