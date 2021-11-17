// Overlays a spinner on the map. Super simple. Spinner proper is one of the
// https://www.npmjs.com/package/svg-loaders-react spinners, selected by
// name from the package by `spinner` prop, e.g.,
// <MapSpinner spinner="Oval" ... />. Remaining props are passed into the

import React from 'react';
import PropTypes from 'prop-types';
import { SVGOverlay, useMap } from 'react-leaflet';
import * as SVGLoaders from 'svg-loaders-react';
import keys from 'lodash/fp/keys';


function MapSpinner({
  spinner = "Bars",
  x="40%",
  y="40%",
  stroke="#98ff98",
  ...rest
}) {
  const Spinner = SVGLoaders[spinner];
  const map = useMap();
  return (
    <SVGOverlay bounds={map.getBounds()}>
      <Spinner x={x} y={y} stroke={stroke} {...rest}/>
    </SVGOverlay>
  );
}


MapSpinner.propTypes = {
  spinner: PropTypes.oneOf(keys(SVGLoaders)).isRequired,
  x: PropTypes.string,
  y: PropTypes.string,
  stroke: PropTypes.string,
}


export default MapSpinner;