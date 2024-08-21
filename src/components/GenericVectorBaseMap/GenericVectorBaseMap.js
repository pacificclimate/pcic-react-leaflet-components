import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { MapContainer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.vectorgrid';
import L from 'leaflet';
import 'proj4';
import 'proj4leaflet';
import { projCRSOptions } from '../../utils/crs';

const LabelOverlay = ({ wmsUrl, wmsOptions, center, zoom, crs }) => {
    const map = useMap();

    useEffect(() => {
        const bounds = toLatLngBounds(center, zoom).toBBoxString();
        const labelUrl = `${wmsUrl}?SERVICE=WMS&VERSION=${wmsOptions.version}&REQUEST=GetMap&LAYERS=${wmsOptions.layers}&STYLES=&FORMAT=image/svg+xml&TRANSPARENT=${wmsOptions.transparent}&WIDTH=256&HEIGHT=256&BBOX=${bounds}&CRS=${wmsOptions.crs.code}`;

        const labelOverlay = L.imageOverlay(labelUrl, map.getBounds(), {

        }).addTo(map);

        return () => {
            map.removeLayer(labelOverlay);
        };
    }, [map, wmsUrl, wmsOptions, center, zoom, crs]);

    return null;
};


const VectorGridLayer = ({ tilesUrl, vectorTileStyling, zoom, center, crs, wmsUrl, wmsOptions }) => {

    const map = useMap();


    useEffect(() => {
        const vectorTileOptions = {
            rendererFactory: L.canvas.tile,
            interactive: false,
            tolerance: function (zoom) {
                if (zoom < 10) return 4;
                if (zoom < 14) return 2;
                return 1;
            },
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
                omt_park: vectorTileStyling.park,
                omt_landcover: vectorTileStyling.landcover,
                omt_water: vectorTileStyling.water,
                omt_boundary: vectorTileStyling.boundary,
                omt_landuse: vectorTileStyling.landuse,
                omt_waterway: vectorTileStyling.waterway,
                omt_aeroway: vectorTileStyling.aeroway,
                omt_transportation: vectorTileStyling.transportation,

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
    }, [map]);

    return null;
};

VectorGridLayer.propTypes = {
    tilesUrl: PropTypes.string.isRequired,
    vectorTileStyling: PropTypes.object.isRequired,
    zoom: PropTypes.number.isRequired,
    center: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired
    }).isRequired,
    crs: PropTypes.instanceOf(L.CRS).isRequired,
    wmsUrl: PropTypes.string.isRequired,
    wmsOptions: PropTypes.object.isRequired,
};

const GenericVectorBaseMap = ({
    tileset: { url, projection, tileMatrix },
    center,
    zoom,
    mapRef,
    vectorTileStyling,
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
            style={{ backgroundColor: '#EEEEEE' }} // alternative?:'#e7e5cf'
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
                vectorTileStyling={vectorTileStyling}
                zoom={zoom}
                center={center}
                crs={crs}
                wmsUrl={wmsUrl}
                wmsOptions={wmsLayerOptions}
                {...rest}
            />
            <LabelOverlay wmsUrl={wmsUrl} wmsOptions={wmsLayerOptions} center={center} zoom={zoom} crs={crs} />
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