import PropTypes from 'prop-types';
import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { CircleMarker, LayerGroup, Popup } from 'react-leaflet';
import { range, map } from 'lodash/fp';

import './DemoBaseMap.css'


export default class DemoBaseMap extends React.Component {
  static propTypes = {
    BaseMap: PropTypes.object.isRequired,
    initialViewport: PropTypes.object.isRequired,
    markers: PropTypes.array,
    numMaps: PropTypes.number,
  };

  static defaultProps = {
    numMaps: 1,
    markers: [],
  };

  state = {
    viewport: this.props.initialViewport,
  };

  handleViewportChange = viewport => this.setState({ viewport });

  render() {
    const { BaseMap, markers, numMaps } = this.props;
    const colWidth = Math.floor(12 / numMaps);
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
                  viewport={this.state.viewport}
                  onViewportChange={this.handleViewportChange}
                >
                  <LayerGroup>
                    {
                      markers.map(
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
