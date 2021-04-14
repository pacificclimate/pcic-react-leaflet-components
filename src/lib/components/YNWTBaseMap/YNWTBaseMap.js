// BCBaseMap: Component that establishes a map of B.C., and nothing more.

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Map, TileLayer } from 'react-leaflet';
import L from 'leaflet';

import 'proj4';
import 'proj4leaflet';
import 'leaflet/dist/leaflet.css';

import { projCRSOptions } from '../../utils/crs';
import './YNWTBaseMap.css';

// Set up Yukon Albers projection

const numResolutions = 14;

// Create Leaflet CRS object
const crs = new L.Proj.CRS(
  'EPSG:3578',
  '+proj=aea +lat_1=61.66666666666666 +lat_2=68 +lat_0=59 +lon_0=-132.5 +x_0=500000 +y_0=500000 +ellps=GRS80 +datum=NAD83 +units=m +no_defs',
  projCRSOptions({
    // From the definition of the projection (SRS)
    metersPerUnit: 1,  // Proj.4: +units=m

    // From tile mill
    tileMatrixMinX: -20037508,
    tileMatrixMaxX: 20037508,
    tileWidth: 256,
    tileMatrixMinY: -20037508,
    tileMatrixMaxY: 20037508,
    numResolutions,
  })
);

export default class YNWTBaseMap extends PureComponent {
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
      lat: 65.0,
      lng: -121,
    },
    zoom: 6,
  };

  render() {
    const { mapRef, children, ...rest } = this.props;
    return (
      <Map
        crs={crs}
        minZoom={0}
        maxZoom={numResolutions}
        cursor={true}
        ref={mapRef}
        {...rest}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url={process.env.REACT_APP_YUKON_ALBERS_URL + '/{z}/{x}/{y}.png'}
          subdomains={'abc'}
          noWrap={true}
          maxZoom={numResolutions}
        />
        {children}
      </Map>
    );
  }
}
