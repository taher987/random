// Array of random words (you can add more if needed)
const randomWords = ["apple", "banana", "cherry", "dog", "elephant", "frog", "giraffe", "horse", "iguana", "jacket"];

// Function to generate a random word
function generateRandomWord() {
    // Check if the button has already been clicked
    if (localStorage.getItem("buttonClicked") === "true") {
        alert("You can only generate one word!");
        return;
    }

    // Pick a random word from the array
    const randomIndex = Math.floor(Math.random() * randomWords.length);
    const word = randomWords[randomIndex];

    // Display the random word
    document.getElementById("randomWord").textContent = word;

    // Mark the button as clicked in localStorage
    localStorage.setItem("buttonClicked", "true");

    // Disable the button
    document.getElementById("generateButton").disabled = true;
}

// Check if the button has already been clicked
if (localStorage.getItem("buttonClicked") === "true") {
    document.getElementById("generateButton").disabled = true;
}
