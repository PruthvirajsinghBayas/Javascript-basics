x = 10
y = 5

console.log("Addition of x and y is",x+y)
console.log("Difference of x and y is",x-y)


favouritemovie = "Mahavatar Narsimha"
message = "I love to watch " +  favouritemovie
console.log(message)


ishungry = false
if(ishungry){
    console.log("Healthy khana khana hai")  // This is to be printed when true 
}else{
    console.log("Continue with  your work....") // This is to be printed when false
}

let arr=[1,2,4,5]

let  num=arr.length +1
let actul_sum=0

const expected_sum=num * (num+1)/2

arr.forEach(n =>{
   actul_sum+=n
})

const missing_num = expected_sum - actul_sum 

console.log(expected_sum)
console.log(actul_sum)
console.log("Missign No is :",missing_num)


