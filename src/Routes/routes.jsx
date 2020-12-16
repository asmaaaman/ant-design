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
        <Route exact path="/">
            <FormContainer />
          </Route>
          <Route  path="/login" component={FormContainer} />
       
          <Route path='/menu'>
              <SideMenu />
            </Route>
            <Route path='/login'>
              <FormContainer />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
        </Switch>
      </Router>
    );
  }
  
  