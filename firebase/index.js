document.getElementById("loginform").addEventListener("submit", (e) => {
    e.preventDefault();
});

firebase.auth().onAuthStateChanged((user) => {
    if(user){
        location.replace("./welcome.html");
    }
})

function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
    document.getElementById("error").innerHTML = error.message;
});
}

function signup() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    firebase.auth().createUserWithEmailAndPassword(email,password).catch((error) => {
        document.getElementById("error").innerHTML = error.message;
    });
}

function forgotpassword() {
    const email = document.getElementById("email").value;
    firebase.auth().sendPasswordResetEmail(email).then(() => {
        alert("to reset the password link is send");
    })
    .catch((error) => {
        document.getElementById("error").innerHTML = error.message;
    })
}
