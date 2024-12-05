var nameInput = document.getElementById("name")
var emailInput = document.getElementById("email")
var passwordInput = document.getElementById("pass")
var btnSign =document.getElementById("btnSignUp")
var msg = document.getElementById("msg")
var requiredMsg = document.getElementById("requiredMsg")
var existMsg = document.getElementById("existMsg")
var signInBtn = document.getElementById("signInBtn")
var msgName = document.getElementById("msgName")
var msgEmail = document.getElementById("msgEmail")
var msgPass = document.getElementById("msgPass")
var users = [];
if(localStorage.getItem("list") !== null){
    users = JSON.parse(localStorage.getItem("list"))
}
function sign(){
    var user ={
        name: nameInput.value ,
        email: emailInput.value,
        pass: passwordInput.value
    }
    if(nameInput.value.length === 0 && emailInput.value.length === 0 && passwordInput.value.length === 0){
        requiredMsg.classList.remove("d-none")
        existMsg.classList.add("d-none")
        msg.classList.add("d-none")
    }
    else if(validationInputs(nameInput , 'msgName') && validationInputs(emailInput , 'msgEmail') && validationInputs(passwordInput , 'msgPass')){
        if( users.length === 0){
            users.push(user)
            // console.log(users)
            localStorage.setItem("list", JSON.stringify(users))
            msg.classList.remove("d-none")
            requiredMsg.classList.add("d-none")
            existMsg.classList.add("d-none")
            clear()
        }
        else {
            for(var i=0 ; i<users.length ; i++){
                if(users[i].email === emailInput.value ){
                    existMsg.classList.remove("d-none")
                    msg.classList.add("d-none")
                    requiredMsg.classList.add("d-none")
                    return ;
                }
            }
            users.push(user)
            // console.log(users)
            localStorage.setItem("list", JSON.stringify(users))
            msg.classList.remove("d-none")
            requiredMsg.classList.add("d-none")
            existMsg.classList.add("d-none")
            clear()
        }
    }
}
btnSign.addEventListener("click" , sign)
signInBtn.addEventListener("click" , function(){
    window.location = '/index.html'
})
function clear(){
    nameInput.value = null;
    emailInput.value = null;
    passwordInput.value = null;
    nameInput.classList.remove("is-valid")
    emailInput.classList.remove("is-valid")
    passwordInput.classList.remove("is-valid")
}


function validationInputs( element , msgID){
    var regex = {
        name: /^[a-zA-Z][a-zA-Z0-9 ]{2,19}$/,
        email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ,
        pass:  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    }
    var msg = document.getElementById(msgID)
    var text = element.value;
    if(regex[element.id].test(text)){
        element.classList.add("is-valid")
        element.classList.remove("is-invalid")
        msg.classList.add("d-none")
        return true;
    }
    else{
        element.classList.remove("is-valid")
        element.classList.add("is-invalid")
        msg.classList.remove("d-none")
        return false;
    }
}