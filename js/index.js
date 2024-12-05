var homeEmailInput = document.getElementById("homeEmail")
var homePassInput = document.getElementById("homePass")
var homeMsg = document.getElementById("homeMsg")
var signUpBtn = document.getElementById("signUpBtn")
var loginBtn = document.getElementById("loginBtn")
var users = []
if(localStorage.getItem("list")!== null){
    users = JSON.parse(localStorage.getItem("list"))
}
loginBtn.addEventListener("click" , login)
function login(){
    // var user ={
    //     email: homeEmailInput.value,
    //     pass : homePassInput
    // }
    if(homeEmailInput.value.length === 0 && homePassInput.value.length === 0){
        homeMsg.classList.remove("d-none")
    }
    else{
        if(users.length === 0){
            homeMsg.classList.remove("d-none")
            homeMsg.innerHTML = "incorrect email or password"
        }
        else{
            for(var i = 0 ; i<users.length ; i++){
                if(users[i].email === homeEmailInput.value && users[i].pass === homePassInput.value){
                    var userName = users[i].name
                    localStorage.setItem("usersName" , JSON.stringify(userName))
                    homeMsg.classList.add("d-none")
                    window.location ='/home.html'
                    return;
                }
            }
            homeMsg.classList.remove("d-none")
            homeMsg.innerHTML = "incorrect email or password"
        }
    }
}
signUpBtn.addEventListener("click" , function(){
    window.location = '/signup.html'
})
