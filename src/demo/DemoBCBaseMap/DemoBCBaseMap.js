import PropTypes from 'prop-types';
import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { CircleMarker, LayerGroup, Popup } from 'react-leaflet';
import { range, map } from 'lodash/fp';

import { BCBaseMap } from '../../lib/index';
import { positions } from '../markers';
import './DemoBCBaseMap.css'


export default class DemoBCBaseMap extends React.Component {
  static propTypes = {
    numMaps: PropTypes.number,
  };

  static defaultProps = {
    numMaps: 1,
  };

  state = {
    viewport: BCBaseMap.initialViewport,
  };

  handleViewportChange = viewport => this.setState({ viewport });

  render() {
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
                <BCBaseMap
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
                </BCBaseMap>
              </Col>
            ))(range(0,this.props.numMaps))
          }
        </Row>
      </Grid>
    );
  }
}
