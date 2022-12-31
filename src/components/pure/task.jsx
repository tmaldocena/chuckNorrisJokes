import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';

//? Hoja de Estilos
import '../../styles/task.scss';

const TaskComponent = ({ task }) => {

    useEffect(() => {
        console.log("Created task!");
        return () => {
            console.log(`Task: ${task.name} is going to `)
        };
    }, [task]);


    return (
        <div>
            <h2 className='task-name'>
                Nombre: { task.name }
            </h2>
            <h3>
                Descripcion: { task.description }
            </h3>
            <h4>
                Level: { task.level }
            </h4>
            <h5>
                Esta tarea está: { task.completed ? 'COMPLETED':'PENDING' }
            </h5>
        </div>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};


export default TaskComponent;
