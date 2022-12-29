import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {
    
    const defaultTask = new Task('Example', 'This is an Example', false, LEVELS.NORMAL);

    const changeState = (id) => {
        console.log("TODO: Cambiar el estado de una tarea!");
    }

    return (
        <div>
            <div>
                Your Tasks:
            </div>
            {/* Aplicar un for/map para renderizar una lista*/}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};

export default TaskListComponent;
