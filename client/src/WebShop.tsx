import React from 'react';
import './WebShop.css';
import {useRouteMatch, Switch, Route} from 'react-router-dom'; 
import Picture from './components/Picture/Picture'; 
import Pictures from './components/Pictures/Pictures'
;


function WebShop() {

  return (
    <div className="WebShop">
      Hello 
      <Switch>
        <Route path="/" > 
        <Pictures />
       
        </Route>
      </Switch>
    </div>
  );
}

export default WebShop; 
