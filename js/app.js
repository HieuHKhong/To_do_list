let input = document.getElementById("Input"); // Input bar
let ol = document.getElementById("tasks"); // Display ol
let submit = document.getElementById("submit"); // Submit Button

submit.addEventListener("click", function displayInput(){
    if (input.value == ""){
        alert("Please enter a task:")
    }else{
    let li = document.createElement('li'); // Creates an li element
    ol.appendChild(li); // puts the li inside the already created ol display
    li.innerHTML = input.value; // Displays the input as a list.


    let deletebtn = document.createElement('button'); // Creates an element for button
    deletebtn.setAttribute('id', "delete")
    deletebtn.textContent = 'Delete'; // Text inside the button.
    deletebtn.addEventListener("click", function deletebutton(){ // When Delete button is clicked delete parent that its in.
        this.parentElement.remove(); // Deletes the element
    })
    li.appendChild(deletebtn); // Puts eleement inside the li element


    let editbtn = document.createElement("button"); // Creates an element for a button called edit
    editbtn.setAttribute('id', "edit")
    editbtn.textContent = 'Edit'; //Text inside button becomes "edit".
    editbtn.addEventListener("click", function edit(){
        let editInput = prompt("Enter task:") // Prompt a user to input task
        li.innerHTML = editInput; // Text in display becomes whats inputted
        li.appendChild(deletebtn); // Puts eleement inside the li element
        li.appendChild(editbtn); // Puts an edit button inside the li element
        li.appendChild(donebtn);
    })
    li.appendChild(editbtn)// Puts an edit button inside the li element

    input.value = ""; // Empties the input bar for new input.

    let donebtn = document.createElement("button");
    donebtn.setAttribute('id', "done")
    donebtn.textContent = "Done"
    donebtn.addEventListener("click", function lineThrough(){
        li.classList.toggle("strikethrough")
    })
    li.appendChild(donebtn);

}})