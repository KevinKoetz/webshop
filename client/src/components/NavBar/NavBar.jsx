import React, {Component} from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';  
import { UserContext } from '../UserContext/UserContext';
import LogoutButton from '../LogoutButton/LogoutButton';
import Login from '../Login/Login'; 

const  StyledNav= styled.nav`  
    background: #000;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5 rem;`  

class NavBar extends Component {
        static contextType= UserContext; 

        handleLogin=() => {
            this.setState({authenticating: true})
        }

        state= {authenticating: false}

    render() {
        const{userState} =this.context; 

        return (
            <StyledNav> 
       <FaBars />
       <ul>  
    
        <li> {userState.isAuthenticated ? <LogoutButton /> : <button onClick={this.handleLogin} > Login</button> }</li>   
        <li> <NavLink to="/cart" activeStyle> Cart</NavLink> </li> 
            
       </ul>
       {this.state.authenticating ? <Login /> : null}
       </StyledNav> 

        )
    }
}
 
export default NavBar;