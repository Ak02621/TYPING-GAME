document.addEventListener("DOMContentLoaded", () => {
    const musicToggle = document.getElementById("music-toggle");
    const musicIcon = document.getElementById("music-icon");
    const backgroundMusic = document.getElementById("background-music");

    let isPlaying = localStorage.getItem("musicStatus") === "playing";

    // Actualiza el estado inicial del botón y la música
    if (isPlaying) {
        musicToggle.classList.add("active");
        musicIcon.innerHTML = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path>'; // Ícono de "pause"
        backgroundMusic.play();
    } else {
        musicToggle.classList.remove("active");
        musicIcon.innerHTML = '<path d="M8 5v14l11-7z"></path>'; // Ícono de "play"
        backgroundMusic.pause();
    }

    musicToggle.addEventListener("click", () => {
        if (isPlaying) {
            backgroundMusic.pause();
            musicToggle.classList.remove("active");
            musicIcon.innerHTML = '<path d="M8 5v14l11-7z"></path>'; // Ícono de "play"
            localStorage.setItem("musicStatus", "paused");
        } else {
            backgroundMusic.play();
            musicToggle.classList.add("active");
            musicIcon.innerHTML = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path>'; // Ícono de "pause"
            localStorage.setItem("musicStatus", "playing");
        }
        isPlaying = !isPlaying;
    });
});




export const createStars = (density) => {
    const mainContainer = document.querySelector("body");
    for (let i = 0; i < density; i++) {
        const star = document.createElement("span");
        const horizontalPosition = `${Math.random() * 100}%`;
        const fallDelay = `${Math.random() * 5}s`;
        const fallDuration = `${Math.random() * 3 + 1}s`;
        const starSize = `${Math.random() * 5 + 2}px`;
        const starOpacity = Math.random().toFixed(2);

        star.classList.add("star");
        star.style.opacity = starOpacity;
        star.style.width = starSize;
        star.style.height = starSize;
        star.style.animation = `fall ${fallDuration} ${fallDelay} linear infinite`;
        star.style.left = horizontalPosition;

        mainContainer.appendChild(star);
    }
};


document.addEventListener("DOMContentLoaded", () => {
    createStars(63); 
});
