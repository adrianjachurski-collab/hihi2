const messages = [
    "Really sure?",
    "Think again 😏",
    "Are you sure??",
    "Last chance 💔",
    "You have no choice 😈"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector(".no-button");
    const yesButton = document.querySelector(".yes-button");

    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    const currentSize = parseFloat(
        window.getComputedStyle(yesButton).fontSize
    );

    yesButton.style.fontSize = `${currentSize * 1.35}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

/* ❤️ SERDUSZKA */
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
}

setInterval(createHeart, 500);