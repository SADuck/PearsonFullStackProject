import React, { useState, useEffect } from 'react';

function UserList() {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({ username: '', password: '', email: '', phone: '', role: '' });

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const response = await fetch('http://localhost:9000/users');
        const data = await response.json();
        setUsers(data);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewUser({ ...newUser, [name]: value });
    };

    const handleAddUser = async () => {
        const response = await fetch('http://localhost:9000/adduser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        });
        if (response.ok) {
            setNewUser({ username: '', password: '', email: '', phone: '', role: '' });
            fetchUsers();
        }
    };

    return (
        <div>
            <h1>User List</h1>
            <h2>Add New User</h2>
            <input type="text" name="username" value={newUser.username} onChange={handleInputChange} placeholder="Username" />
            <input type="password" name="password" value={newUser.password} onChange={handleInputChange} placeholder="Password" />
            <input type="email" name="email" value={newUser.email} onChange={handleInputChange} placeholder="Email" />
            <input type="text" name="phone" value={newUser.phone} onChange={handleInputChange} placeholder="Phone" />
            <input type="text" name="role" value={newUser.role} onChange={handleInputChange} placeholder="Role" />
            <button onClick={handleAddUser}>Add User</button>
        </div>
    );
}

export default UserList;
