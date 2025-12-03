let textInput = document.getElementById("textInput");
let analyzeBtn = document.getElementById("analyzeBtn");
let result = document.getElementById("result");

analyzeBtn.onclick = function () {
  let text = textInput.value;

  if (text.trim() === "") {
    result.innerHTML = "Please enter some text first.";
    return;
  }

  let charCount = text.length;

  let words = text.split(" ");
  let cleanWords = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].trim() !== "") {
      cleanWords.push(words[i]);
    }
  }

  let wordCount = cleanWords.length;

  let reversed = text.split("").reverse().join("");

  result.innerHTML =
    "Total Characters: " +
    charCount +
    "<br>" +
    "Total Words: " +
    wordCount +
    "<br><br>" +
    "Reversed Text:<br>" +
    reversed;
};
