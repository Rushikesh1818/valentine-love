const noBtn = document.getElementById("noBtn");
const buttonsBox = document.querySelector(".buttons");

// NO button sirf buttons ke andar move kare
noBtn.addEventListener("mouseover", () => {
  const maxX = buttonsBox.clientWidth - noBtn.offsetWidth;
  const maxY = buttonsBox.clientHeight - noBtn.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

function yesClicked() {
  document.body.innerHTML = `
    <div style="
      height:100vh;
      width:100%;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      background:linear-gradient(135deg,#ff758c,#ff7eb3);
      color:white;
      text-align:center;
      padding:20px;
      overflow:hidden;
    ">
      <audio autoplay loop>
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg">
      </audio>

      <h1>I love you Devu ❤️🥰</h1>
      <p>You made my Valentine special 💖</p>

      <img src="/teddy.gif" style="width:260px; max-width:90%;">
    </div>
  `;
}
