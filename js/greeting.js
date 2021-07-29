const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form Input");
const greeting = document.querySelector("#greeting");
const loginText = document.getElementById("loginText");
const facelink = document.querySelector("#faces");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting(username);
}

function paintGreeting(username){
    const name = document.createElement("a");
    name.href = "#";
    name.id = "loginname";
    name.addEventListener("click", logOut);
    name.innerHTML = `${username}`
    greeting.appendChild(name);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    loginText.classList.remove(HIDDEN_CLASSNAME);
    facelink.classList.remove(HIDDEN_CLASSNAME);
    loginText.style.display = "inline";
    facelink.style.display = "inline";
}


function logOut(event){
    localStorage.removeItem(USERNAME_KEY);
    loginText.style.display = "";
    loginText.classList.add(HIDDEN_CLASSNAME);
    facelink.style.display = "";
    facelink.classList.add(HIDDEN_CLASSNAME);
    window.location.reload();
}



const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME)
} else {
    paintGreeting(savedUsername);
}
loginForm.addEventListener("submit", onLoginSubmit);
