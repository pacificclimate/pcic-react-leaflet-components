import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import L from 'leaflet';
import 'proj4';
import 'proj4leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.vectorgrid';
import { MapContainer, useMap } from 'react-leaflet';
import axios from 'axios';
import { projCRSOptions } from '../../utils/crs';

function VectorTileLayer({ url, styleUrl, attribution }) {
    const map = useMap();

    useEffect(() => {
        axios.get(styleUrl)
            .then(response => {
                const style = response.data;
                const vectorGridLayer = L.vectorGrid.protobuf(url, {
                    attribution,
                    interactive: true,
                    vectorTileLayerStyles: style.layers.reduce((acc, layer) => {
                        acc[layer.id] = layer.paint;
                        return acc;
                    }, {}),
                }).addTo(map);

                return () => {
                    map.removeLayer(vectorGridLayer);
                };
            })
            .catch(error => console.error('Error fetching style:', error));
    }, [map, url, styleUrl, attribution]);

    return null;
};

function GenericVectorBaseMap({
    url,
    styleUrl,
    center,
    zoom,
    projection,
    tileMatrix,
    attribution,
    children,
    ...rest
}) {
    const mapRef = useRef();

    const crs = new L.Proj.CRS(
        projection.code,
        projection.proj4def,
        { ...projCRSOptions(tileMatrix), ...projection.options },
    );

    return (
        <MapContainer
            crs={crs}
            center={center}
            zoom={zoom}
            ref={mapRef}
            {...rest}
        >
            <VectorTileLayer url={url} styleUrl={styleUrl} attribution={attribution} />
            {children}
        </MapContainer>
    );
}

GenericVectorBaseMap.propTypes = {
    url: PropTypes.string.isRequired,
    styleUrl: PropTypes.string.isRequired,
    center: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired,
    }).isRequired,
    zoom: PropTypes.number.isRequired,
    projection: PropTypes.shape({
        code: PropTypes.string.isRequired,
        proj4def: PropTypes.string.isRequired,
        options: PropTypes.object,
    }).isRequired,
    tileMatrix: PropTypes.shape({
        metersPerUnit: PropTypes.number.isRequired,
        tileMatrixMinX: PropTypes.number.isRequired,
        tileMatrixMaxX: PropTypes.number.isRequired,
        tileWidth: PropTypes.number.isRequired,
        tileMatrixMinY: PropTypes.number.isRequired,
        tileMatrixMaxY: PropTypes.number.isRequired,
        tileMatrixMaxY: PropTypes.number.isRequired,
        numResolutions: PropTypes.number.isRequired,
    }).isRequired,
    attribution: PropTypes.string,
    children: PropTypes.node,
};

export default GenericVectorBaseMap;
