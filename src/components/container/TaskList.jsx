import React from 'react';
import useList from '../../hooks/useList';
import LEVELS from '../../models/levels.enum';
import TaskFormik from '../pure/forms/taskFormik';

const TaskList = ({ user }) => {

    const defaultTask = {
        name: 'Formik',
        description: 'Default description',
        level: LEVELS.URGENT,
        completed: false
    }

    const tasks = useList([defaultTask]);
    const usuario = JSON.parse(user);


    return (
        <div>
            <h1>Task List - User: { usuario.email}</h1>
            <TaskFormik onAdd={(values) => tasks.push(values)}/>
            {
                tasks.isEmpty() ?
                    (<p>Task List is Empty...</p>)
                :
                    (
                        tasks.value.map((task, index) => (
                            <div key={index} style={{ display:'flex', alignItems:'center'}} role='button'>
                                <input type='checkbox' onClick={() => tasks.remove(index)} checked={false}></input>
                                <p style={{ fontWeight: 'bold', marginRight: '5px' }} >{task.name}</p>
                                <p>{task.description}</p>
                            </div>
                        ))
                    )
            }
        </div>
    );
}

export default TaskList;
