import React, { useContext } from 'react';
import { UserContext } from '../UserContext/UserContext';

const LogoutButton = ({redirectUrl = "/"}) => {
    const {setUserState} = useContext(UserContext);
    const handleLogout = (e: React.MouseEvent<HTMLInputElement>) => {
        console.log(document.cookie);
        fetch("/logout", {method: "POST"});
        setUserState({isAuthenticated: false, username: null})
    }
    return ( 
        <input type="button" value="Logout" onClick={handleLogout}/>
     );
}
 
export default LogoutButton;