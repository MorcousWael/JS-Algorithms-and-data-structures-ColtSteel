// basically problem where we cna use multiple pointers to solve pointers can be at start end or middle going to end to start or to middle depending on the problem

function sumZero(arr){
    let sum =0;
    // if positive move j to the left 
    // if negative move i to the right
    // if 0 return true 
    let i = 0;
    let j =arr.length -1;
    for (val in arr){

        console.log(arr[i] + arr[j])
        if (arr[i] + arr[j] > 0){
            j--;
        }
        else if(arr[i] + arr[j] < 0){
            i++
        }
        else if(arr[i] + arr[j] === 0){
            return true
        }
    }
        
    return false
    }
console.log(sumZero([-2,-1,1,3]))

// cleaner solution in course same concept 

function sumZero2(arr){
    let left =0;
    let right = arr.length-1;
    while (left < right){
        let sum = arr[left]+arr[right];
        if( sum === 0){
            return [arr[left],arr[right]];
        }
        else if(sum >0){
            right--;
        }
        else{
            left++;
        }
        
    } 
}
console.log(sumZero2([-2,-1,1,3]))
console.log(sumZero2([-2,-1,3,3]))
