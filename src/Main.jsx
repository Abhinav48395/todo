import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addUser, deleteUser,updateUsername } from './features/Users';
import { useState } from 'react';


const Main = () => {

    const dispatch = useDispatch();
    const userList = useSelector((state) => state.users.value)


    const [name, setName] = useState("");
    const [username, setUsername] = useState("")
    const [newUsername,setNewUsername] = useState("");

    return (
        <div>
            <h1>My CRUD App</h1>
            {" "}
            <div className="addUser">
                <input type="text" placeholder='Name...'
                    onChange={(event) => {
                        setName(event.target.value);
                    }} />
                <input type="text" placeholder='UserName...'
                    onChange={(event) => {
                        setUsername(event.target.value);
                    }} />
                <button onClick={() => { dispatch(addUser({ id: userList[userList.length - 1].id + 1, name, username })) }} >Add User</button>
            </div>

            <div className="displayUsers">
                {userList.map((user) => {
                    return (
                        <div>
                            <h3>{user.name}</h3>
                            <p>{user.username}</p>
                            <input type="text" placeholder='New Username...'
                                onChange={(event) => {
                                    setNewUsername(event.target.value);
                                }} />
                                <button onClick={()=>{
                                    dispatch(updateUsername({id: user.id, username:newUsername}))
                                }}>Update</button>
                                 <button
                                 onClick={()=>{
                                    dispatch(deleteUser({id: user.id}))
                                }}
                                 >Delete</button>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Main;