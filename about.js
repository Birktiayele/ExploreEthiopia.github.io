document.addEventListener("DOMContentLoaded", () => {
    // Define a path where videos are stored
    const path = "./assets";

    const loginModal = document.getElementById("login-modal");
    const resetPasswordModal = document.getElementById("reset-password-modal");
    const createAccountModal = document.getElementById("create-account-modal");

    const loginButton = document.getElementById("login-button");
    const modalCloseButtons = document.querySelectorAll(".close");
    const backButtons = document.querySelectorAll(".back-button");
    const resetForm = document.getElementById("reset-form");

    // Show login modal when login button is clicked
    loginButton.addEventListener("click", () => {
        loginModal.style.display = "block";
    });

    // Close modals when X buttons are clicked
    modalCloseButtons.forEach((button) => {
        button.addEventListener("click", () => {
            loginModal.style.display = "none";
            resetPasswordModal.style.display = "none";
            createAccountModal.style.display = "none";
        });
    });

    // Show reset password modal when reset password link is clicked
    document.querySelector('a[href="#reset-password-modal"]').addEventListener("click", () => {
        loginModal.style.display = "none";
        resetPasswordModal.style.display = "block";
    });

    // Show create account modal when create account link is clicked
    document.querySelector('a[href="#create-account-modal"]').addEventListener("click", () => {
        loginModal.style.display = "none";
        createAccountModal.style.display = "block";
    });

    // Go back to login modal when back button is clicked
    backButtons.forEach((button) => {
        button.addEventListener("click", () => {
            loginModal.style.display = "block";
            resetPasswordModal.style.display = "none";
            createAccountModal.style.display = "none";
        });
    });

    

    closeButton.addEventListener("click", () => {
        modal.classList.remove("active");
    });

    window.addEventListener("scroll", function () {
        var header = document.querySelector("header");
        header.classList.toggle("scroll", window.scrollY > 0);
    });
});

