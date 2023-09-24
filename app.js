document.addEventListener("DOMContentLoaded", () => {
    // Define a path where videos are stored
    const path = "./assets";

    // create an array of video URLs
    const videos = [`${path}/Video1.MP4`, `${path}/Video2.MP4`, `${path}/video3.mp4`, `${path}/video5.MP4`, `${path}/video6.MP4`, 
     `${path}/video7.MP4`,  `${path}/video8.MP4`,  `${path}/video9.MP4`];

    // get references to the video container and arrow buttons
    const videoContainer = document.querySelector("#video-slider");
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");

    let currentVideoIndex = 0;

    // load the first video into the video container
    videoContainer.src = videos[currentVideoIndex];

    // add event listeners to the arrow buttons
    prevButton.addEventListener("click", () => {
        currentVideoIndex--;
        if (currentVideoIndex < 0) {
            currentVideoIndex = videos.length - 1;
        }
        videoContainer.src = videos[currentVideoIndex];
    });

    nextButton.addEventListener("click", () => {
        currentVideoIndex++;
        if (currentVideoIndex >= videos.length) {
            currentVideoIndex = 0;
        }
        videoContainer.src = videos[currentVideoIndex];
    });

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

    
    resetForm.addEventListener("submit", (event) => {
        event.preventDefault();
       
    });

    closeButton.addEventListener("click", () => {
        modal.classList.remove("active");
    });

    window.addEventListener("scroll", function () {
        var header = document.querySelector("header");
        header.classList.toggle("scroll", window.scrollY > 0);
    });
});

const navigateToTour = (tour) => {
    location.href = `./tours/${tour}`;
};
