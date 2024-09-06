import React from 'react';
import PropTypes from 'prop-types';
import GenericVectorBaseMap from '../GenericVectorBaseMap';
import { wmsLayerOptions, tileset, vectorTileOptions } from './mapConfig'

const BCVectorBaseMap = React.memo(({ mapRef = () => null, children, ...rest }) => {
    return (
        <GenericVectorBaseMap
            tileset={tileset}
            vectorTileOptions={vectorTileOptions}
            wmsUrl={process.env.REACT_APP_LABELS_WMS_URL}
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
