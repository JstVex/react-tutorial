'use client';
import { useState } from "react";
import { Pencil } from "lucide-react";
import styles from "../app/listTitle.module.css"

const ListTitle = () => {
    const [title, setTitle] = useState("To-Do List");
    const [isEditing, setIsEditing] = useState(false);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    const handleBlur = () => {
        setIsEditing(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setIsEditing(false);
        }
    };

    return (
        <div>
            {isEditing ? (
                <input
                    type="text"
                    value={title}
                    className={styles.titleInput}
                    onChange={handleTitleChange}
                    onKeyDown={handleKeyDown}
                    onBlur={handleBlur}
                    autoFocus
                />
            ) : (
                <div className={styles.container}>
                    <h1>{title}</h1>
                    <Pencil className={styles.edit} onClick={toggleEdit} size={22} />
                </div>
            )}
        </div>
    );
}

export default ListTitle;