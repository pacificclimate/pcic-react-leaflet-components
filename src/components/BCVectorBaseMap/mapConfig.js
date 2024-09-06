
import L from 'leaflet';
import vectorTileStyling from '../../styles/vectorTileStyling.js';

const { REACT_APP_BC_VECTOR_BASE_MAP_TILES_URL, REACT_APP_LEGEND_TYPE } = process.env;

export const wmsLayerOptions = {
    service: "WMS",
    layers: 'OMT-NA-TEXT-ZF-LG', //OpenMapTiles, North America, Text only, Zoom filtered, Layer group
    format: 'image/png8',
    transparent: true,
    version: '1.1.0',
    crs: L.CRS.EPSG3005,
    tiled: true,
    buffer: 2,
    formatOptions: 'dpi:300;antialiasing:off',
    zIndex: REACT_APP_LEGEND_TYPE === 'achromatic' ? 100 : undefined,
};

export const tileset = {
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

export const vectorTileOptions = {
    rendererFactory: L.canvas.tile,
    interactive: false,
    tolerance: (zoom) => {
        if (zoom < 10) return 4;
        if (zoom < 14) return 2;
        return 1;
    },
    getFeatureId: (feature) => feature.properties.id,

    // Not included in vector style below:
    // - omt_place,               - omt_aeroway,
    // - omt_aerodrome_label,     - omt_building,
    // - omt_poi,                 - omt_mountain_peak,
    // - omt_transportation_name, - omt_water_name.
    vectorTileLayerStyles: {
        omt_park: vectorTileStyling.park,
        omt_landcover: vectorTileStyling.landcover,
        omt_water: vectorTileStyling.water,
        omt_boundary: vectorTileStyling.boundary,
        omt_landuse: vectorTileStyling.landuse,
        omt_waterway: vectorTileStyling.waterway,
        omt_aeroway: vectorTileStyling.aeroway,
        omt_transportation: vectorTileStyling.transportation,
    },
};