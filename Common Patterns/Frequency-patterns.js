// write a function called same, which accepts two arrays. the function should return true if every value in the array has it's corresponding value squared in the second array. the frequency of values must be the same.

// devising a plan 
function same(arr1, arr2){
    let isSame = true;
    //guard if not same size then false
    if(arr1.length != arr2.length){
        isSame = false;
    }

    for( let i = 0; i< arr1.length; i++){
        let foundMatch = false;
        for( let j=0 ; j<arr2.length;j++){
            //compare
            if (arr1[i]* arr1[i] === arr2[j]){
                foundMatch = true;
                arr2.splice(j,1)
                break;
            }
        }
        if (!foundMatch) {
            isSame = false;
        }
    }
    return isSame;
}
array1=[1,1,2]
array2=[1,4,1]
console.log("trying with nested loops and splice", same(array1,array2))

// function sameFequencyCounter(arr1, arr2){
    function sameFequencyCounter(arr1, arr2){
        if(arr1.length !== arr2.length){
            return false;
        }
        let frequencyCounter1 = {}
        let frequencyCounter2 = {}
        for(let val of arr1){
            frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
        }
        for(let val of arr2){
            frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
        }
        console.log(frequencyCounter1);
        console.log(frequencyCounter2);
        for(let key in frequencyCounter1){
            if(!(key ** 2 in frequencyCounter2)){
                return false
            }
            if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
                return false
            }
        }
        return true
    }
    function sameFequencyCounter2(arr1, arr2){
        //guard
        if(arr1.length !== arr2.length){
            return false
        }
        frequencyCounter1={}
        frequencyCounter2={}
        //iterate and count frequencies of first array in a new object
        for(let val of arr1){
            frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
        }
        //iterate and count frequencies of 2nd array in a new object
        for(let val of arr2){
            frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
        }
        console.log(frequencyCounter1);
        console.log(frequencyCounter2);
        //check frequecny of 1st squared and corresponding 2nd
            // if not same return false
            // if same continue
        for(key in frequencyCounter1){
            if( frequencyCounter1[key] !== frequencyCounter2[key **2] ){
                return false;
            }
        }
        return true
    
    }
    

    console.log("trying with frequency counting",sameFequencyCounter2([1,2,3,2,5], [9,1,4,4,11]))
    console.log("trying with frequency counting",sameFequencyCounter2([1,2,3,2,5], [9,1,4,4,25]))
    
    
// }