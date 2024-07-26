import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { MapContainer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.vectorgrid';
import L from 'leaflet';
import 'proj4';
import 'proj4leaflet';
import { projCRSOptions } from '../../utils/crs';

const LabelsLayer = ({ wmsUrl }) => {
    const map = useMap();

    useEffect(() => {
        const wmsLayer = L.tileLayer.wms(wmsUrl, {
            layers: 'OMT_NA_LG_TEXT',
            styles: 'OMT_TEXT_ZOOM_FILTER',
            format: 'image/png',
            transparent: true,
            version: '1.1.0',
            crs: L.CRS.EPSG3005
        }).addTo(map);

        return () => {
            map.removeLayer(wmsLayer);
        };
    }, [map]);

    return null;
};

const BUFFER_SIZE = 512;
const VectorGridLayer = ({ tilesUrl, vectorTileStyling }) => {
    const map = useMap();

    useEffect(() => {
        const vectorTileOptions = {
            rendererFactory: L.canvas.tile,
            interactive: true,
            buffer: BUFFER_SIZE,
            getFeatureId: (feature) => feature.properties.id,
            /* Not included in vector style below:
              - omt_place,
              - omt_aeroway,
              - omt_aerodrome_label,
              - omt_building,
              - omt_poi,
              - omt_mountain_peak,
              - omt_transportation_name,
              - omt_water_name.
            */
            vectorTileLayerStyles: {
                omt_landcover: vectorTileStyling.landcover,
                omt_landuse: vectorTileStyling.landuse,
                omt_park: vectorTileStyling.park,
                omt_boundary: vectorTileStyling.boundary,
                omt_water: vectorTileStyling.water,
                omt_transportation: vectorTileStyling.transportation,
                omt_waterway: vectorTileStyling.waterway,


            }
        };

        try {
            const vectorGrid = L.vectorGrid.protobuf(tilesUrl, vectorTileOptions).addTo(map);

            return () => {
                map.removeLayer(vectorGrid);
            };
        } catch (error) {
            console.error('Error setting up vector grid:', error);
        }
    }, [tilesUrl, map]);

    return null;
};

VectorGridLayer.propTypes = {
    tilesUrl: PropTypes.string.isRequired,
};

const GenericVectorBaseMap = ({
    tileset: { url, projection, tileMatrix },
    center,
    zoom,
    mapRef,
    vectorTileStyling,
    wmsUrl,
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
            crs={crs}
            minZoom={0}
            maxZoom={tileMatrix.numResolutions}
            center={center}
            zoom={zoom}
            ref={mapRef}
            {...rest}
        >
            <VectorGridLayer tilesUrl={url} vectorTileStyling={vectorTileStyling} />
            <LabelsLayer wmsUrl={wmsUrl} />
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
    vectorTileStyling: PropTypes.object.isRequired,
    wmsUrl: PropTypes.string.isRequired,
    children: PropTypes.node,
};

export default GenericVectorBaseMap;