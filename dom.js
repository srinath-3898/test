var form = document.getElementById("addForm");
var usersList = document.getElementById("users");

// Form submit event
form.addEventListener("submit", addUser);
// Delete event
users.addEventListener("click", removeItem);
// Filter event

// Add item
function addUser(e) {
  e.preventDefault();
  var name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  var li = document.createElement("li");
  li.className = "list-group-item";
  li.innerHTML = `<div><p>${name}</p><p>${email}</p></div>`;
  var deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  deleteBtn.appendChild(document.createTextNode("X"));
  li.appendChild(deleteBtn);
  let editBtn = document.createElement("button");
  editBtn.className = "btn btn-sm float-right delete mr-2";
  editBtn.appendChild(document.createTextNode("Edit"));
  li.appendChild(editBtn);
  const users = JSON.parse(localStorage.getItem("users"));
  if (users) {
    users.push({ name, email });
    localStorage.setItem("users", JSON.stringify(users));
  } else {
    const users = new Array();
    users.push({ name, email });
    localStorage.setItem("users", JSON.stringify(users));
  }
  usersList.appendChild(li);
}

// Remove item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are You Sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e) {
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName("li");
  // Convert to an array
  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    let itemDescription = item.children[2].textContent;
    console.log(itemDescription.split(" ").join(""));
    if (
      itemName.toLowerCase().indexOf(text) != -1 ||
      itemDescription.toLocaleLowerCase().indexOf(text) !== -1
    ) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
function getUsers() {
  console.log(localStorage.getItem("users"));
}

document.addEventListener("DOMContentLoaded", getUsers);
