// console.log("Js Connected")
// let heading = document.getElementById("heading")
// console.log(heading)

// let para = document.getElementsByClassName("para")
// console.log(para)

// let li = document.getElementsByTagName('li')
// console.log(li)

//querySelector
//querySelectorAll
// let heading = document.querySelector('#heading')
// console.log(heading)
// let para = document.querySelectorAll('p')
// console.log(para)

// let h2 = document.getElementById('h2')
//setAttribute

// let heading = document.querySelector('#heading')
// heading.setAttribute('class','Para')
//  //backgroundColor
//  //font-size= fonSize
// document.body.style.backgroundColor = "black"


//create Element

// let button = document.createElement('button')
// button.innerText="Submit"
// button.style.backgroundColor="black"
// button.style.color="white"
// button.style.borderRadius="5px"
// console.log(button)
// //append -inside the element
// //and prepend
// //before after is used outside the element
// document.querySelector('#heading').prepend(button);

// //removeElement
// button.remove()

//Events: changes after clicking is known as events
// three types:keyboeard events, mouse events and  forms

//addEventListener
// document.addEventListener('click',function(){
//     console.log('Button clicked')
// })
//  //using function

//  let btn = document.querySelector('#btn')
//  btn.addEventListener('click',()=>{
//     console.log('Button Clicked')

//  })
// box.addEventListener('mouseover',function(){
    //     this.style.backgroundColor="yellow"
    //     this.style.borderRadius="30px"
    // })
//     let box = document.querySelector('#box')
//  box.addEventListener('mouseover',()=>{
//     this.style.backgroundImage="url('https://images.pexels.com/photos/247899/pexels-photo-247899.jpeg?auto=compress&cs=tinysrgb&w=400')"
//  })
//26 july 2024
//async await - promises - callback hell
//javascript- synchronous language
// console.log("hello1")
// console.log("hello1")
// console.log("hello1")
// console.log("hello1")
// console.log("hello1")

// setTimeout(()=>{
//     console.log("Hello")
// },2000)

//callback
function sum(a,b){
    console.log(a+b)
}
function calculate(a,b,sumCallback){
    sumCallback(a,b)
}
calculate(5,10,()=>{
    console.log(a+b)
})
