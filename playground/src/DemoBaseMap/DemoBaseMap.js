import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { CircleMarker, LayerGroup, Popup, useMapEvents } from 'react-leaflet';
import { range, map } from 'lodash/fp';

import './DemoBaseMap.css'


function DemoBaseMap({ BaseMap, initialViewport, markers, numMaps}) {
  const [zoom, setZoom] = useState(initialViewport.zoom);
  const [center, setCenter] = useState(initialViewport.center);
  const [mapId, setMapId] = useState(null);

  const UpdateZoom = () => {
    const map = useMapEvents({
      zoomend: (a) => {
        console.log("zoomend", map.getZoom())
        setZoom(map.getZoom());
      }
    });
    return null;
  };

  const colWidth = Math.floor(12 / numMaps);
  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <h2>{numMaps} synchronized basemaps</h2>
          <p>zoom: {JSON.stringify(zoom)}</p>
          <p>center: {JSON.stringify(center)}</p>
        </Col>
      </Row>
      <Row>
        {
          map(i => (
            <Col key={i} xs={colWidth}>
              <BaseMap
                zoom={zoom}
                center={center}
              >
                <UpdateZoom/>
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

