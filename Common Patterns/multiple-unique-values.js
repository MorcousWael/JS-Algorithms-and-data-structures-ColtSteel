function countUniqueVal(arr){
    if(arr.length === 0){
        return 0;
    }
    if(arr.length === 1){
        return 1;
    }
    let uniqueCount =1;
    //set i to 0 
    // set j to 1
    let i = 0;
    let j = 1;
    // loop till j < LENGTH
        while (j < arr.length){
            if(arr[i] !== arr[j]){
                uniqueCount++;
                i = j;
                j++;
            }
            if(arr[i] === arr[j]){
                j++
            }
        }
    return uniqueCount
}
console.log(countUniqueVal([1,2,2,2,3.5,6,7,99]))