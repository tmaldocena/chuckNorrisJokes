import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';

//? Hoja de Estilos
import '../../styles/task.scss';

const TaskComponent = ({ task, complete, remove }) => {

    useEffect(() => {
        console.log("Created task!");
        return () => {
            console.log(`Task: ${task.name} is going to `)
        };
    }, [task]);

    function taskLevelBadge(){
        switch(task.level) {
            case LEVELS.NORMAL:
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-primary'>
                            { task.level }
                        </span>
                    </h6>
                );
            case LEVELS.URGENT:
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-warning'>
                            { task.level }
                        </span>
                    </h6>
                );
            case LEVELS.BLOCKING:
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-danger'>
                            { task.level }
                        </span>
                    </h6>
                );
            default:
                break;
        }
    }

    function taskCompleteIcon(){
        if(task.completed){
            return (<i className='bi-toggle-on task-action' onClick={() => complete(task)} style={{color:'green'}}></i>); 
        }else{
            return (<i className='bi-toggle-off task-action' onClick={() => complete(task)} style={{color:'grey'}}></i>);
        }
    }


    const taskCompleted = {
        color: 'gray',
        fontWeight: 'bold',
        textDecoration: 'line-through'
    }

    const taskPending = {
        color: 'tomato',
        fontWeight: 'bold'
    }

    return (
        <tr className='fw-normal' style={task.completed ? taskCompleted : taskPending}>
            <th>
                <span className='ms-2'>{ task.name }</span>
            </th>
            <td className='align-middle'>
                <span>{ task.description }</span>
            </td>
            <td className='align-middle'>
                {taskLevelBadge()}
            </td>
            <td className='align-middle'>
                {taskCompleteIcon()}
                <i className='bi bi-trash-fill task-action' onClick={() => remove(task)} style={{color:'tomato', fontWeight:'bold'}}></i>
            </td>
        </tr>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task),
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default TaskComponent;
