const images = [
  "https://picsum.photos/id/1015/800/400",
  "https://picsum.photos/id/1016/800/400",
  "https://picsum.photos/id/1025/800/400",
  "https://picsum.photos/id/1035/800/400",
  "https://picsum.photos/id/1043/800/400",
];

const mainImage = document.getElementById("mainImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

function showImage() {
  mainImage.src = images[currentIndex];
}

function changeImage(e) {
  const id = e.target.id;
  if (id === "prevBtn") {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  } else if (id === "nextBtn") {
    currentIndex = (currentIndex + 1) % images.length;
  }
  showImage();
}

prevBtn.addEventListener("click", changeImage);
nextBtn.addEventListener("click", changeImage);

showImage();

setInterval(function () {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
}, 3000);
