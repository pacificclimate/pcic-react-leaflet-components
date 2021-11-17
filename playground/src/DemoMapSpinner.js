import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import * as SVGLoaders from 'svg-loaders-react';
import keys from 'lodash/fp/keys';

import { MapSpinner, BCBaseMap } from 'pcic-react-leaflet-components';


function DemoMapSpinner() {
  const [spinner, setSpinner] = useState("Bars");
  const [x, setX] = useState("40%");
  const [y, setY] = useState("40%");
  const [stroke, setStroke] = useState("#98ff98");

  const handleChange = set => e => set(e.target.value);

  return (
    <React.Fragment>
      <Row>
        <Col xs={2}>
          <Form>
            <Form.Group>
              <Form.Label>spinner</Form.Label>
              <Form.Select value={spinner} onChange={handleChange(setSpinner)}>
                {
                  keys(SVGLoaders).map(
                    name => (<option value={name}>{name}</option>)
                  )
                }
              </Form.Select>
            </Form.Group>
          </Form>
        </Col>
        <Col xs={2}>
          <Form>
            <Form.Group>
              <Form.Label>x</Form.Label>
              <Form.Control value={x} onChange={handleChange(setX)}/>
            </Form.Group>
          </Form>
        </Col>
        <Col xs={2}>
          <Form>
            <Form.Group>
              <Form.Label>y</Form.Label>
              <Form.Control value={y} onChange={handleChange(setY)}/>
            </Form.Group>
          </Form>
        </Col>
        <Col xs={2}>
          <Form>
            <Form.Group>
              <Form.Label>stroke</Form.Label>
              <Form.Control value={stroke} onChange={handleChange(setStroke)}/>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row className={"mt-3"}>
        <Col>
          <BCBaseMap
            center={BCBaseMap.initialViewport.center}
            zoom={BCBaseMap.initialViewport.zoom}
          >
            <MapSpinner spinner={spinner} x={x} y={y} stroke={stroke}/>
          </BCBaseMap>
        </Col>
      </Row>
    </React.Fragment>
  )
}


export default DemoMapSpinner;
