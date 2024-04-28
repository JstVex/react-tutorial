'use client';

import { useState } from "react";
import styles from "../app/addTask.module.css";

const AddTask = ({ onAddTask }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input) return;
        onAddTask(input);
        setInput('');
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add a new task"
                className={styles.input}
            />
            <button type="submit" className={styles.button}>Add Task</button>
        </form>
    );
}

export default AddTask;