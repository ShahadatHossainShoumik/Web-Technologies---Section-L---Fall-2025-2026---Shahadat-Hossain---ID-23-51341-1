let nameInput = document.getElementById("nameInput");
let rollInput = document.getElementById("rollInput");
let deptInput = document.getElementById("deptInput");
let addBtn = document.getElementById("addBtn");
let tableBody = document.getElementById("tableBody");

addBtn.onclick = function () {
  let name = nameInput.value.trim();
  let roll = rollInput.value.trim();
  let dept = deptInput.value.trim();

  if (name === "" || roll === "" || dept === "") {
    alert("Please fill all fields");
    return;
  }

  let tr = document.createElement("tr");

  let td1 = document.createElement("td");
  td1.textContent = name;

  let td2 = document.createElement("td");
  td2.textContent = roll;

  let td3 = document.createElement("td");
  td3.textContent = dept;

  let td4 = document.createElement("td");
  let delBtn = document.createElement("button");
  delBtn.textContent = "Delete";

  delBtn.onclick = function () {
    tr.remove();
  };

  td4.appendChild(delBtn);

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);

  tableBody.appendChild(tr);

  nameInput.value = "";
  rollInput.value = "";
  deptInput.value = "";
};
