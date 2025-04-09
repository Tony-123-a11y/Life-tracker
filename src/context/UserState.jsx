import React from 'react'
import { useState } from 'react';
import UserContext from './UserContext'
const UserState = (props) => {
    const [userData, setuserData] = useState(
        {
            login:true,
            token:'',

        }
    );
  return (
    <UserContext.Provider value={userData}>
        {props.children}
    </UserContext.Provider>
  )
}

export default UserState
