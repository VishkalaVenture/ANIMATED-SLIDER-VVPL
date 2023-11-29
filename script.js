// let slider = document.querySelector('.slider');
// let currentSlide = 0;
// console.log(currentSlide)
// let totalSlides = slider.querySelectorAll(".wrapper .left > div").length - 1;

// slider.querySelector(".controls .up").addEventListener("click", function () {
//     if (currentSlide == 0) {
//         return
//     }
//     currentSlide--;
//     // console.log(currentSlide)
//     slider.querySelector(".wrapper .left div").style.marginTop = `${currentSlide * -100}vh`
//     slider.querySelector(".wrapper .right div").style.marginTop = `${(totalSlides - currentSlide) * -100}vh`
// })

// slider.querySelector(".controls .down").addEventListener("click", function () {
//     if (currentSlide == totalSlides) {
//         return
//     }
//     currentSlide++;

//     slider.querySelector(".wrapper .left div").style.marginTop = `${currentSlide * -100}vh`
//     slider.querySelector(".wrapper .right div").style.marginTop = `${(totalSlides - currentSlide) * -100}vh`
// })

let slider = document.querySelector('.slider');
let currentSlide = 0;
let totalSlides = slider.querySelectorAll(".wrapper .left > div").length - 1;
let intervalId;

// Function to move to the next slide
function moveToNextSlide() {
    if (currentSlide < totalSlides) {
        currentSlide++;
    } else {
        currentSlide = 0; // Reset to the first slide if we are at the last slide
    }

    updateSlider();
}

// Function to update the slider based on the current slide
function updateSlider() {
    slider.querySelector(".wrapper .left div").style.marginTop = `${currentSlide * -100}vh`;
    slider.querySelector(".wrapper .right div").style.marginTop = `${(totalSlides - currentSlide) * -100}vh`;
}

// Function to start the automatic slider
function startAutomaticSlider() {
    intervalId = setInterval(moveToNextSlide, 3000); // Adjust the interval as needed (e.g., 3000 milliseconds for 3 seconds)
}

// Function to stop the automatic slider
function stopAutomaticSlider() {
    clearInterval(intervalId);
}

// Event listener for the "up" button
slider.querySelector(".controls .up").addEventListener("click", function () {
    if (currentSlide == 0) {
        return;
    }
    currentSlide--;
    updateSlider();
});

// Event listener for the "down" button
slider.querySelector(".controls .down").addEventListener("click", function () {
    moveToNextSlide();
});

// Start the automatic slider when the page loads
startAutomaticSlider();

// // Stop the automatic slider when the user interacts with the slider
// slider.addEventListener("mouseover", stopAutomaticSlider);
// slider.addEventListener("mouseout", startAutomaticSlider);
