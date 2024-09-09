let submit = document.getElementById("submit");
let input = document.getElementById("Input");
let display = document.getElementById("tasks");






submit.addEventListener("click", function addTasks(){
    
if(input.value == ""){
    alert("Please Enter a task.")
}else{
    let li = document.createElement('li');
    li.innerHTML = `${input.value}`;
    let deletebutton = document.createElement("button")
    deletebutton.innerHTML = "remove";
    display.appendChild(li);
    input.value = "";
}
})





