import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import routes from './routes';


function RouterProvider() {
  return (
   
     
      <Switch>
        {
          routes.map(route => 
            <Route path={route.path} component={route.component} exact={route.exact} key={route.path} />
          )
        } 
      </Switch>
      
  
  )
}

export default RouterProvider;