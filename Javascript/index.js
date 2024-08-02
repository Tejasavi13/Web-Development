// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// alert("hello")(It only works on browser and not on console)
//variables: that contains some values
//var 
//New javascript- ES6- EcmaScript 6
// We can make variable in es6 using var , let, const)
// var name = "Javascript"
// //var name="EcmaScript"
// name="Python"
// console.log(name)

//rule: reassign also redeclare.
//let

// let fullname = "Adam Smith"
// //let fullname = "Mary Doe"
// fullname="Mary Doe"
// console.log(fullname)

// {
//     let age = 20
//     console.log(age)
// }


//rule: No redeclare but reassign
//const

//const author = " John Smith"

//console.log(author)
// rule : No redeclare and no reassign

//Datatypes: Primitive: ss bb nn u
// and non primitive:object and array
// Primitive Datatypes
// s: string s:symbol
//b:boolean b:BigInt
//n:number n:null
//u: undefined
// let a ="hello";
// let b= 10;
// let c=true;
// let d= BigInt(10000000000000)
// let e
// let f= null
// console.log(a,b,c,d,e,f)

//object-key value pair
// let student={
//     name: "John",
//     age : 20,
//     isStudent: true,
//     marks: [45, 50, 70, 50]

// }
// console.log(student.isStudent)
//operators: Its used to perform operations between two or more operands(variable) is called operators)
//Types of operators:
//Arithmetic operators: + -  * /
//module
//exponent
//increment decrement

// let a = 20
// let b =20
// console.log("a+b: ",a+b)
// console.log("a-b: ",a-b)
// console.log("a*b: ",a*b)
// console.log("a/b: ",a/b)
// console.log("a%b: ",a%b)
// console.log("a**b: ",a*b)

// let a=10
// console.log(a)
// a++ //Postincrement
// console.log(a)
// ++a//preincrement
// console.log(a)
// --a//predecrement
// console.log(a)
// a--//postdecrement
// console.log(a)

//Assignment operators
//=,+=,-=,*=,/=,%=,**=

// let a=10
// a+=20

// console.log(a)
//Comparison operators
//<=,>=,<,>,==,===,!=,!==(third equal to is checking the datatype of the value)
// let a= 10
// let b=10
// console.log(a===b)
//Conditional statement : if , else if, switch
// let age= 18
// if (age <=16){
//     console.log("You cannot drive")

// }
// else{
//     console.log("Go ahead!")
// }
// POPUP BOXES:PROMPT
// let name = prompt("Enter your name: ")
// console.log("Hello ",name)
//find even and odd number
//find positive negative number
//make a bmi calculator
//make a calculator
// 18 july 2024
//else if 
//Stages of life:
// let age = parseInt(prompt("Enter you valid age: "));
// if (age <18){
//     console.log("you are a child")
// }
// else if(age >18 && age <30){
//     console.log("You are a teenager")

// }
// else if (age > 30 && age <60){
//     console.log("you are an adult")
// }
// else if(age >60 && age == 100)
// {
//     console.log("You are a senior citizen")

// }
// else {
//     console.log("Invalid age")
// }

// //switch

// let weekday= prompt("Enter Name of weekday: ")

// switch(weekday){
//     case "Mon":
//         console.log("Today is Monday")
       

//     case "Tue":
//         console.log("Today is Tuesday")

//     case "Wed":
//         console.log("Today is wednesday")

//     case "Thur":
//         console.log("Today is Thursday")

//     case "Fri":
//         console.log("Today is Friday")

//     case "Sat":
//         console.log("Today is Satday")

//     case "Sun":
//         console.log("Today is Sunday")

//         default:
//             console.log("Invalid entry")
// }

// //ternary operator
// let age = 18
// let res age >= 18 ? "You can Vote":"You can't vote"
// console.log(res);

