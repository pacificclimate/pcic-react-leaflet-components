// BaseMap: Component that establishes a base map and nothing more.
// Children of this component are rendered inside the Map component.

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Map, TileLayer } from 'react-leaflet';
import L from 'leaflet';

import 'proj4';
import 'proj4leaflet';
import 'leaflet/dist/leaflet.css';

import { projCRSOptions } from '../../utils/crs';


export default class BaseMap extends PureComponent {
  static propTypes = {
    // Only props added by this component are defined here.
    // All other valid props for Map component are passed through to it.

    // Describes the tileset.
    tileset: PropTypes.shape({
      // Full URL of tileset, including `x`, `y`, `z` params.
      url: PropTypes.string.isRequired,

      // Describes the projection of the tileset in terms of Proj4Leaflet
      // arguments. `options` is optional; if specified, it is appended
      // to the options generated from `tileMatrix`.
      projection: PropTypes.shape({
        code: PropTypes.string.isRequired,
        proj4def: PropTypes.string.isRequired,
        options: PropTypes.object,
      }).isRequired,

      // Describes the tile matrix. Options for Proj4Leaflet are generated
      // automatically from this object. See 
      tileMatrix: PropTypes.object.isRequired,
      
      // Attribution for tileset
      attribution: PropTypes.string,
    }).isRequired,

    mapRef: PropTypes.func,
    // Callback to which a ref to the Map component is passed.
    // Allows parent components to diddle with the map established here.
  };

  static defaultProps = {
    mapRef: (() => null),
  };

  render() {
    const {
      tileset: { url, projection, tileMatrix, attribution },
      mapRef,
      children,
      ...rest
    } = this.props;

    // Create Leaflet CRS object
    const crs = new L.Proj.CRS(
      projection.code,
      projection.proj4def,
      { ...projCRSOptions(tileMatrix), ...projection.options },
    );

    return (
      <Map
        crs={crs}
        minZoom={0}
        maxZoom={tileMatrix.numResolutions}
        ref={mapRef}
        {...rest}
      >
        <TileLayer
          attribution={attribution}
          url={url}
          // TODO: Should subdomains be a prop?
          subdomains={'abc'}
          noWrap={true}
          maxZoom={tileMatrix.numResolutions}
        />
        {children}
      </Map>
    );
  }
}
