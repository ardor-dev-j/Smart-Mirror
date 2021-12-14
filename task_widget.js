const container = document.querySelector(".ToDoList")

const taskInputField = document.querySelector("todo-list")
console.log(taskInputField)


taskInputField.onfocus =  addTask;

function addTask() {
    console.log('task widget class focused')

    document.onclick( function(event) {
    if (event.key === 'Enter'){
        console.log('keypressed')
        var new_taskInputField = taskInputField.cloneNode(true)
        container.appendchild(new_taskInputField)
    }
})
}
