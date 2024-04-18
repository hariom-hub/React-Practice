import { useState } from "react";

export default function Todo() {
    // Initialize state for todos and newTodo
    let [todos, setTodos] = useState(["sample task"]);
    let [newTodo, setNewTodo] = useState("");

    // Function to add a new task to the todos list
    let addTask = () => {
        // Update the state with the new task
        setTodos([...todos, newTodo]);
        // Reset the input field
        setNewTodo("");
    }

    // Function to update the newTodo state when the input changes
    let updateTodo = (event) => {
        setNewTodo(event.target.value);
        console.log(event.target.value)
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
                    <li>{todo}</li>
                ))}
            </ol>
        </div>
    );
}
