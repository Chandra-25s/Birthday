/* =========================
   OPEN SURPRISE
========================= */

function openSurprise() {

    const intro = document.getElementById("intro");
    const music = document.getElementById("bgMusic");

    intro.classList.add("hide");

    music.play().catch(() => {
        console.log("Music autoplay blocked by browser.");
    });

    createHearts();

    setTimeout(() => {
        document.getElementById("mainContent")
            .scrollIntoView({
                behavior: "smooth"
            });
    }, 900);
}


/* =========================
   SCROLL
========================= */

function scrollToSection(id) {

    document.getElementById(id)
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================
   FLOATING HEARTS
========================= */

function createHearts() {

    setInterval(() => {

        const heart = document.createElement("div");

        heart.classList.add("heart");

        const hearts = ["❤️", "💕", "💗", "💖", "💓", "🌸"];

        heart.innerHTML =
            hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.fontSize =
            (15 + Math.random() * 25) + "px";

        heart.style.animationDuration =
            (4 + Math.random() * 4) + "s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 8000);

    }, 700);

}


/* =========================
   BIRTHDAY CELEBRATION
========================= */

function celebrate() {

    createConfetti();

    const button = document.querySelector(".wish-box button");

    button.innerHTML = "🎉 Wish Sent To The Universe! ❤️";

    button.style.background =
        "linear-gradient(90deg,#e91e63,#9c27b0)";

    button.style.color = "white";

    setTimeout(() => {

        document.querySelector(".final-section")
            .scrollIntoView({
                behavior: "smooth"
            });

    }, 1500);

}


/* =========================
   CONFETTI
========================= */

function createConfetti() {

    const container =
        document.getElementById("confetti");

    for (let i = 0; i < 150; i++) {

        const piece =
            document.createElement("div");

        piece.classList.add("confetti-piece");

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.width =
            (5 + Math.random() * 10) + "px";

        piece.style.height =
            (5 + Math.random() * 15) + "px";

        piece.style.background =
            `hsl(${Math.random() * 360}, 80%, 65%)`;

        piece.style.animationDelay =
            Math.random() * 2 + "s";

        container.appendChild(piece);

        setTimeout(() => {
            piece.remove();
        }, 6000);

    }

}