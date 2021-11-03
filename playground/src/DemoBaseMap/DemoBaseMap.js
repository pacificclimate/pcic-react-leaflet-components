import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { CircleMarker, LayerGroup, Popup } from 'react-leaflet';
import { range, map } from 'lodash/fp';

import './DemoBaseMap.css'


function DemoBaseMap({ BaseMap, initialViewport, markers, numMaps}) {
  const [viewport, setViewport] = useState(initialViewport);

  const colWidth = Math.floor(12 / numMaps);
  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <h2>{numMaps} synchronized basemaps</h2>
          <p>viewport: {JSON.stringify(viewport)}</p>
        </Col>
      </Row>
      <Row>
        {
          map(i => (
            <Col key={i} xs={colWidth}>
              <BaseMap
                viewport={viewport}
                onViewportChange={setViewport}
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
          ))(range(0, numMaps))
        }
      </Row>
    </Container>
  );
}

DemoBaseMap.propTypes = {
  BaseMap: PropTypes.element.isRequired,
  initialViewport: PropTypes.object.isRequired,
  markers: PropTypes.array,
  numMaps: PropTypes.number,
};

DemoBaseMap.defaultProps = {
  numMaps: 1,
  markers: [],
};

export default DemoBaseMap;

