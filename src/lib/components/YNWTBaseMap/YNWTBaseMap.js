// YNWTBaseMap: Component that establishes a base map of the Yukon and NWT,
// in Yukon Albers projection, and nothing more.
//
// The tile server URL is specified by the environment variable
// REACT_APP_YNWT_BASE_MAP_TILES_URL. The tiles must be in Yukon Albers
// projection and must have been generated in a way consistent with the
// `tileset.tileMatrix` parameters below.
//
// Children of this component are rendered inside its <Map> component.

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import 'proj4';
import 'proj4leaflet';
import 'leaflet/dist/leaflet.css';
import BaseMap from '../BaseMap';


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

  static tileset = {
    url: process.env.REACT_APP_YNWT_BASE_MAP_TILES_URL,
    projection: {
      code: 'EPSG:3578',
      proj4def: '+proj=aea +lat_1=61.66666666666666 +lat_2=68 +lat_0=59 +lon_0=-132.5 +x_0=500000 +y_0=500000 +ellps=GRS80 +datum=NAD83 +units=m +no_defs',
    },
    tileMatrix: {
      // From the definition of the projection (SRS)
      metersPerUnit: 1,  // Proj.4: +units=m

      // From tile generation
      tileMatrixMinX: -20037508,
      tileMatrixMaxX: 20037508,
      tileWidth: 256,
      tileMatrixMinY: -20037508,
      tileMatrixMaxY: 20037508,
      numResolutions: 14,
    },
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
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
      <BaseMap
        tileset={YNWTBaseMap.tileset}
        ref={mapRef}
        {...rest}
      >
        {children}
      </BaseMap>
    );
  }
}
