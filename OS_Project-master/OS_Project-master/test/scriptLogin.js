const loginForm = document.getElementById("loginForm");
const loginButton = document.getElementById("login");
const registerButton = document.getElementById("register");
const emailError = document.getElementById("emailWarning");
const passError = document.getElementById("passWarning");
const dupeError = document.getElementById("dupeWarning");
const regisSuccess = document.getElementById("successfulRegister");

function clearWarning() {
    passError.style.opacity = 0;
    emailError.style.opacity = 0;
    dupeError.style.opacity = 0;
    regisSuccess.style.opacity = 0;
}

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.password.value;
    socket.emit('submitted', email, password);
    socket.on('success', (email) => {
        clearWarning();
        sessionStorage.setItem('email', email);
        window.location.href = "catagoryMem.html";
    });
    socket.on('email', () => {
        clearWarning();
        emailError.style.opacity = 1;
    });
    socket.on('pass', () => {
        clearWarning();
        passError.style.opacity = 1;
    });
});

registerButton.addEventListener("click", (e) => {
    e.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.password.value;
    socket.emit('register', email, password);
    socket.on('duplicated', () => {
        clearWarning();
        dupeError.style.opacity = 1;
    });
    socket.on('registered', () => {
        clearWarning();
        regisSuccess.style.opacity = 1;
    });
});