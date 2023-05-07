// ----------------------to handel google search quarry---------------------------------
function googleSearch() {
    var text = document.getElementById("search").value;
    var cleanQuery = text.replace(" ", "+", text);
    var url = 'http://www.google.com/search?q=' + cleanQuery;
    window.location.href = url;
}

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

// setRandomBackground();

// ------------------------------------------microphone for voice search-----------------------------------------
// Check if the user's device has a microphone
if (!('webkitSpeechRecognition' in window)) {
    alert("Your device doesn't support speech recognition");
} else {
    // Create a new speech recognition instance
    var recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;

    // Request permission to use the microphone
    recognition.onstart = function () {
        console.log("Speech recognition started");
    };
    recognition.onerror = function (event) {
        console.error("Speech recognition error:", event.error);
    };

    // Start speech recognition when the mic button is clicked
    document.getElementById('mic-button').onclick = function () {
        recognition.start();
    };

    // Handle speech recognition results
    recognition.onresult = function (event) {
        var result = event.results[0][0].transcript;
        console.log("Speech recognition result:", result);
        // Do something with the result
    };
}
// _______________________________________________________________________________________
