import styles from "../app/list.module.css";

const List = ({ tasks, onToggleCompleted }) => {
    return (
        <ul className={styles.list}>
            {tasks.map(task => (
                <li key={task.id} className={`${styles.item} ${task.completed ? styles.completed : ''}`}>
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => onToggleCompleted(task.id)}
                        className={styles.checkbox}
                    />
                    {task.text}
                </li>
            ))}
        </ul>
    );
}

export default List;