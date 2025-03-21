// Image List for Background Change
const images = [
    "img1.png",
    "img2.png",
    "img3.png",
    "img4.png",
    "img5.png",
    "img6.png",
    "img7.png",
    "img8.png",
    "img9.png",
    "img10.png"
];

// Function to Change Background on Tap
function changeBackground() {
    // Select a random image
    let randomImage = images[Math.floor(Math.random() * images.length)];
    
    // Apply as background
    document.querySelector(".background").style.backgroundImage = `url('${randomImage}')`;
}

// Listen for tap/click anywhere except buttons
document.addEventListener("click", function(event) {
    if (!event.target.classList.contains("btn")) {
        changeBackground();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const slideText = document.getElementById("slideText");

    // Messages Array
    const messages = [
        "Mujhe kuch kehna hai... ❤️",
        "Jab bhi tujhe dekhta hoon, dil khush ho jata hai! 😍",
        "Tere bina life adhoori lagti hai... 🥰",
        "Main har pal tere saath rehna chahta hoon... ❤️",
        "Tujhse baat na ho toh din adhura lagta hai... 😔",
        "Tu hi meri khushi ka reason hai... 😊",
        "Tere saath zindagi ek khoobsurat safar lagega! 🚀",
        "Mujhe har din sirf tera saath chahiye! 💖",
        "Tujhse milne ke baad sab kuch perfect lagne laga hai! 🥺"
    ];

    let currentSlide = 0;
    let showLoveMessage = true; // Toggle between love message & developer message

    function changeSlide() {
        slideText.classList.remove("fade-in");
        slideText.classList.add("fade-out");

        setTimeout(() => {
            if (currentSlide < messages.length) {
                slideText.textContent = messages[currentSlide];
                currentSlide++;
            } else {
                // Alternate between "I love you" and Developer message
                slideText.textContent = showLoveMessage ? "I love you ❤️🥰" : "It is created by Developers Pritam and Ayush.";
                showLoveMessage = !showLoveMessage; // Toggle for next time
            }

            slideText.classList.remove("fade-out");
            slideText.classList.add("fade-in");

        }, 500);
    }

    // Change message every 3 seconds
    setInterval(changeSlide, 3000);

    // Start message cycle
    changeSlide();
});
