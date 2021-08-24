// BCBaseMap: Component that establishes a map of B.C.,
// in BC Albers projection, and nothing more.

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import 'proj4';
import 'proj4leaflet';
import 'leaflet/dist/leaflet.css';

import BaseMap from '../BaseMap';


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

  static tileset = {
    url: process.env.REACT_APP_BC_ALBERS_URL + '/1.0.0/bc_osm/{z}/{x}/{y}.png',
    projection: {
      code: 'EPSG:3005',
      proj4def: '+proj=aea +lat_1=50 +lat_2=58.5 +lat_0=45 +lon_0=-126 +x_0=1000000 +y_0=0 +ellps=GRS80 +datum=NAD83 +units=m +no_defs',
    },
    tileMatrix: {
      // From the definition of the projection (SRS)
      metersPerUnit: 1,  // Proj.4: +units=m

      // From tile generation
      // For some reason, `scaleDenominator` is only half what we would expect it to
      // be. We specify it here to override the extents-based resolution
      // computations.
      scaleDenominator: 27901785.714285714,
      tileMatrixMinX: -1000000,
      tileMatrixMaxX: 3000000,
      tileWidth: 256,
      tileMatrixMinY: -1000000,
      tileMatrixMaxY: 3000000,
      numResolutions: 12,
    },
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
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
      <BaseMap
        tileset={BCBaseMap.tileset}
        ref={mapRef}
        {...rest}
      >
        {children}
      </BaseMap>
    );
  }
}
