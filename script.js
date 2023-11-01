document.addEventListener("DOMContentLoaded", function() {
    // Your JavaScript code here

// Get the HTML elements for the counter and buttons
var counter = document.getElementById("counter");
var increaseBtn = document.getElementById("increase");
var resetBtn = document.getElementById("reset");
var decreaseBtn = document.getElementById("decrease");


// Set the initial count value
let count = 0;

// Update the counter display
function updateCounter() {
    counter.textContent = count;
    
    if (count > 0) {
        counter.classList.remove("black", "red");
        counter.classList.add("green");
    } else if (count == 0) {
        counter.classList.remove("green", "red");
        counter.classList.add("black");
    } else {
        counter.classList.remove("green", "black");
        counter.classList.add("red");
    }
}




// Increase the count when the increase button is clicked
increaseBtn.addEventListener("click", function() {
    count++;
    updateCounter();
});

// Reset the count to 0 when the reset button is clicked
resetBtn.addEventListener("click", function() {
    count = 0;
    updateCounter();
});

// Decrease the count when the decrease button is clicked
decreaseBtn.addEventListener("click", function() {
    count--;
    updateCounter();
});
});