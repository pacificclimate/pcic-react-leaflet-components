// BCBaseMap: Component that establishes a map of B.C., and nothing more.

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { pick, range, map } from 'lodash/fp';

import { Map, TileLayer } from 'react-leaflet';
import L from 'leaflet';

import 'proj4';
import 'proj4leaflet';
import 'leaflet/dist/leaflet.css';

import './BCBaseMap.css';
import { projCRSOptions } from '../../utils/crs';

// Set up BC Albers projection

const numResolutions = 12;

// Create Leaflet CRS object
let options = projCRSOptions({
  // From the definition of the projection (SRS)
  metersPerUnit: 1,  // Proj.4: +units=m

  // From tile mill
  // For some reason, the scaleDenominator is only half what we would expect
  // it to be. We use it here to override the default resolution computations.
  scaleDenominator: 27901785.714285714,
  tileMatrixMinX: -1000000,
  tileMatrixMaxX: 3000000,
  tileWidth: 256,
  tileMatrixMinY: -1000000,
  tileMatrixMaxY: 3000000,
  numResolutions,
});
const crs = new L.Proj.CRS(
  'EPSG:3005',
  '+proj=aea +lat_1=50 +lat_2=58.5 +lat_0=45 +lon_0=-126 +x_0=1000000 +y_0=0 +ellps=GRS80 +datum=NAD83 +units=m +no_defs',
  options
);

export default class BCBaseMap extends PureComponent {
  static propTypes = {
    // Only props added by this component are defined here.
    // All other valid props for Map component are passed through to it.

    mapRef: PropTypes.func,
    // Callback to which a ref to the Map component is passed.
    // Allows parent components to diddle with the map established here.
  };

  static defaultProps = {
    mapRef: (() => null),
  };

  static initialViewport = {
    center: {
      lat: 55.0,
      lng: -125,
    },
    zoom: 2,
  };

  render() {
    const { mapRef, children, ...rest } = this.props;
    return (
      <Map
        crs={crs}
        minZoom={0}
        maxZoom={numResolutions}
        ref={mapRef}
        {...rest}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url={process.env.REACT_APP_BC_ALBERS_URL + '/1.0.0/bc_osm/{z}/{x}/{y}.png'}
          subdomains={'abc'}
          noWrap={true}
          maxZoom={numResolutions}
        />
        {children}
      </Map>
    );
  }
}
