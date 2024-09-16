import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { MapContainer, useMap, WMSTileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.vectorgrid';
import L from 'leaflet';
import 'proj4';
import 'proj4leaflet';
import { projCRSOptions } from '../../utils/crs';
import VectorGridLayer from './VectorGridLayer';

const GenericVectorBaseMap = ({
    tileset: { url, projection, tileMatrix },
    center,
    zoom,
    mapRef,
    vectorTileOptions,
    wmsUrl,
    wmsLayerOptions,
    children,
    ...rest
}) => {
    const crs = new L.Proj.CRS(
        projection.code,
        projection.proj4def,
        { ...projCRSOptions(tileMatrix), ...projection.options }
    );

    return (
        <MapContainer
            style={{ backgroundColor: '#EEEEEE' }}
            crs={crs}
            minZoom={0}
            maxZoom={tileMatrix.numResolutions}
            center={center}
            zoom={zoom}
            ref={mapRef}
            {...rest}
        >
            <VectorGridLayer
                tilesUrl={url}
                vectorTileOptions={vectorTileOptions}
                {...rest}
            />
            <WMSTileLayer
                url={wmsUrl}
                {...wmsLayerOptions}
            />
            {children}
        </MapContainer>
    );
};

GenericVectorBaseMap.propTypes = {
    tileset: PropTypes.shape({
        url: PropTypes.string.isRequired,
        projection: PropTypes.shape({
            code: PropTypes.string.isRequired,
            proj4def: PropTypes.string.isRequired,
            options: PropTypes.object,
        }).isRequired,
        tileMatrix: PropTypes.object.isRequired,
    }).isRequired,
    center: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired,
    }).isRequired,
    zoom: PropTypes.number.isRequired,
    mapRef: PropTypes.func,
    vectorTileOptions: PropTypes.object.isRequired,
    wmsUrl: PropTypes.string.isRequired,
    wmsLayerOptions: PropTypes.shape({
        layers: PropTypes.string,
        format: PropTypes.string,
        transparent: PropTypes.bool,
        version: PropTypes.string,
        crs: PropTypes.instanceOf(L.CRS)
    }).isRequired,
    children: PropTypes.node,
};

export default GenericVectorBaseMap;