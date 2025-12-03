let btn = document.getElementById("mode");
let mode = "light";
const header = document.getElementById("header");
const content = document.getElementById("content");
const footer = document.getElementById("footer");
const lightTheme = { background: "white", text: "black", border: "gray" };
const darkTheme = { background: "black", text: "white", border: "lightgray" };
function applyTheme() {
  const theme = mode === "light" ? lightTheme : darkTheme;
  document.body.style.backgroundColor = theme.background;
  document.body.style.color = theme.text;
  header.style.backgroundColor = theme.background;
  header.style.color = theme.text;
  header.style.borderBottom = "1px solid " + theme.border;
  content.style.backgroundColor = theme.background;
  content.style.color = theme.text;
  content.style.border = "1px solid " + theme.border;
  footer.style.backgroundColor = theme.background;
  footer.style.color = theme.text;
  footer.style.borderTop = "1px solid " + theme.border;
  btn.innerText =
    mode === "light" ? "Switch to Dark Mode" : "Switch to Light Mode";
}
document.body.style.backgroundColor = lightTheme.background;
btn.addEventListener("click", modeChange);

function modeChange() {
  if (mode === "light") {
    mode = "dark";
    document.body.style.backgroundColor = darkTheme.background;
  } else {
    mode = "light";
    document.body.style.backgroundColor = lightTheme.background;
  }
  applyTheme();
}
applyTheme();
