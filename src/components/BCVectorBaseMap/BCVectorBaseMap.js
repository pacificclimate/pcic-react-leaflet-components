import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import GenericVectorBaseMap from '../GenericVectorBaseMap';

export default class BCVectorBaseMap extends PureComponent {
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
        url: process.env.REACT_APP_BC_VECTOR_BASE_MAP_TILES_URL,
        styleUrl: process.env.REACT_APP_BC_VECTOR_BASE_MAP_STYLE_URL,
        projection: {
            code: 'EPSG:3005',
            proj4def: '+proj=aea +lat_1=50 +lat_2=58.5 +lat_0=45 +lon_0=-126 +x_0=1000000 +y_0=0 +ellps=GRS80 +datum=NAD83 +units=m +no_defs',
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
            lat: 55.0,
            lng: -125,
        },
        zoom: 6,
    };

    render() {
        const { children, ...rest } = this.props;
        return (
            <GenericVectorBaseMap
                url={BCVectorBaseMap.tileset.url}
                styleUrl={BCVectorBaseMap.tileset.styleUrl}
                center={BCVectorBaseMap.initialViewport.center}
                zoom={BCVectorBaseMap.initialViewport.zoom}
                projection={BCVectorBaseMap.tileset.projection}
                tileMatrix={BCVectorBaseMap.tileset.tileMatrix}
                attribution={BCVectorBaseMap.tileset.attribution}
                {...rest}
            >
                {children}
            </GenericVectorBaseMap>
        );
    }
}
