import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import GenericVectorBaseMap from '../GenericVectorBaseMap';
import vectorTileStyling from '../../styles/3005.js';
import L from 'leaflet';

export default class BCVectorBaseMap extends PureComponent {
    static propTypes = {
        center: PropTypes.shape({
            lat: PropTypes.number.isRequired,
            lng: PropTypes.number.isRequired,
        }).isRequired,
        zoom: PropTypes.number.isRequired,
        minZoom: PropTypes.number,
        maxZoom: PropTypes.number,
        mapRef: PropTypes.func,
    };

    static defaultProps = {
        mapRef: () => null,
    };

    static tileset = {
        url: process.env.REACT_APP_BC_VECTOR_BASE_MAP_TILES_URL,
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

    static initialViewport = {
        center: {
            lat: 55.0,
            lng: -125,
        },
        zoom: 6,
    };

    render() {
        const { children, ...rest } = this.props;
        const wmsLayerOptions = {
            layers: 'OMT-NA-TEXT-ZF-LG', //OpenMapTiles, North America, Text only, Zoom filtered, Layer group
            format: 'image/png',
            transparent: true,
            version: '1.1.0',
            crs: L.CRS.EPSG3005,
            tiled: true
        };
        return (
            <GenericVectorBaseMap
                tileset={BCVectorBaseMap.tileset}
                vectorTileStyling={vectorTileStyling}
                wmsUrl={process.env.REACT_APP_LABELS_WMS_URL}
                wmsLayerOptions={wmsLayerOptions}
                {...rest}
            >
                {children}
            </GenericVectorBaseMap>
        );
    }
}
