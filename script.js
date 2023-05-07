// ----------------------to handel google search quarry---------------------------------
function googleSearch() {
    var text = document.getElementById("search").value;
    var cleanQuery = text.replace(" ", "+", text);
    var url = 'http://www.google.com/search?q=' + cleanQuery;
    window.location.href = url;
}
// ----------------------to handel Enter Key press for google search---------------------------------
// Get the input element and the button element
const input = document.querySelector('#search-input');
const button = document.querySelector('#image-button');

// Listen for the Enter key being pressed
input.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        // Trigger a click event on the button
        button.click();
    }
});

// -----------------------------random Background seter from 67images ------------------------------
function setRandomBackground() {
    const imagePath = "bg/";
    const numOfImages = 67; // number of images in the folder
    const randomNum = Math.floor(Math.random() * numOfImages) + 1;
    const bgImageUrl = `${imagePath}${randomNum}.jpg`;

    const img = new Image();
    img.onload = function () {
        document.body.style.backgroundImage = `url(${bgImageUrl})`;
        console.log(`Background image set to ${bgImageUrl}`);
    }
    img.onerror = function () {
        console.error(`Failed to set background image to ${bgImageUrl}`);
    }
    img.src = bgImageUrl;
}

setRandomBackground();

