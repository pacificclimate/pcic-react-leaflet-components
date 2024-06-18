import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';

import { StaticControl } from 'pcic-react-leaflet-components';


function DemoStaticControl() {
  const [position, setPosition] = useState("topright");
  const handleChangePosition = e=> {
    setPosition(e.target.value)
  }
  const [content, setContent] = useState("content");
  const handleChangeContent = e => {
    setContent(e.target.value)
  };

  return (
      <React.Fragment>
        <Row>
          <Col xs={6}>
            <Form>
              <Form.Group>
                <Form.Label>Position</Form.Label>
                <Form.Select value={position} onChange={handleChangePosition}>
                  {
                    "topleft topright bottomleft bottomright".split(" ").map(
                        pos => (<option value={pos}>{pos}</option>)
                    )
                  }
                </Form.Select>
              </Form.Group>
            </Form>
          </Col>
          <Col xs={6}>
            <Form>
              <Form.Group>
                <Form.Label>Content</Form.Label>
                <Form.Control value={content} onChange={handleChangeContent}/>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row className={"mt-3"}>
          <Col>
            Map goes here
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
              <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[51.505, -0.09]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
              <StaticControl position={position}>{content}</StaticControl>
            </MapContainer>
          </Col>
        </Row>
      </React.Fragment>
  )


  return (
      <>
          <div style={{ height: 80, border: "1px solid red" }}>
            DemoStaticControl
          </div>
      </>
  )

  return "DemoStaticControl"

  return (
    <React.Fragment>
      <Row>
        <Col xs={6}>
          <Form>
            <Form.Group>
              <Form.Label>Position</Form.Label>
              <Form.Select value={position} onChange={handleChangePosition}>
                {
                  "topleft topright bottomleft bottomright".split(" ").map(
                    pos => (<option value={pos}>{pos}</option>)
                  )
                }
              </Form.Select>
            </Form.Group>
          </Form>
        </Col>
        <Col xs={6}>
          <Form>
            <Form.Group>
              <Form.Label>Content</Form.Label>
              <Form.Control value={content} onChange={handleChangeContent}/>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row className={"mt-3"}>
        <Col>
          <MapContainer>
            <StaticControl position={position}>{content}</StaticControl>
          </MapContainer>
        </Col>
      </Row>
    </React.Fragment>
  )
}


export default DemoStaticControl;
