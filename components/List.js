import styles from "../app/list.module.css";
import { Trash2 } from "lucide-react";

const List = ({ tasks, onToggleCompleted, onDeleteTask }) => {
    return (
        <ul className={styles.list}>
            {tasks.map(task => (
                <li key={task.id} className={`${styles.item} ${task.completed ? styles.completed : ''}`}>
                    <div>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => onToggleCompleted(task.id)}
                            className={styles.checkbox}
                        />
                        {task.text}
                    </div>
                    <Trash2 onClick={() => onDeleteTask(task.id)} className={styles.delete} />
                </li>
            ))}
        </ul>
    );
}

export default List;