const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

// Switch between panels
registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

// Form Validation and Redirect
const registerForm = document.querySelector(".form-box.register form");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const errorMsg = document.getElementById("error-msg");

// Shared Redirection Function
const handleRedirection = (button) => {
    const destination = button.getAttribute('data-target');
    if (destination) {
        button.style.backgroundColor = "#4caf50";
        button.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Loading...';
        
        setTimeout(() => {
            window.location.href = destination;
        }, 600);
    }
};

// Handle Registration
registerForm.addEventListener("submit", function (e) {
    e.preventDefault();
    if (password.value !== confirmPassword.value) {
        errorMsg.textContent = "Passwords do not match!";
    } else {
        errorMsg.textContent = "";
        handleRedirection(this.querySelector('.submit-btn'));
    }
});

// Handle Login (Direct redirect for demo purposes)
const loginForm = document.querySelector(".form-box.login form");
loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    handleRedirection(this.querySelector('.submit-btn'));
});