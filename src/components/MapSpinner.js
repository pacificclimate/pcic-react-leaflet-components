// Overlays a spinner on the map. Super simple. Spinner proper is one of the
// https://www.npmjs.com/package/svg-loaders-react spinners, selected by
// name from the package by `spinner` prop, e.g.,
// <MapSpinner spinner="Oval" ... />. Remaining props are passed into the
// SVGLoaders element.
// The spinner stays centered in the map viewport as defined by
// `map.getBounds()`. It tracks zoom and pan events; but see note below.
// Note: Even with zoom/pan tracking, the spinner doesn't always render as
// expected; specifically its "window" seems to become significantly smaller
// than the actual visible bounds of the map and the spinner is partly clipped.
// How to fix this is not known at the moment, and this functions well enough
// for most purposes to make it not worth the time to find out.

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SVGOverlay, useMap, useMapEvents } from 'react-leaflet';
import * as SVGLoaders from 'svg-loaders-react';
import keys from 'lodash/fp/keys';


function MapSpinner({
  spinner = "Bars",
  x="40%",
  y="40%",
  stroke="#98ff98",
  ...rest
}) {
  const [bounds, setBounds] = useState(useMap().getBounds());
  // This could be replaced by a call to callbackOnMapEvents, but it's a bit
  // less clear and not much shorter.
  const onEvent = map => setBounds(map.getBounds());
  const map = useMapEvents({
    zoomend: () => onEvent(map),
    moveend: () => onEvent(map),
  });
  const Spinner = SVGLoaders[spinner];
  return (
    <SVGOverlay bounds={bounds}>
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
