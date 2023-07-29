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

// const itemList = document.getElementById("items");

// const listItems = itemList.querySelectorAll("li");

// for (const li of listItems) {
//   li.style.backgroundColor = "lightblue";
// }
// listItems[1].style.backgroundColor = "green";
// listItems[2].style.display = "none";

// const newListItem = document.createElement("li");
// newListItem.textContent = "New Item";

// itemList.appendChild(newListItem);
// let items = document.getElementsByClassName("list-group");
// for (let i = 0; i < items[0].children.length; i++) {
//   items[0].children[i].style.backgroundColor = "white";
// }

var itemList = document.querySelector("#items");
// itemList.parentElement.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentElement.parentElement.parentElement);
// let lastChild = itemList.lastElementChild;
// lastChild.textContent = "Hello last child";
console.log(itemList.nextElementSibling);
console.log(itemList.previousElementSibling);
