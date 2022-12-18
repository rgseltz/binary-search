function sortedFrequency() {
    let start = 0;
    let end = array.length - 1;

    let targetIndex = -1;

    // Step 1: Binary search for target
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (array[middle] == target) {
            targetIndex = middle;
            break;
        } else if (array[middle] < target) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    // Special Case: Target Not Found
    if (targetIndex == -1) return targetIndex;

    // Step 2: Binary Search LeftSide [0...targetIndex-1]
    start = 0;
    end = targetIndex - 1;

    let beforeTargetIndex = -1;
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (array[middle] < target) {
            beforeTargetIndex = middle;
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }

    // Step 3: Binary Search RightSide [targetIndex+1...array.length-1]
    start = targetIndex + 1;
    end = array.length - 1;

    let afterTargetIndex = -1;
    while (start <= end) {

        let middle = Math.floor((start + end) / 2);

        if (array[middle] > target) {
            afterTargetIndex = middle;
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }

    // Special Case: All numbers are the target
    if (beforeTargetIndex == -1 && afterTargetIndex == -1) {
        return array.length;
    }

    // Special Case: No before Index
    if (beforeTargetIndex == -1) {
        return array.length - (array.length - afterTargetIndex);
    }

    // Special Case: No after Index
    if (afterTargetIndex == -1) {
        return array.length - (beforeTargetIndex + 1);
    }

    // Subtract after index, before index, and -1 (-1 is the original found target number)
    return afterTargetIndex - beforeTargetIndex - 1;
}


module.exports = sortedFrequency