import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Route, Redirect, Switch } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

import DemoBaseMap from '../DemoBaseMap';
import { BCBaseMap, BCBaseMapDeprecated, YNWTBaseMap } from '../../lib/index';
import { positions as markers } from '../markers';

const navSpec = [
  {
    label: 'BCBaseMap',
    path: 'BCBaseMap',
    component: () => (
      <DemoBaseMap
        BaseMap={BCBaseMap}
        initialViewport={BCBaseMap.initialViewport}
        markers={markers}
      />
    ),
  },
  {
    label: 'BCBaseMap - deprecated',
    path: 'BCBaseMapDeprecated',
    component: () => (
      <DemoBaseMap
        BaseMap={BCBaseMapDeprecated}
        initialViewport={BCBaseMapDeprecated.initialViewport}
        markers={markers}
      />
    ),
  },
  {
    label: 'YNWTBaseMap',
    path: 'YNWTBaseMap',
    component: () => (
      <DemoBaseMap
        BaseMap={YNWTBaseMap}
        initialViewport={YNWTBaseMap.initialViewport}
        markers={markers}
      />
    ),
  },
];
const defaultPath = 'BCBaseMap';


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
