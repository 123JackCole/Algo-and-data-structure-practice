// binary search

// arr must be sorted
// O(log(n))

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 15, 18, 26, 99];

const binarySearch = (arr, target, start = 0, end = arr.length - 1) => {

    if (start >= end) return;

    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) console.log("element found!");

    arr[mid] < target ? binarySearch(arr, target, mid + 1, end) : binarySearch(arr, target, start, mid - 1);

};

console.log(binarySearch(arr, 15));