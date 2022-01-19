import React from 'react';
import './WebShop.css';
import {useRouteMatch, Switch, Route} from 'react-router-dom'; 
import Picture from './components/Picture/Picture'; 
;


function WebShop() {

  const { path, url } = useRouteMatch();
  return (
    <div className="WebShop">
      WebShop 
      <Switch>
        <Route path="/picture/:id">
        <Picture />
        </Route>
      </Switch>
    </div>
  );
}

export default WebShop; 
