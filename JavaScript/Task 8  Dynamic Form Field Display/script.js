function showFields() {
  let type = document.getElementById("userType").value;
  let rollBox = document.getElementById("rollBox");
  let deptBox = document.getElementById("deptBox");

  if (type === "student") {
    rollBox.style.display = "block";
    deptBox.style.display = "none";
  } else if (type === "teacher") {
    rollBox.style.display = "none";
    deptBox.style.display = "block";
  } else {
    rollBox.style.display = "none";
    deptBox.style.display = "none";
  }
}
