const openLetter = document.getElementById("openLetter");
const letter = document.getElementById("letter");
const topBtn = document.getElementById("topBtn");
const hearts = document.getElementById("hearts");

openLetter.addEventListener("click", () => {
    letter.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    createHeartExplosion();
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

function createHeart() {
    const heart = document.createElement("div");

    heart.className = "heart-particle";
    heart.innerHTML = Math.random() > 0.5 ? "♥" : "♡";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (12 + Math.random() * 20) + "px";
    heart.style.animationDuration = (5 + Math.random() * 6) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 12000);
}

function createHeartExplosion() {
    for (let i = 0; i < 18; i++) {
        setTimeout(() => {
            createHeart();
        }, i * 100);
    }
}

setInterval(createHeart, 1200);

window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 500) {
        topBtn.style.opacity = "1";
        topBtn.style.pointerEvents = "auto";
    } else {
        topBtn.style.opacity = "0";
        topBtn.style.pointerEvents = "none";
    }
});

topBtn.style.opacity = "0";
topBtn.style.pointerEvents = "none";
topBtn.style.transition = "opacity .3s ease";