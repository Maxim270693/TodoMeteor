import {Meteor} from 'meteor/meteor';
import React, {useState} from 'react';

export const TaskForm = ({user}) => {
    const [text, setText] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        if (!text) return;

        Meteor.call('tasks.insert', text);

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