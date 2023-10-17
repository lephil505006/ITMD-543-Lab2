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

const images = document.querySelectorAll("#slideshow img");
let index = 0;

function nextSlide() {
    images[index].style.opacity = 0;
    index = (index + 1) % images.length;
    images[index].style.opacity = 1;
}

setInterval(nextSlide, 2000);

function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").textContent = timeString;
}

setInterval(updateClock, 1000); // Update the clock every second