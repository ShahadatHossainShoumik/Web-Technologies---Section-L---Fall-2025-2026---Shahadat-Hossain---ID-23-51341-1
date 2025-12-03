let text = document.getElementById("text");
let size = 16;

function changeBackground() {
  text.style.backgroundColor = "yellow";
}

function increaseFont() {
  size = size + 2;
  text.style.fontSize = size + "px";
}

function centerText() {
  text.style.textAlign = "center";
}

function resetStyle() {
  size = 16;
  text.style.fontSize = "16px";
  text.style.backgroundColor = "white";
  text.style.textAlign = "left";
}
