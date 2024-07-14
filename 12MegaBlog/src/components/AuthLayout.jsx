import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export default function AuthLayout({children , authentication = true}) {
    const navigation = useNavigate();
    const [loader, setLoader] = useState(true);
    const authStatus = useSelector(state => state.auth.status);
    useEffect(() => {
        // TODO : make it more easy to understand 
        if(authentication && authStatus !== authentication){
            navigation('/login');
        } else if(!authentication && authStatus !== authentication) {
            navigation('/');
        }
        setLoader(false);
    }, [authStatus, navigation, authentication]);
  return loader ? <h1>Loading... </h1> : <>{children}</>;
}
