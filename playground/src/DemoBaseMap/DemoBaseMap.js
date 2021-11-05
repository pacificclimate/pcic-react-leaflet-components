import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useImmer } from 'use-immer';
import { Container, Row, Col } from 'react-bootstrap';
import { CircleMarker, LayerGroup, Popup, useMapEvents } from 'react-leaflet';
import { range, map } from 'lodash/fp';

import { SetCenterLatLng, SetZoom, SetView } from 'pcic-react-leaflet-components';

import './DemoBaseMap.css'


function DemoBaseMap({ BaseMap, initialViewport, markers, numMaps}) {
  // useState setters cause a re-render when the new value shallowly differs
  // from the previous value. A view(port) is a combination of zoom and center
  // lat and lng. If we bundle these up as an object, we have to do some
  // careful coding to create a different object when and only when the update
  // differs on at least one value. We could (possibly) use immer.js (preferred)
  // or immutable.js (not preferred) as a relatively low-effort solution.
  // However we have an even simpler solution here, which is to manage the 3
  // values as separate states.
  // TODO: Wrap these 3 up in a custom hook or use immutable composite value.
  const [zoom, setZoom] = useState(initialViewport.zoom);
  const [ctrLat, setCtrLat] = useState(initialViewport.center.lat);
  const [ctrLng, setCtrLng] = useState(initialViewport.center.lng);
  const [view, setView] = useImmer(initialViewport);

  // TODO: UpdateView / updateView could be reformulated in a callback style.
  //  Worth it?
  const updateView = (id, map) => {
    // Holy cow, this is easy with immer. Immutable values FTW.
    const center = map.getCenter();
    setView(draft => {
      draft.zoom = map.getZoom();
      draft.center.lat = center.lat;
      draft.center.lng = center.lng;
    });
  };

  const UpdateView = ({id}) => {
    const map = useMapEvents({
      zoomend: () => {
        updateView(id, map);
      },
      moveend: () => {
        updateView(id, map);
      },
    });
    return null;
  };

  const colWidth = Math.floor(12 / numMaps);
  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <h2>{numMaps} synchronized basemaps</h2>
          <p>{JSON.stringify(view)}</p>
          {/*<ol>*/}
          {/*  {views.map(view => (*/}
          {/*    <li>lat: {view.center.lat}, lng: {view.center.lng}, zoom: {view.zoom}</li>*/}
          {/*  ))}*/}
          {/*</ol>*/}
        </Col>
      </Row>
      <Row>
        {
          map(i => (
            <Col key={i} xs={colWidth}>
              <BaseMap
                id={`map-${i}`}
                zoom={initialViewport.zoom}
                center={initialViewport.center}
              >
                <SetView view={view} debug={true}/>
                {/*<SetCenterLatLng lat={ctrLat} lng={ctrLng} debug={true}/>*/}
                {/*<SetZoom zoom={zoom} debug={true}/>*/}
                <UpdateView id={i}/>
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

