console.log("Big O Notation");

 function caclulateSum(n){
    let sum =0;
    for (let i = 0; i <= n; i++) {
    sum+=i;
    }
    return sum;
}
function caclulateSum2(n){
    let sum = n*(n+1)/2;
    return sum
}

console.log(caclulateSum(3), "Big O(n)") // Big O(n)
console.log(caclulateSum2(3),"Big O(1)") // Big O(1)

