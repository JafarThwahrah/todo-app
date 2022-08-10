let NAME=prompt("Please Enter Your name");
let gender =prompt("Please enter your gender, male/female")
if (gender === "male"){
 
}else if(gender=== "female"){

}else{
    alert("You didnt enter your gender correctly")
}
let age =prompt("Please Enter your age")
if (age<=0){
    alert("you didnt enter your age correctly, Please check");

}
let Confirm=confirm("Would you like to see the welcoming message or not")

if(Confirm==true && gender==="male"){
    alert("welcome Mr "+NAME)
}else if (Confirm==true && gender==="female"){
    alert("Welcome Ms "+NAME)
}else if (Confirm==true){
    alert("Welcome "+NAME)
}else{
    alert("maybe next time")
}