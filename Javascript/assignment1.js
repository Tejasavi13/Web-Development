//  console.log("Example1")
//  let name = "beingsalmankhan"
//  let post = 1339
//  let followers= 67000000
//  let following = 37
//  console.log(name," posts",post, " followers",followers, " following",following)

//  console.log("Example 2")
//  let model="Chetak"
//  let color= "Racing red"
//  let specialfeature = "Solid Metal"
//  console.log("Model: ",model)
//  console.log("Color: ",color)
//  console.log("Special Features: ",specialfeature)

//  console.log("Example 3")
// let num = 2
// if(num==num+1){
//     console.log("Even number")
// }
// else{
//     console.log("Odd number")
// }


// console.log("Example 4: BMI Calculator")
// let weight=30
// let height=40
// console.log("BMI=weight/height=" ,weight,"/",height,"=",weight/height)

function totalVowels(str){
    str = str.toLowerCase();
   
   let totalVowels = 0;
   for (let i=0;i <str.length; i++){
       if(str[i]==='a'|| str[i]==='e'|| str[i]==='i'||str[i]==='o'||str[i]==='u'){
           totalVowels++;
       }
   }
   
   return totalVowels;
   }
   let newStr= "There shall be showers of blessings!"
   let count = totalVowels (newStr);
   console.log("Number of vowels: ",count)

//    console.log("Example 3")
//    let numbers = [2,3,4,5,6,7]
   
//    numbers.forEach((square)=>{
//    console.log("Square of the number: ",square)
//    })