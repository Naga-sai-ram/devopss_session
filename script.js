let count = 0;

const countDisplay = document.getElementById("count");
const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");
const resetBtn = document.getElementById("resetBtn");

function updateDisplay() {
    countDisplay.textContent = count;

    // Disable increment at 10
    incrementBtn.disabled = count === 10;

    // Disable decrement at 0
    decrementBtn.disabled = count === 0;
}

incrementBtn.addEventListener("click", () => {
    if (count < 10) {
        count++;
        updateDisplay();
    }
});

decrementBtn.addEventListener("click", () => {
    if (count > 0) {
        count--;
        updateDisplay();
    }
});

resetBtn.addEventListener("click", () => {
    count = 0;
    updateDisplay();
});

// Initialize button states
updateDisplay();
