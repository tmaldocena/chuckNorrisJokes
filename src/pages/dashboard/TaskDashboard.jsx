import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import TaskListComponent from '../../components/container/task_list';

const TaskDashboard = () => {

    const navigate = useHistory();
    const user = localStorage.getItem('user') || null;


    useEffect(() => {
        if(!user){
            navigate.push('/');
        }
    });


    return (<TaskListComponent user={user}/>);
}

export default TaskDashboard;
