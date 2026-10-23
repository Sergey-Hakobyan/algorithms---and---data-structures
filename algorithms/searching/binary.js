const binarysort = () => {

    let left = 0;
    let right = search.length - 1;

    while(left <= right) {

        let mid = Math.floor((left + right) / 2);

        if(search[mid] === target) {
            return mid;
        }

        if(search[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }

    return -1;

}




