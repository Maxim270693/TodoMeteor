import React from 'react';
import {Task} from "./Task";
import {useTracker} from 'meteor/react-meteor-data';
import {TasksCollection} from "../api/TasksCollection";
import {TaskForm} from './TaskForm';


export const App = () => {

    const tasks = useTracker(() => TasksCollection.find({}, {sort: {createdAt: -1}}).fetch());
    const deleteTask = ({_id}) => TasksCollection.remove(_id);

    const toggleChecked = ({_id, isChecked}) => {
        TasksCollection.update(_id, {
            $set: {
                isChecked: !isChecked
            }
        })
    };

    return (
        <div className='App'>
            <h1>TodoList</h1>
            <TaskForm/>
            <ul>
                {tasks.map(task => <Task key={task._id}
                                         task={task}
                                         onCheckboxClick={toggleChecked}
                                         onDeleteClick={deleteTask}
                />)}
            </ul>
        </div>
    )
};
