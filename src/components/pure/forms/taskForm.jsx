import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

const TaskForm = ({ add, length }) => {

    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const levelRef = useRef(LEVELS.NORMAL);

    
    function addTask(event) {
        event.preventDefault();
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        );
        add(newTask);
    }

    const normalStyle = {
        color: 'blue',
        fontWeight: 'bold'
    }

    const urgentStyle = {
        color: 'yellow',
        fontWeight: 'bold'
    }

    const blockingStyle = {
        color: 'tomato',
        fontWeight: 'bold'
    }
    
    return (
        <div className='card p-3'>
        <h5>Add a new task</h5>
            <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
                
                <div className='form-outline flex-fill'>
                    <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg mt-2' required autoFocus placeholder='Insert the name of the task'></input>
                    <input ref={descriptionRef} id='inputDescription' type='text' className='form-control form-control-lg mt-2' required autoFocus placeholder='Insert the description of the task'></input>
                    <select ref={levelRef} className='form-control form-control-lg mt-2' defaultValue={LEVELS.NORMAL} id='selectLevel'>
                        <option style={normalStyle} value={LEVELS.NORMAL}>Normal</option>
                        <option style={urgentStyle} value={LEVELS.URGENT}>Urgent</option>
                        <option style={blockingStyle} value={LEVELS.BLOCKING}>Blocking</option>
                    </select>
                    <button type='submit' className='btn btn-success btn-large mt-3 ms-2'>
                    {length > 0 ? 'Add New Task' : 'Create Task' }
                    </button>
                </div>
            </form>
        </div>
    );
}

TaskForm.protoTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.func.isRequired
}

export default TaskForm;
