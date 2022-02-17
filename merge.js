function merge(sortedArr1, sortedArr2) {
    let arr = [...sortedArr1,...sortedArr2];
    
    return arr;
}
console.log(merge([1,2,3],[4,5,6]));