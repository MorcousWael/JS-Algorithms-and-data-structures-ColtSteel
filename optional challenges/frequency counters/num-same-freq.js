function sameFrequency(num1,num2){
    //create object to count frequencies will try with only 1 object
    let freqObj={}
    //guard same length
    let strNum1=String(num1)
    let strNum2=String(num2)
    if( strNum1.length !== strNum2.length){
        return false;
    }
    // for loop on first num as a string
    for( let val of strNum1){
        freqObj[val] = (freqObj[val] || 0)+1;
    }
    console.log(freqObj);
    // for loop with subtraction 
    for (let val of strNum2){
        // check that all values in arr2 are in object else false
        if(!freqObj[val]){
            return false;
        }
        //subtract 1 form value
        freqObj[val]--;
        console.log(freqObj)
        if(freqObj[val] < 0){
            return false
        }
    }
    return true;

}
console.log("first",sameFrequency(123121,321456))
console.log("second",sameFrequency(1231211,1111223))

