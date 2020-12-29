var newListItemBtn = document.getElementById("new-item-btn");
var currentList = document.getElementsByClassName("list")[0];


newListItemBtn.addEventListener("click", function() {
    currentList.appendChild(createListItem());
})

function removeListItem() {
    this.parentElement.remove()
}

function toggleComplete() {
        if (!(this.previousElementSibling.classList.contains("text-input"))) {
            this.classList.toggle("complete-active");
            this.previousElementSibling.classList.toggle("complete");
        }
}

function editText() {
    var text = this.nextElementSibling
    if (this.classList.contains("editActive")) {
        this.classList.toggle("editActive");
        var listText = text.value;
        text.remove();
        var input = createListText(listText);
    } else {
        this.classList.toggle("editActive");
        var listText = text.innerText;
        text.remove();
        var input = createInput(listText);
    }
    if (this.nextElementSibling.classList.contains("complete-active")) {
        this.nextElementSibling.classList.remove("complete-active");
    }
    this.after(input);
}

function createInput(text="") {
    input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("value", text);
    input.classList.add("text-input");
    input.addEventListener("keypress", addTextAfterKeypress);
    return input;
}

function addTextAfterKeypress(event) {}


function createListItem() {
    var li = document.createElement("li");
    li.classList.add("list-item");
    li.appendChild(createDelBtn());
    li.appendChild(createEditBtn());
    li.appendChild(createInput());
    li.appendChild(createCompleteBtn());
    return li;
}

function createBtn() {
    var btn = document.createElement("button");
    btn.classList.add("btn");
    return btn;
}

function createDelBtn() {
    var deleteBtn = createBtn();
    deleteBtn.classList.add("del-btn");
    deleteBtn.appendChild(document.createTextNode("X"));
    deleteBtn.addEventListener("click", removeListItem);
    return deleteBtn;
}

function createEditBtn() {
    var editBtn = createBtn();
    editBtn.classList.add("edit-btn");
    editBtn.classList.add("editActive");
    editBtn.appendChild(document.createTextNode("…"));
    editBtn.addEventListener("click", editText);
    return editBtn;
}

function createCompleteBtn() {
    var completeBtn = createBtn();
    completeBtn.classList.add("complete-btn");
    completeBtn.appendChild(document.createTextNode("√"));
    completeBtn.addEventListener("click", toggleComplete);
    return completeBtn;
}

function createListText(text="") {
    var listText = document.createElement("div");
    listText.classList.add("list-text");
    listText.appendChild(document.createTextNode(text));
    return listText;
}
