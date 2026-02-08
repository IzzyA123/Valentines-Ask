// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");
const heartsLayer = document.querySelector(".hearts");
const windowBox = document.querySelector(".letter-window");
const fanfare = new Audio("fanfare.mp3");

fanfare.volume = 0.6;

function spawnHeart(){
  const h = document.createElement("div");
  h.className = "heart";
  h.textContent = "❤️";
  h.style.left = Math.random() * 100 + "vw";
  h.style.animationDuration = (5 + Math.random() * 4) + "s";
  h.style.fontSize = (12 + Math.random() * 16) + "px";
  heartsLayer.appendChild(h);

  setTimeout(() => h.remove(), 9000);
}

setInterval(spawnHeart, 450);

function launchConfetti(count = 80) {
  const layer = document.createElement("div");
  layer.className = "confetti";
  document.body.appendChild(layer);

  for (let i = 0; i < count; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";

    // Random position across the screen
    piece.style.left = Math.random() * 100 + "vw";

    // Random size
    const w = 6 + Math.random() * 10;
    const h = 8 + Math.random() * 14;
    piece.style.width = w + "px";
    piece.style.height = h + "px";

    // Random fall duration + slight delay
    const dur = 2.2 + Math.random() * 1.8;
    const delay = Math.random() * 0.3;
    piece.style.animationDuration = dur + "s";
    piece.style.animationDelay = delay + "s";

    // Random horizontal drift + rotation
    const drift = (Math.random() * 2 - 1) * 120;
    piece.style.transform = `translateX(${drift}px) rotate(${Math.random() * 360}deg)`;

    // Random color (no “theme” needed)
    piece.style.backgroundColor = `hsl(${Math.random() * 360}, 90%, 65%)`;

    layer.appendChild(piece);
  }

  // Clean up
  setTimeout(() => layer.remove(), 4500);
}





// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
    }, 50);
});

function typeText(el, text, speed=40){
  el.textContent = "";
  let i = 0;
  const t = setInterval(() => {
    el.textContent += text[i++];
    if(i >= text.length) clearInterval(t);
  }, speed);
}

envelope.addEventListener("click", () => {
  // after you show the letter...
  setTimeout(() => typeText(title, "Will you be my Valentine?"), 250);
});


// Logic to move the NO btn

//noBtn.addEventListener("mouseover", () => {
 //const min = 200;
//const max = 200;

 //const distance = Math.random() * (max - min) + min;
 //const angle = Math.random() * Math.PI * 2;
// const moveX = Math.cos(angle) * distance;
 //const moveY = Math.sin(angle) * distance;

  //noBtn.style.transition = "transform 0.3s ease";
//// noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
//});







// Logic to make YES btn to grow *//

let yesScale = 1;

yesBtn.style.position = "relative"
yesBtn.style.transformOrigin = "center center";
yesBtn.style.transition = "transform 0.3s ease";
noBtn.addEventListener("click", () => {
    yesScale += 2;

    if (yesBtn.style.position !== "fixed") {
        yesBtn.style.position = "fixed";
        yesBtn.style.top = "50%";
        yesBtn.style.left = "50%";
        yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
    } else {
        yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
    }
});

// YES is clicked

yesBtn.addEventListener("click", () => {
    launchConfetti(90);
    fanfare.currentTime = 0;
fanfare.play();


    title.textContent = "Yippeeee!";

    catImg.src = "cat_dance.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";
    function celebrate(){
  const burst = document.createElement("div");
  burst.className = "burst";
  windowBox.appendChild(burst);

  for(let i=0;i<18;i++){
    const s = document.createElement("span");
    s.textContent = "♥";
    s.style.setProperty("--x", (Math.random()*220-110) + "px");
    s.style.setProperty("--y", (Math.random()*180-90) + "px");
    burst.appendChild(s);
  }
  setTimeout(()=> burst.remove(), 700);
}




});