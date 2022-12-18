function countZeroes(array) {
    let firstZero = findFirst(array)
    if (firstZero === -1) return 0;
    return array.length - firstZero;

    function findFirst(array, low = 0, high = array.length - 1) {
        if (high >= low) {
            let mid = Math.floor((high + low) / 2);
            if (array[mid] === 0 && (mid === 0 || array[mid - 1] === 1)) {
                return mid
            } else if (array[mid] === 1) {
                findFirst(array, mid + 1, high);
            }
            //mid must = 0 so shift high to left of mid
            return findFirst(array, low, mid - 1)
        }
        // if high is NOT >= low then there is only 1s or only 0s (or neither)
        return -1;
    }
}

module.exports = countZeroes

// [1 1 1 1 0 0 0 0 0 0]
//  0 1 2 3 4 5 6 7 8 9