//Loops : IT is used to exceute a block of code again and again
//Types of loops: for while do while for in for of 
//for(when we know end result)
//initialisation, condition , updation
// for(let i=0;i<20;i++){
// console.log(i)
// }

//while(when we dont know the end result)
//do while loop
// let a = 1;
// do{
//     console.log(a)
//     a++
// }
// while(a>10)

//for of 

// let str="MUMBAI"
// for(let char of str){
//     console.log(char)
// }
//FOR IN LOOP

//Only work on object
// let info={
//     name:"John",
//     age: 20,
//     city:"Mumbai",
// }
// for (let key in info){
//     console.log(key,info[key])
// }

//string : collection of characters

// let str="Javascript"
// console.log(str)

//  let car={
//      name: "BMW",
//     color: "Red",
//     model: "X5"
// }
// // console.log("Car name: "+car.name+"\nCar color: "+car.color+"\nCar Model: "+car.model)
// //template leteral
// console.log(`Car name: ${car.name}\n Car model: ${car.model}\n Car Color: ${car.color}`)


//19 July 2024
//String Methods in JS
// manipulate a string 
// let str= "     JAVASCRIPT"
// console.log(str.toUpperCase())
// console.log(str.toLowerCase())

// console.log(str)
// console.log(str.trim())

// //slice
// // 0 1 2 3 4 5 6 7
// // T E J A S A V I
// let fullname="TEJASAVI"
// let newStr= fullname.slice(0,7)
// console.log(newStr)

// let firstname = "Pratik"
// let lastname = "Bohra"
//  let fullname = firstname.concat(lastname)
//  console.log(fullname)
// let word = "Jolitaire"
// let newStr = word.replace("J","S")
// console.log(newStr)
// charAt

// let name = "MERN"

// let newStr= name.charAt(2)
// console.log(newStr)

// Array: a collection of elements


// // let numbers=[45,56,67,84]
// // let info = ["Shubham", 23,"Delhi"]
// // console.log(heroes)

// //looping over an array

// for(let i=0; i<heroes.length;i++){
    //     console.log(heroes[i])
    // }
    
    //Array Methods
    //push: add to end 
    // let heroes = ["Batman","Spiderman","Loki","Captain America","Thor","Superman"]
    // heroes.push("Simpsons")
    // console.log(heroes)
//pop : remove from end
// shift : delete from start
//splice: change oginal array


//q1: Prompt the user to 
//Function in javascript

//block off codes that performs specifi tasks, can be invoked(calling) whenever needed
//
// function sayHello(){
//     console.log("hELLO WORLD!")
// }
// sayHello()
// sayHello()
// sayHello()
// sayHello()

//pARAMETRIZED FUNCTION
// function fullname(firstname ="Default Name",lastname = "Default Name"){
//     console.log("Fullname: "+firstname+" "+lastname)
// }
// fullname("Tejasavi","Sharma")

//ES6 
//arrow function:compact way to witing a function

// const sayHello=() =>{
// console.log("Hello world")
// }

// const sum=(a,b) =>{
//     return a+b
// }

//forEach loop in arrays
//CallBack function: here it is a function for each element in array to execute .
// let numbers =[ 3,4,6,7,8,9,9]
// numbers.forEach((val) =>{
//      console.log(val)
    
// })

//map function
// map: create a new array with the results of some operations. The value its callback returns are used to from new array.

// let cities = ["pune","delhi","toronto","nagpur"]
// let city = cities.map((val,idx,arr)=>{
//     return val.toUpperCase() + idx+arr
// })
// console.log(city)

//filter : 
// let arr = [1,2,3,4,5,6,7,8,9,10,11,12]
// let even = arr.filter((val)=>{
//     return val % 2 == 0
// })
// console.log(even)

//Reduce

// let arr = [1,2,3,4,5,6]
// const newArr = arr.reduce((res,curr) =>{
// return res+ curr;

// })
// console.log(newArr)

//July 22 ,2024
 // 