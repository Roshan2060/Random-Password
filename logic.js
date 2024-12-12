const passwordBox = document.querySelector("#password");
const length = 12;
const generateBtn = document.querySelector("#password-btn");


const upperCaseArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseArray = "abcdefghiklmnopqrstuvwxyz";
const numArray = "1234567890";
const symbolArray ="~!@#$%^&*()-+";

const allChars = upperCaseArray+ lowerCaseArray + numArray;


let createPassword = ()=>{
    let password ="";
    password+= upperCaseArray[Math.floor(Math.random()*upperCaseArray.length)];
    console.log(password)
    password+= lowerCaseArray[Math.floor(Math.random()*lowerCaseArray.length)];
    console.log(password)
    password+=numArray[Math.floor(Math.random()*numArray.length)];
    console.log(password)
    //password+= symbolArray[Math.floor(Math.floor()*symbolArray.length)];
    console.log(password)

    while(length > password.length){
        password+= allChars[Math.floor(Math.random()*allChars.length)]
    }

    passwordBox.value = password;
    
}
generateBtn.addEventListener("click",createPassword)