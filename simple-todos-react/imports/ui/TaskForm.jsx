import React, {useState} from 'react';
import {TasksCollection} from '/imports/api/TasksCollection';

export const TaskForm = () => {
    const [text, setText] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        if (!text) return;

        TasksCollection.insert({
            text: text.trim(),
            createdAt: new Date()
        });

        setText("");
    };

    const onChangeHandler = (e) => setText(e.currentTarget.value)

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Type to add new tasks"
                value={text}
                onChange={onChangeHandler}
            />

            <button type="submit">Add Task</button>
        </form>
    );
};