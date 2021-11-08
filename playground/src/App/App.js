import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Redirect, Switch } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { MapContainer } from 'react-leaflet';

import DemoBaseMap from '../DemoBaseMap';
import { BCBaseMap, YNWTBaseMap, StaticControl } from 'pcic-react-leaflet-components';
import { positions as markers } from '../markers';

import 'pcic-react-leaflet-components/src/leaflet-extensions/control-static.css';

const navSpec = [
  {
    label: 'BCBaseMap',
    path: 'BCBaseMap',
    component: () => (
      <DemoBaseMap
        BaseMap={BCBaseMap}
        initialViewport={BCBaseMap.initialViewport}
        numMaps={2}
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
        numMaps={2}
        markers={markers}
      />
    ),
  },
  {
    label: 'StaticControl',
    path: 'StaticControl',
    component: () => (
      <MapContainer>
        <StaticControl position={"topright"}>topright</StaticControl>
        <StaticControl position={"bottomleft"}>bottomleft</StaticControl>
      </MapContainer>
    ),
  }
];
const defaultPath = 'BCBaseMap';


export default class App extends React.Component {
  render() {
    return (
      <Router basename={'/#'}>
        <div>
          <Navbar bg="info" variant="light">
            <Navbar.Brand>
              PCIC React Leaflet Components
            </Navbar.Brand>
            <Nav>
              {
                navSpec.map(({label, path}) => (
                  <Nav.Link eventKey={path} href={path}>
                    {label}
                  </Nav.Link>
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
