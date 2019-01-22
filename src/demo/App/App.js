import PropTypes from 'prop-types';
import React from 'react';
import { TextInput } from "../../lib/index";


export default function App() {
  return (
    <div style={{ width: 640, margin: "15px auto" }}>
      <h1>Hello React</h1>
      <TextInput label="Email Address" placeholder="name@example.com" />
    </div>
  );
};
