import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { fetchUsers } from '../redux';

const UserContainer = () => {

    const userData=useSelector(state=>state.user)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchUsers());
    }, []);

    
    return (userData.loading)? (  
        <div>
            Fetching data
        </div>
    ):(<div>
        {userData.users.map(user=><p>{user.name}</p>)}
    </div>);
}
 
export default UserContainer; 