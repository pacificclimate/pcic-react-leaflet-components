import PropTypes from 'prop-types';
import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { LayerGroup, CircleMarker, Popup } from 'react-leaflet';
import { range, map } from 'lodash/fp';

import { YNWTBaseMap } from '../../lib/index';
import { positions } from '../markers';
import './DemoYNWTBaseMap.css'


export default class DemoYNWTBaseMap extends React.Component {
  static propTypes = {
    numMaps: PropTypes.number,
  };

  static defaultProps = {
    numMaps: 1,
  };

  state = {
    viewport: YNWTBaseMap.initialViewport,
  };

  handleViewportChange = viewport => this.setState({ viewport });

  render() {
    console.log("DemoYNWTBaseMap")
    const colWidth = Math.floor(12 / this.props.numMaps);
    return (
      <Grid fluid>
        <Row>
          <Col lg={12}>
            <h2>{this.props.numMaps} synchronized basemaps</h2>
          </Col>
        </Row>
        <Row>
          {
            map(i => (
              <Col key={i} lg={colWidth}>
                <YNWTBaseMap
                  viewport={this.state.viewport}
                  onViewportChange={this.handleViewportChange}
                >
                  <LayerGroup>
                    {
                      positions.map(
                        ({ lng, lat, comment }, i) => (
                          <CircleMarker
                            key={i}
                            center={{ lng, lat }}
                            radius={5}
                            color={'#0000FF'}
                          >
                            <Popup>
                              Lng: {lng}, Lat: {lat} <br/> {comment}
                            </Popup>
                          </CircleMarker>
                        )
                      )
                    }
                  </LayerGroup>
                </YNWTBaseMap>
              </Col>
            ))(range(0,this.props.numMaps))
          }
        </Row>
      </Grid>
    );
  }
}
