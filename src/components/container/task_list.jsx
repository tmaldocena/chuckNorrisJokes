import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

//? Hoja de estilos SCSS
import '../../styles/task.scss';



const TaskListComponent = () => {
    

    const defaultTask = new Task('Example', 'This is an Example', false, LEVELS.NORMAL);

    //Estado del componente
    const [tasks, setTasks] = useState([defaultTask]);
    const [loading, setloading] = useState(true);


    //Control del ciclo de vida
    useEffect(() => {
        console.log("Task has been modified!");
        setloading(false);
        return () => {
            console.log("Task List component is going to unmount!");
        };
    }, [tasks]);


    const changeCompleted = (id) => {
        console.log("TODO: Cambiar el estado de una tarea!");
    }

    return (
        <div>
            <div>
                <h1>Your Tasks:</h1>
            </div>
            {/* Aplicar un for/map para renderizar una lista*/}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};

export default TaskListComponent;
