function googleSearch() {
    var text = document.getElementById("search").value;
    var cleanQuery = text.replace(" ", "+", text);
    var url = 'http://www.google.com/search?q=' + cleanQuery;
    window.location.href = url;
}

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