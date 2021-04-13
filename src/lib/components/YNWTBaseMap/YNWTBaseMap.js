// BCBaseMap: Component that establishes a map of B.C., and nothing more.

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { pick, range, map } from 'lodash/fp';

import { Map, TileLayer } from 'react-leaflet';
import L from 'leaflet';

import 'proj4';
import 'proj4leaflet';
import 'leaflet/dist/leaflet.css';

import './YNWTBaseMap.css';

// Set up Yukon Albers projection

// The required options for this are `resolutions` and `origin`.
//
// In brief, once we have the value for the zoom-0 `scaleDenominator`, it is
// straightforward to compute `resolutions`. That value can be derived, in our
// particular case from fundamental information about the tileset, namely
// its extents or bounds. (For details, see
// https://github.com/pacificclimate/pcic-react-leaflet-components/issues/1#issuecomment-818194664)
//
// The values for `origin` and `bounds` are also derived from the extents.
// (See https://github.com/pacificclimate/pcic-react-leaflet-components/issues/1#issuecomment-818231259)

// From OGC Standard
const pixelWidth = 0.00028;

// From the definition of the projection (SRS)
const metersPerUnit = 1;  // Proj.4: +units=m

// From tile mill
const [tileMatrixMinX, tileMatrixMinY, tileMatrixMaxX, tileMatrixMaxY] =
 [-20037508, -20037508, 20037508, 20037508];
const tileWidth = 256;

const pixelSpan = (tileMatrixMaxX - tileMatrixMinX) / tileWidth;

// We don't need `scaleDenominator` in our computations, but here is how to
// compute it from the information we have.
// const scaleDenominator0 = pixelSpan * metersPerUnit / pixelWidth;

// If we had `scaleDenominator` directly, this is what we'd do.
// const maxResolution = scaleDenominator0 * pixelWidth;

// But we don't, and we compute maxResolution from the information we do have.
const maxResolution = pixelSpan * metersPerUnit;

// Compute resolutions
let numResolutions = 14;
const resolutions = map(
  i => maxResolution / Math.pow(2, i)
)(range(0, numResolutions));

// Create Leaflet CRS object
const crs = new L.Proj.CRS(
  'EPSG:3578',
  '+proj=aea +lat_1=61.66666666666666 +lat_2=68 +lat_0=59 +lon_0=-132.5 +x_0=500000 +y_0=500000 +ellps=GRS80 +datum=NAD83 +units=m +no_defs',
  {
    bounds: L.Bounds(
      L.Point(tileMatrixMinX, tileMatrixMinY),
      L.Point(tileMatrixMaxX, tileMatrixMaxY),
    ),
    origin: [tileMatrixMinX, tileMatrixMaxY],
    resolutions,
  }
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
    const { mapRef, ...rest } = this.props;
    return (
      <Map
        crs={crs}
        minZoom={0}   // ?
        maxZoom={numResolutions}  // ? There are only 12 zoom levels defined
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
        {this.props.children}
      </Map>
    );
  }
}
