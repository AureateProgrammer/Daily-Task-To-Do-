

import { useState } from "react"

export default function ToDo() {
  const [title, setTitle] = useState("")
  const [tasks, setTasks] = useState<{ title: string; completed: boolean }[]>([])

  const toggleTodo = (index: number) => {
    setTasks((prev) =>
      prev.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task,
      ),
    )
  }

  const addTask = () => {
    if (!title.trim()) return

    const newTask = {
      title: title.trim(),
      completed: false,
    }

    setTasks((prev) => [...prev, newTask])
    setTitle("")
  }

  const removeTask = () => {
    setTasks((prev) => prev.slice(0, -1))
  }

  return (
    <div>
      <h1>ToDo</h1>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input type="text" placeholder="Task Description" />


      <button onClick={addTask}>Add Task</button>
      <button onClick={removeTask}>Remove Task</button>

      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            onClick={() => toggleTodo(index)}
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            {task.title}
          </li>
        ))}

        
      </ul>


    </div>
  )
}
