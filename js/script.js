//For mouse trail
document.onmousemove = (e) => {
    const trail = document.getElementById("trail");
    const dot = document.createElement("div");
    dot.className = "dot";
    trail.appendChild(dot);
    dot.style.left = e.pageX + "px";
    dot.style.top = e.pageY + "px";
    setTimeout(() => {
        dot.remove();
    }, 1000);
};

//For slideshow
const images = document.querySelectorAll("#slideshow img");
let index = 0;

function nextSlide() {
    images[index].style.opacity = 0;
    index = (index + 1) % images.length;
    images[index].style.opacity = 1;
}

setInterval(nextSlide, 2000);

//For clock
function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").textContent = timeString;
}

setInterval(updateClock, 1000);

//For quote generator
const quotes = [
    "Go to your bosom; Knock there, and ask your heart what it doth know. - William Shakespeare",
    "Electricity is actually made up of extremely tiny particles called electrons, that you cannot see with the naked eye unless you have been drinking. - Dave Barry",
    "Part of being creative is learning how to protect your freedom. That includes freedom from avarice. - Hugh Macleod",
    "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
    "Simplicity is the ultimate sophistication. - Leonardo da Vinci",
    "It does not matter how slowly you go as long as you do not stop. - Confucius"
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    document.getElementById("quote").textContent = randomQuote;
}

document.getElementById("generateButton").addEventListener("click", generateQuote);

generateQuote();

//For prime number
function isPrime(number) {
    if (number <= 1) {
        return false;
    } else if (number <= 3) {
        return true;
    } else if (number % 2 === 0 || number % 3 === 0) {
        return false;
    }

    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) {
            return false;
        }
    }

    return true;
}

function checkPrime() {
    const inputNumber = parseInt(document.getElementById("numberInput").value);
    const resultParagraph = document.getElementById("result");

    if (isPrime(inputNumber)) {
        resultParagraph.textContent = inputNumber + " is a prime number.";
    } else {
        resultParagraph.textContent = inputNumber + " is not a prime number.";
    }
}