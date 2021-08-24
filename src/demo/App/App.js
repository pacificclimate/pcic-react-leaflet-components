import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Route, Redirect, Switch } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

import DemoBCBaseMap from '../DemoBCBaseMap';
import DemoYNWTBaseMap from '../DemoYNWTBaseMap';
import DemoBCBaseMapA from '../DemoBCBaseMapA';

const navSpec = [
  { label: 'BCBaseMap', path: 'BCBaseMap', component: DemoBCBaseMap },
  { label: 'BCBaseMapA', path: 'BCBaseMapA', component: DemoBCBaseMapA },
  { label: 'YNWTBaseMap', path: 'YNWTBaseMap', component: DemoYNWTBaseMap },
];
const defaultPath = 'BCBaseMapA';


export default class App extends React.Component {
  render() {
    return (
      <Router basename={'/#'}>
        <div>
          <h1>PCIC React Leaflet Components (in-repo demo)</h1>
          <Navbar fluid>
            <Nav>
              {
                navSpec.map(({label, path}) => (
                  <LinkContainer key={path} to={`/${path}`}>
                    <NavItem eventKey={path}>
                      {label}
                    </NavItem>
                  </LinkContainer>
                ))
              }
            </Nav>
          </Navbar>

          <Switch>
            {
              navSpec.map(({path, component}) => (
                <Route key={path} path={`/${path}`} component={component}/>
              ))
            }
            <Redirect to={defaultPath}/>
          </Switch>
        </div>
      </Router>
    );
  }
}
