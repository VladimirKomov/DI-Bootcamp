import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "../redux/userSlice.js";


const UserData = () => {
    const dispatch = useDispatch();

    //store
    const usersList = useSelector(state => state.usersStore.users);
    const status = useSelector(state => state.usersStore.status);
    const error = useSelector(state => state.usersStore.error);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchUsers());
        }
    }, [status, dispatch]);

    return (
        <div>
            <h2>User data</h2>
            {status === 'loading' && <p>Loading...</p>}
            {status === 'failed' && <p>Error: {error}</p>}
            {status === 'succeeded' && (
                <ul>
                    {usersList.map(user => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default UserData;