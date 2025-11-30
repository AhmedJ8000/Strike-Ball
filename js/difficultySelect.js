//Select the dropdown
const difficultySelect = document.querySelector("#difficulty");

//Paddle sensetivity value adjustment through bar
const paddleSensetivity = document.querySelector("#paddleSpeed");

//Load saved difficulty
const savedDifficulty = localStorage.getItem("selectedDifficulty") || "normal";
const savedPaddleSpeed = localStorage.getItem("setPaddleSpeed") || 1000;
difficultySelect.value = savedDifficulty; //Sets the dropdown to saved value
paddleSensetivity.value = savedPaddleSpeed; //Sets the paddle sensetivity value

console.log("Current difficulty:", savedDifficulty);
console.log("Current Paddle speed:", savedPaddleSpeed);

//When the selection changes
difficultySelect.addEventListener("change", () => 
{
    const selectedDifficulty = difficultySelect.value; //Values -> "easy", "normal", or "hard"
    console.log("Selected difficulty:", selectedDifficulty);

    //Save it to localStorage
    localStorage.setItem("selectedDifficulty", selectedDifficulty);

});

//When value of paddle sensetivity changes
paddleSensetivity.addEventListener("change", () =>
{
    const appliedPaddleSpeed = paddleSensetivity.value;
    console.log("Set paddle speed: ", appliedPaddleSpeed);

    //Save it to localStorage
    localStorage.setItem("setPaddleSpeed", appliedPaddleSpeed);
}
);
