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

// let a=prompt("PLease enter your name");
// let b=prompt("please enter your gender");
// let c=prompt("please enter your age")
// if(c<=0){
//     alert("ENter your correct age -_-")
// }
// let d = confirm("Please confirm whether you want to receive welcoming message or not ^_^");
// let Result =
//              d === true && b==="male"
//              ? `welcome mr ${a}`
//              : d=== true && b==="female"
//              ? `welcome ms ${a}`
//              : d===true
//              ? `welcome ${a}`
//              :`maybe another time`
//              alert(Result)

const answerArray=[];

let firstAnswer=prompt("Do you love botatos?, answer Yes/No/y/n")


// while(firstAnswer== "y" || "n" ||"Yes" || "No"){
switch (firstAnswer) {
        case "y":
            answerArray.push(firstAnswer)
        break;

        case "Yes":
            answerArray.push(firstAnswer)

        break;

        case "n":
            answerArray.push(firstAnswer)
        break;

        case "No":
            answerArray.push(firstAnswer)
        break;

        case "":
            answerArray.push("invalid")
        break;

    default:
        break;
}
// }

let secondAnswer=prompt("Do you love shawerma?, answer Yes/No/y/n")

// while(secondAnswer!= "y" || "n" ||"Yes" || "No"){
    switch (secondAnswer) {
            case "y":
                answerArray.push(secondAnswer)
            break;
    
            case "Yes":
                answerArray.push(secondAnswer)
    
            break;
    
            case "n":
                answerArray.push(secondAnswer)
            break;
    
            case "No":
                answerArray.push(secondAnswer)
            break;
    
            case "":
                answerArray.push("invalid")
            break;
    
        default:
            break;
    }
//     }



    let thirdAnswer=prompt("Do you love Coding?, answer Yes/No/y/n")

    // while(thirdAnswer!= "y" || "n" ||"Yes" || "No"){
        switch (thirdAnswer) {
                case "y":
                    answerArray.push(thirdAnswer)
                break;
        
                case "Yes":
                    answerArray.push(thirdAnswer)
        
                break;
        
                case "n":
                    answerArray.push(thirdAnswer)
                break;
        
                case "No":
                    answerArray.push(thirdAnswer)
                break;
        
                case "":
                    answerArray.push("invalid")
                break;
        
            default:
                break;
        }
//         }

console.log(answerArray)

for (var i = 0; i < answerArray.length; i++) { console.log(answerArray[i]); }


let visitorRate=prompt("How Many stars Would you like to rate our Website (0-5)");

while(visitorRate<0){
    visitorRate=0;
}

while(visitorRate>5){
    visitorRate=5;
}

prompt("Thanks for rating our website:"+visitorRate )

