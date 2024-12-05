var nameP = document.getElementById("userName")
var btnDropdown = document.getElementById("btnDropdown")
var logout = document.getElementById("logout")
var bars = document.getElementById("bars")
var users = []
if(localStorage.getItem("list")!== null){
    users = JSON.parse(localStorage.getItem("list"))
}
var userName = []
if(localStorage.getItem("usersName")!== null ){
    userName = JSON.parse(localStorage.getItem("usersName"))
}
for(var i = 0 ; i<users.length ; i++){
    if(userName=== users[i].name){
        nameP.innerHTML = userName
    }
}

logout.addEventListener("click" , function(){
    window.location = '/index.html'
})
bars.addEventListener("click" , function(){
    logout.classList.toggle("d-none")
})