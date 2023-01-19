import React, { useEffect, useState } from 'react';
import { getAllUsers, getAllPagedUsers, getUserDetails, login } from '../../services/fetchService';

const FetchExample = () => {

    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState({});
    const [totalUsers, setTotalUsers] = useState(12);
    const [usersPerPage, setUsersPerPage] = useState(6);
    const [pages, setPages] = useState(2);


    useEffect(() => {
        obtainUsers();
    }, []);

    const obtainUsers = () => {
        getAllUsers()
            .then((response) =>{
                console.log('All users: ', response.data);
                setUsers(response.data);
                setPages(response.total_pages);
                setUsersPerPage(response.per_page);
                setTotalUsers(response.total);
            })
            .catch((error) => alert('There was an error!'))
            .finally(() => {
                console.log('Process finished!');
                console.table(users);
            })
    }

    const obtainPagedUsers = (page) => {
        getAllPagedUsers(page)
            .then((response) =>{
                console.log('All paged users: ', response.data);
                setUsers(response.data);
                setTotalUsers(response.total);
                setUsersPerPage(response.per_page);
                setPages(response.total_pages);
            })
            .catch((error) => alert('There was an error!'))
            .finally(() => {
                console.log('Process finished!');
                console.table(users);
            })
    }

    const obtainUserDetails = (id) => {
        getUserDetails(id)
            .then((response) => {
                setSelectedUser(response.data)
            })
            .catch((error) => alert('There was an error!'))
            .finally(() => {
                console.log('Process finished!');
            })
    }

    const authUser = () => {
        login('eve.holt@reqres.in', 'cityslicka')
            .then((response) => {
                console.log('TOKEN', response.token);
                sessionStorage.setItem('token', response.token);
            })
            .catch((error) => alert('There was an error!', error))
            .finally(() => {
                console.log('Process finished!');
            })
    }

    return (
        <div style={{color:'wheat'}}>
            <button onClick={authUser}>Auth User</button>

            <h2>Users:</h2>
            { users.map((user, index) =>
                (
                    <p key={index} onClick={() => obtainUserDetails(user.id)}>
                        {user.first_name} {user.last_name}
                    </p>
                )
            )}

            <p>Showing {usersPerPage} users of {totalUsers}  in total.</p>
            <button onClick={() => obtainPagedUsers(1)}>
                1
            </button>
            <button onClick={() => obtainPagedUsers(2)}>
                2
            </button>
            <div>
                <h3>User details: </h3>
                {selectedUser && (
                    <div>
                        <p>Name: {selectedUser.first_name}</p>
                        <p>Last Name: {selectedUser.last_name}</p>
                        <p>Email: {selectedUser.email}</p>
                        <img alt='Avatar' src={selectedUser.avatar} style={{height: '50px', width: '50px'}}/>
                    </div>
                )}
            </div>
        </div>
    );
}

export default FetchExample;
