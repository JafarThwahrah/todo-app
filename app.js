// let NAME=prompt("Please Enter Your name");
// let gender =prompt("Please enter your gender, male/female")
// if (gender === "male"){
 
// }else if(gender=== "female"){

// }else{
//     alert("You didnt enter your gender correctly")
// }
// let age =prompt("Please Enter your age")
// if (age<=0){
//     alert("you didnt enter your age correctly, Please check");

// }
// let Confirm=confirm("Would you like to see the welcoming message or not")

// if(Confirm==true && gender==="male"){
//     alert("welcome Mr "+NAME)
// }else if (Confirm==true && gender==="female"){
//     alert("Welcome Ms "+NAME)
// }else if (Confirm==true){
//     alert("Welcome "+NAME)
// }else{
//     alert("maybe next time")
// }

let a=prompt("PLease enter your name");
let b=prompt("please enter your gender");
let c=prompt("please enter your age")
if(c<=0){
    alert("ENter your correct age -_-")
}
let d = confirm("Please confirm whether you want to receive welcoming message or not ^_^");
let Result =
             d === true && b==="male"
             ? `welcome mr ${a}`
             : d=== true && b==="female"
             ? `welcome ms ${a}`
             : d===true
             ? `welcome ${a}`
             :`maybe another time`
             alert(Result)