import React from "react";

const UserContext = React.createContext(); 
/*
    it will become the provider 
    which means every component globally be accessible to this context 
    <UserContext>
        <Login />
        <Card>
            <Data/>
        </Card>
    </UserContext>

    like this 
*/
export default UserContext;