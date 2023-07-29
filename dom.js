// console.dir(document);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.forms);
// console.log(document.images);

//GET ELEMENT BY ID

// let headerTitle = document.getElementById("header-title");
// let header = document.getElementById("main-header");
// console.log(headerTitle);
// // console.log(headerTitle.textContent);
// // console.log(headerTitle.innerText);
// // headerTitle.textContent = "Hello";
// // headerTitle.innerText = "Good bye";
// // headerTitle.innerHTML = "<h3>Hello</h3>";
// header.style.borderBottom = "3px solid #000";

const itemList = document.getElementById("items");

const listItems = itemList.querySelectorAll("li");

for (const li of listItems) {
  li.style.backgroundColor = "lightblue";
}

const newListItem = document.createElement("li");
newListItem.textContent = "New Item";

itemList.appendChild(newListItem);
