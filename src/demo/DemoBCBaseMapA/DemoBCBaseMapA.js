import PropTypes from 'prop-types';
import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { CircleMarker, LayerGroup, Popup } from 'react-leaflet';
import { range, map } from 'lodash/fp';

import { positions } from '../markers';
import BaseMap from '../../lib/components/BaseMap';


export default class DemoBCBaseMapA extends React.Component {
  static propTypes = {
    numMaps: PropTypes.number,
  };

  static defaultProps = {
    numMaps: 1,
  };

  static tileset = {
    url: process.env.REACT_APP_BC_BASEMAP_A_URL,
    projection: {
      code: 'EPSG:3005',
      proj4def: '+proj=aea +lat_1=50 +lat_2=58.5 +lat_0=45 +lon_0=-126 +x_0=1000000 +y_0=0 +ellps=GRS80 +datum=NAD83 +units=m +no_defs',
    },
    tileMatrix: {
      // From the definition of the projection (SRS)
      metersPerUnit: 1,  // Proj.4: +units=m

      // From tile generation
      tileMatrixMinX: -20037508,
      tileMatrixMaxX: 20037508,
      tileWidth: 256,
      tileMatrixMinY: -20037508,
      tileMatrixMaxY: 20037508,
      numResolutions: 12,
    },
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
  };

  static initialViewport = {
    center: {
      lat: 55.0,
      lng: -125,
    },
    zoom: 5,
  };

  state = {
    viewport: DemoBCBaseMapA.initialViewport,
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
                <BaseMap
                  tileset={DemoBCBaseMapA.tileset}
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
                </BaseMap>
              </Col>
            ))(range(0,this.props.numMaps))
          }
        </Row>
      </Grid>
    );
  }
}
