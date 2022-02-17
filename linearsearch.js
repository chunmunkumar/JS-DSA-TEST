function searchofindex(arr,val){
    for (let index = 0; index < arr.length; index++) {
        if(arr[index] === val) {
            return index;
            
        }
        return -1;
    }
}
console.log(searchofindex([1,2,3,4],5));