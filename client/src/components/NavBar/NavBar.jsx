import React, {Component} from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom'; 
import { UserContext } from '../UserContext/UserContext';
import LogoutButton from '../LogoutButton/LogoutButton';
import Login from '../Login/Login'; 
import './NavBar.css'; 


const  StyledNav= styled.nav`  
    background: #8bd9ed;
    height: 48px;
    display: flex;
    justify-content: space-between; 
    padding: 0.5 rem;
    width: 100%; 


    ul{list-style:none;
    display: grid;
    grid-template-columns: 1fr auto auto; 
    gap: 2rem; 
    width: 100%;
    margin:0;
    padding:0; 
    padding-right:2rem; 
    h2 {
        margin:0;
        padding:0; 
    }
    align-items: center; 
    } 

    .title{
        justify-self: center;   
        color: rgb(80, 20, 80); 
        font-family: cursive; 
        font-size:22px; 
        transition: all 0.2s ease-in-out;
    }

    button{
        border-radius: 4px;
        background: rgb(48, 18, 48); 
        padding: 10px 22px;
        color: #fff;
        font-size: 1.4em;
        outline: none;
        border: none;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        text-decoration: none;

        margin-left: 24px;
        &:hover {
          transition: all 0.2s ease-in-out;
          background: rgb(228, 228, 219);
          color: #010606;
    }

    `  

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
       <ul>  
        <li className="title"><h2>Food for soul </h2></li>  
        <li> {userState.isAuthenticated ? <LogoutButton /> : <button onClick={this.handleLogin} > Login</button> }</li>   
        <li> <NavLink to="/cart" activeStyle> <button>Cart</button> </NavLink> </li>       
       </ul>
       {this.state.authenticating ? <Login onClose={()=> this.setState({authenticating: false}) } /> : null} 
       </StyledNav> 
        )
    }
}
 
export default NavBar;