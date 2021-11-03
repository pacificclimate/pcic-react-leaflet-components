import PropTypes from 'prop-types';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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

  // handleEvent = name =>

  render() {
    const { BaseMap, markers, numMaps } = this.props;
    const colWidth = Math.floor(12 / numMaps);
    return (
      <Container fluid>
        <Row>
          <Col xs={12}>
            <h2>{this.props.numMaps} synchronized basemaps</h2>
            <p>viewport: {JSON.stringify(this.state.viewport)}</p>
          </Col>
        </Row>
        <Row>
          {
            map(i => (
              <Col key={i} xs={colWidth}>
                <BaseMap
                  viewport={this.state.viewport}
                  onViewportChange={this.handleViewportChange}
                >
                  {/*<LayerGroup>*/}
                  {/*  {*/}
                  {/*    markers.map(*/}
                  {/*      ({ lng, lat, comment }, i) => (*/}
                  {/*        <CircleMarker*/}
                  {/*          key={i}*/}
                  {/*          center={{ lng, lat }}*/}
                  {/*          radius={5}*/}
                  {/*          color={'#0000FF'}*/}
                  {/*        >*/}
                  {/*          <Popup>*/}
                  {/*            Lng: {lng}, Lat: {lat} <br/> {comment}*/}
                  {/*          </Popup>*/}
                  {/*        </CircleMarker>*/}
                  {/*      )*/}
                  {/*    )*/}
                  {/*  }*/}
                  {/*</LayerGroup>*/}
                </BaseMap>
              </Col>
            ))(range(0,this.props.numMaps))
          }
        </Row>
      </Container>
    );
  }
}
