import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Todo() {
    // Initialize state for todos and newTodo
    let [todos, setTodos] = useState([{ task: "sample-task", id: uuidv4() }]);
    let [newTodo, setNewTodo] = useState("");

    // Function to add a new task to the todos list
    let addTask = () => {
        // Update the state with the new task
        setTodos([...todos, { task: newTodo, id: uuidv4() }]);
        // Reset the input field
        setNewTodo("");
    }

    // Function to update the newTodo state when the input changes
    let updateTodo = (event) => {
        setNewTodo(event.target.value);
    }

    let deleteTask = (id) => {

        console.log(`id : "${id}" deleted`)
        setTodos(todos.filter((todo) => todo.id != id))
    }


    return (
        <div className="container">
            {/* Input field for new task */}
            <input
                type="text"
                placeholder="Enter Task"
                value={newTodo}
                onChange={updateTodo}
            />
            {/* Button to add new task */}
            <button onClick={addTask}>Add Task</button>
            <hr />
            {/* Display the tasks */}
            <h3><u>Tasks to do</u></h3>
            <ol>
                {/* Map over the todos array to display each task */}
                {todos.map((todo) => (
                    <span><li key={todo.id}>{todo.task} &nbsp;&nbsp;<button onClick={() => deleteTask(todo.id)}>delete</button></li> </span>
                ))}
            </ol>
        </div>
    );
}
