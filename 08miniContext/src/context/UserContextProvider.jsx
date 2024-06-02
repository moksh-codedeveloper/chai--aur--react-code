import React, { useState } from 'react'
import UserContext from "./UserContext"

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState([]);
    //u are using basically in context provider as your name value
    return(
        <>
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
        </>
    )
}

export default UserContextProvider;