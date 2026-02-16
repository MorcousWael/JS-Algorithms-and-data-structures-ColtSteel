function validAnagram(str1,str2){
    let obj1 = {};
    let obj2 = {};
    if(str1.length !== str2.length){
        return false;
    }
    for (let val of str1){
        obj1[val] = (obj1[val] || 0) + 1;
    }
    
    for (let val of str2){
        obj2[val] = (obj2[val] || 0) + 1;
    }
    console.log(obj1)
    console.log(obj2)
    for( key in obj1){
        if(obj1[key] !== obj2[key]){
            return false;
        }
    }
    return true
}

console.log(validAnagram('aaazz','zaaza'))