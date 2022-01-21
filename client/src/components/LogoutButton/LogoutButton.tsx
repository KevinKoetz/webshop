import React from 'react';

const LogoutButton = ({redirectUrl = "/"}) => {
    const handleLogout = (e: React.MouseEvent<HTMLInputElement>) => {
        console.log(document.cookie);
        fetch("/logout", {method: "POST"});
    }
    return ( 
        <input type="button" value="Logout" onClick={handleLogout}/>
     );
}
 
export default LogoutButton;