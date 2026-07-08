const num=[32, 21, 10, 18, 41, 24, 8, 7, 5]

let even_count=0
let odd_count=0


for(let a=0;a<num.length;a++){
    if(num[a]%2===0){
        even_count++
}
else{
    odd_count++
}
}
console.log(`Even numbers are ${even_count}`)
console.log(`Even numbers are ${odd_count}`)