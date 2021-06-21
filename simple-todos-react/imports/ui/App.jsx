import React from 'react';
import {Task} from "./Task";
import { useTracker } from 'meteor/react-meteor-data';
import {TasksCollection} from "../api/TasksCollection";


export const App = () => {
    const tasks = useTracker(() => TasksCollection.find({}).fetch())

    return(
        <div className='App'>
            <h1>TodoList</h1>
            <ul>
                { tasks.map(task => <Task key={ task._id } task={ task }/>) }
            </ul>
        </div>
    )
};
