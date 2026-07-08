const num=[5,7,35,10,40,100,60,67,20,25,10,10]

let divisible_5 =0
let others =0


for(let a=0;a<num.length;a++){
    if(num[a]%5===0){
       divisible_5++
}
else{
    others++
}
}




console.log(` divisible by 5 are ${divisible_5}`)
console.log(` others are ${others}`)

