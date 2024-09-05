import React from 'react';
import PropTypes from 'prop-types';
import L from 'leaflet';
import GenericVectorBaseMap from '../GenericVectorBaseMap';
import vectorTileStyling from '../../styles/vectorTileStyling.js';

const { REACT_APP_LABELS_WMS_URL, REACT_APP_BC_VECTOR_BASE_MAP_TILES_URL, REACT_APP_LEGEND_TYPE } = process.env;

const wmsLayerOptions = {
    service: "WMS",
    layers: 'OMT-NA-TEXT-ZF-LG', //OpenMapTiles, North America, Text only, Zoom filtered, Layer group
    format: 'image/png8',
    transparent: true,
    version: '1.1.0',
    crs: L.CRS.EPSG3005,
    tiled: true,
    buffer: 2,
    formatOptions: 'dpi:300;antialiasing:off',
};

if (REACT_APP_LEGEND_TYPE === "achromatic") {
    wmsLayerOptions.zIndex = 100; // Display labels above all other layers.
}

const tileset = {
    url: REACT_APP_BC_VECTOR_BASE_MAP_TILES_URL,
    projection: {
        code: 'EPSG:3005',
        proj4def: '+proj=aea +lat_1=50 +lat_2=58.5 +lat_0=45 +lon_0=-126 +x_0=1000000 +y_0=0 +ellps=GRS80 +datum=NAD83 +units=m +no_defs',
    },
    tileMatrix: {
        metersPerUnit: 1,
        tileMatrixMinX: -20037508,
        tileMatrixMaxX: 20037508,
        tileWidth: 256,
        tileMatrixMinY: -20037508,
        tileMatrixMaxY: 20037508,
        numResolutions: 14,
    },
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
};

const BCVectorBaseMap = React.memo(({ mapRef = () => null, children, ...rest }) => {
    return (
        <GenericVectorBaseMap
            tileset={tileset}
            vectorTileStyling={vectorTileStyling}
            wmsUrl={REACT_APP_LABELS_WMS_URL}
            wmsLayerOptions={wmsLayerOptions}
            mapRef={mapRef}
            {...rest}
        >
            {children}
        </GenericVectorBaseMap>
    );
});
BCVectorBaseMap.displayName = 'BCVectorBaseMap';

BCVectorBaseMap.propTypes = {
    center: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired,
    }).isRequired,
    zoom: PropTypes.number.isRequired,
    minZoom: PropTypes.number,
    maxZoom: PropTypes.number,
    mapRef: PropTypes.func,
};

BCVectorBaseMap.initialViewport = {
    center: { lat: 55.0, lng: -125 },
    zoom: 6,
};

export default BCVectorBaseMap;
