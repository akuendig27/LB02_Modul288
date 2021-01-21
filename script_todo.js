let addButton = document.getElementById("addToDo");
let removeButton = document.getElementById("removeToDo");
let container = document.getElementById("toDoConainer");
let input = document.getElementById("input");

// Hinzufügen
function addTask() {
  // Neuer Paragraph
  var paragraph = document.createElement("p");
  paragraph.classList.add("paragraph-styling");
  // Text
  paragraph.innerText = input.value
  container.appendChild(paragraph)
  // Text wird nach Hinzufügen aus Eingabefeld gelöscht
  input.value = "";
  // Durchstreichen
  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
  })
  paragraph.addEventListener("dblclick", function () {
    container.removeChild(paragraph);
  })
}
// ----------

addButton.addEventListener("click", function () {
  addTask();
});
// Eingabe durch Klick auf Entertaste
input.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    addTask();
  }
});
// ----------

// Löschen
onkeypress = "handle(event)"
removeButton.addEventListener("click", function () {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
})
// ----------