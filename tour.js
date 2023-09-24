document.addEventListener("DOMContentLoaded", () => {
    const tour = document.querySelector(".tour-info");
    const tourNavigation = tour.querySelector(".tour-info-navbar");
    const tourNavigationChildren = tourNavigation.getElementsByTagName("button");
    const tourModals = tour.getElementsByClassName("tour-info-modal");

    Object.keys(tourNavigationChildren).map((key, index) => {
        tourNavigationChildren[key].addEventListener("click", () => {
            // Adds toggle class to selected navigation
            const toggledNavigation = tourNavigation.querySelector(".toggle");
            toggledNavigation ? toggledNavigation.classList.remove("toggle") : null;
            tourNavigationChildren[key].classList.add("toggle");

            // Shows modal based on selected navigation
            const toggledModal = tour.querySelector(".show");
            toggledModal ? toggledModal.classList.remove("show") : null;
            tourModals[index].classList.add("show");
        });
    });

    // Accommodation section
    const accommodationNavigation = document.querySelector(".accommodation-navigation");
    const accommodationButtons = accommodationNavigation.getElementsByTagName("button");
    const accommodationContents = accommodationNavigation.getElementsByClassName("accommodation-content");
    const buttonColorDefault = "#c8c6c6";
    const buttonColorOnClick = "#47a0ff";

    Object.keys(accommodationButtons).map((key, index) => {
        accommodationButtons[key].addEventListener("click", () => {
            // Adds or removes .show class to selected content
            const toggledContent = accommodationContents[index];

            if (toggledContent.classList.contains("show")) {
                toggledContent.classList.remove("show");
                accommodationButtons[key].style.backgroundColor = buttonColorDefault;
                accommodationButtons[key].style.color = "black";
            } else {
                toggledContent.classList.add("show");
                accommodationButtons[key].style.backgroundColor = buttonColorOnClick;
                accommodationButtons[key].style.color = "white";
            }
        });
    });
});
