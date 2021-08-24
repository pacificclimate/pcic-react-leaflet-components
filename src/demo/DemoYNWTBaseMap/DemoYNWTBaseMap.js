import PropTypes from 'prop-types';
import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { range, map } from 'lodash/fp';

import { YNWTBaseMap } from '../../lib/index';
import { LayerGroup, CircleMarker, Popup } from 'react-leaflet';
import './DemoYNWTBaseMap.css'


const markerPositions = map(
  ([lng, lat, comment]) => ({lng, lat, comment})
)([
  // These coordinates verify between QGIS display of map tiles and this one
  [-140.9970,69.6443, 'Alaska-Yukon border at Beaufort Sea (QGIS)'],
  [-140.99697,69.88835, 'Alaska-Yukon border N point (QGIS)'],
  [-141.00172,60.30576, 'South corner of NS line of Alaska-Yukon border (QGIS)'],
  [-123.81132,60.00103, 'Intersection of BC, Yukon, NWT borders (QGIS)'],
  [-139.05360,59.99430, 'Intersection of BC, Yukon, Alaska borders (QGIS)'],
  [-120.00068,60.00004, 'Intersection of BC, NWT, Alberta borders (QGIS)'],
  [-110.00546, 59.99900, 'Intersection of Alberta, NWT, Sask borders (QGIS)'],
  [-136.58799,69.40292, 'Yukon-NWT border at Beaufort (QGIS)'],
  [-102.00919,59.99888, 'Sask, Manitoba, NWT (QGIS)'],
  [-94.82658,59.99878, 'Man-Nunavut border at Hudson Bay (QGIS)'],
  [-102.0001,64.2327, 'Corner of Nunavut-NWT border (QGIS)'],

]);

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
                      markerPositions.map(
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
