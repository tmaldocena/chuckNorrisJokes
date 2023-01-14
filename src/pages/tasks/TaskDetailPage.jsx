import React from 'react';
import { useParams } from 'react-router-dom';

const TaskDetailPage = ({ task }) => {

    const {id} = useParams();

    return (
        <div>
            <h1>Task Detail - {id}</h1>
            <h2 style={{color:'white'}}>{task.name}</h2>
            <h3 style={{color:'wheat'}}>{task.description}</h3>
        </div>
    );
}

export default TaskDetailPage;
