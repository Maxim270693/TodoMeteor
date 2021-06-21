import React from 'react';
import {Task} from "./Task";

const tasks = [
    {id: 1, text: 'First Task'},
    {id: 2, text: 'Second Task'},
    {id: 3, text: 'Third Task'},
];

export const App = () => (
    <div className='App'>
    <h1>TodoList</h1>
        <ul>
            { tasks.map(task => <Task key={task.id} task={tasks}/>)}
        </ul>
    </div>
);
