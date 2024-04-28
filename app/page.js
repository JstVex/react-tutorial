'use client';

import AddTask from "@/components/AddTask";
import List from "@/components/List";
import ListTitle from "@/components/ListTitle";
import { useState } from "react";

const initialTasks = [
  { id: 1, text: 'Finish the Ionic app', completed: false },
];

export default function Home() {
  const [tasks, setTasks] = useState(initialTasks);

  const addTask = taskText => {
    const newTask = { id: Date.now(), text: taskText, completed: false };
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  const toggleCompleted = taskId => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <main className="container">
      <ListTitle />
      <AddTask onAddTask={addTask} />
      <List tasks={tasks} onToggleCompleted={toggleCompleted} />
    </main>
  );
}
