import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

//? Hoja de estilos SCSS
import '../../styles/task.scss';
import TaskForm from '../pure/forms/taskForm';
import { Button } from 'bootstrap';



const TaskListComponent = () => {
    

    const defaultTask = new Task('Example 1', 'This is an Example', true, LEVELS.NORMAL);
    const defaultTask2 = new Task('Example 2', 'This is another Example', false, LEVELS.URGENT);
    const defaultTask3 = new Task('Example 3', 'This is a third Example', true, LEVELS.BLOCKING);

    //Estado del componente
    const [tasks, setTasks] = useState([defaultTask, defaultTask2, defaultTask3]);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        console.log('Task State has been modified!');
        setTimeout(() => {
            setloading(false);
        }, 2000);
        return () => {
            console.log('TaskList component is going to unmount...');
        };
    }, [tasks]);


    function completeTask(task){
        console.log('Complete this Task: ', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[index].completed = !tempTasks[index].completed;
        //* Update the state of the component and it'll update the iteration of the tasks in order to show the task updated
        setTasks(tempTasks);
    }

    function deleteTask(task){
        console.log('The task will be deleted: ', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index,1);
        setTasks(tempTasks);
    }

    function addTask(task){
        const tempTasks = [...tasks];
        tempTasks.push(task);
        setTasks(tempTasks);
    }

    const Table = () => {
        return (
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th scope='col'>Title</th>
                        <th scope='col'>Description</th>
                        <th scope='col'>Priority</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* iterar sobre una lista de tareas  */}
                    { tasks.map((task, index) => {
                        return (
                            <TaskComponent key={index} task={task} complete={completeTask} remove={deleteTask}></TaskComponent>
                        )
                    }) }
                </tbody>
            </table>
        );
    }

    let tasksTable; 
    
    if(tasks.length > 0){
        tasksTable = <Table></Table>
    }else{
        tasksTable = (
            <div>
                <h4>There are not task to show</h4>
                <h6>Please create a task</h6>
            </div>
        )
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3 row justify-content-around'>
                        <h5 className='col mt-2'>Your Tasks:</h5>
                        {/*<button className='col-2 btn bg-success'>Add</button>*/}
                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={{position: 'relative', height: '400px'}}>
                        {loading ? <p>Loading Tasks...</p> : tasksTable}
                    </div>
                </div>
            </div>
            <TaskForm add={addTask} length={tasks.length}></TaskForm>    
        </div>
    );
};

export default TaskListComponent;
