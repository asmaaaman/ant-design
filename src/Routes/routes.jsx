import React from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
  
  } from "react-router-dom";



import About from '../componets/AboutPage/about';
import FormContainer from '../containers/FormContainer/formcontainer';
import SideMenu from '../containers/sideMenu/sideMenu'




export default function Routes({ location }) {
    return (
      <Router >
        <Switch>
    
          <Route  path="/login" component={FormContainer} />
       
          <Route path='/about'>
              <SideMenu />
            </Route>
        </Switch>
      </Router>
    );
  }
  
  