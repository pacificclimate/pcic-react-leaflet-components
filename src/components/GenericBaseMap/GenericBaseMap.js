// GenericBaseMap: Creates and renders a basemap, which is a MapContainer
// containing a tile layer defined by the `tileset` prop. Children of this
// component are rendered inside the MapContainer.

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { MapContainer, TileLayer } from 'react-leaflet';
import L from 'leaflet';

import 'proj4';
import 'proj4leaflet';
import 'leaflet/dist/leaflet.css';

import { projCRSOptions } from '../../utils/crs';


export default class GenericBaseMap extends PureComponent {
  static propTypes = {
    // Only props added by this component are defined here.
    // All other valid props for MapContainer are passed through to it.

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
  };

  render() {
    const {
      tileset: { url, projection, tileMatrix, attribution },
      mapRef,
      children,
      ...rest
    } = this.props;

    // Create Leaflet CRS object. This is where the magic of this component
    // lies ... converting the tileMatrix specification to a correct CRS.
    const crs = new L.Proj.CRS(
      projection.code,
      projection.proj4def,
      { ...projCRSOptions(tileMatrix), ...projection.options },
    );

    return (
      <MapContainer
        crs={crs}
        minZoom={0}
        maxZoom={tileMatrix.numResolutions}
        {...rest}
      >
        <TileLayer
          attribution={attribution}
          url={url}
          noWrap={true}
          maxZoom={tileMatrix.numResolutions}
        />
        {children}
      </MapContainer>
    );
  }
}
