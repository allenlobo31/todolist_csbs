import React, { useState } from "react";

export default function ToDoFunction() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (!newTask.trim()) return;
    const task = { id: Date.now(), text: newTask, completed: false };
    setTasks([...tasks, task]);
    setNewTask("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-gray-100 rounded">
      <h2 className="text-xl font-bold mb-4 text-center">To-Do List</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="flex-grow p-2 border border-gray-300 rounded"
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center p-2 border border-gray-300 rounded"
          >
            <span
              onClick={() => toggleTask(task.id)}
              className={`cursor-pointer ${task.completed ? "line-through text-gray-500" : "text-black"}`}
            >
              {task.text}
            </span>
            <button
              onClick={() => setTasks(tasks.filter(t => t.id !== task.id))}
              className="bg-red-500 text-white text-xs px-2 py-1 rounded hover:bg-red-600 transition"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}