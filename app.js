let btn = document.getElementById("btn")

function createHeart() {
    const heart = document.createElement("div")
    heart.classList.add("heart")
    heart.innerHTML = "❤️"
    heart.style.left = Math.floor(Math.random() * 101) + "vw";
    heart.style.animationDuration = Math.random * 2 + 3 + "s";
    document.body.appendChild(heart)
    setTimeout(() => {
        heart.remove;
    }, 1000)
}
setInterval(createHeart, 300)