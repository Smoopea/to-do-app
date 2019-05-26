let ourForm = document.getElementById("ourForm")
let ourField = document.getElementById("ourField")
let ourList = document.getElementById("ourList") 
let listItem = document.createElement("li")


ourForm.addEventListener("submit", (e) => {
	e.preventDefault()
	if(ourField.value !== ""){
		createItem(ourField.value)
	}
})

function createButton(x){
	let taskButton = document.createElement("button")
	taskButton.setAttribute("id", "task")
	taskButton.setAttribute("onclick", "deleteItem(this)")
	taskButton.textContent = x
	listItem.appendChild(taskButton)
}

function createList() {
	listItem = document.createElement("li")
	ourList.appendChild(listItem)
}

function createItem(x) {
	createList()
	createButton(x)
	ourField.value = ""
	ourField.focus()
}

function deleteItem(elementToDelete) {
	elementToDelete.parentElement.remove()
}	