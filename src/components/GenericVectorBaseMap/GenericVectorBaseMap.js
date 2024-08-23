import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { MapContainer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.vectorgrid';
import L from 'leaflet';
import 'proj4';
import 'proj4leaflet';
import { projCRSOptions } from '../../utils/crs';

const LabelsLayer = ({ wmsUrl, wmsOptions, crs, center, zoom }) => {
    const map = useMap();

    useEffect(() => {
        let imageOverlay = null;

        const updateImageOverlay = () => {
            const bounds = map.getBounds();
            const size = map.getSize();

            // Project the bounds to EPSG:3005
            const sw = crs.project(bounds.getSouthWest());
            const ne = crs.project(bounds.getNorthEast());

            const bbox = [sw.x, sw.y, ne.x, ne.y].join(',');

            const params = new URLSearchParams({
                service: 'WMS',
                request: 'GetMap',
                version: wmsOptions.version,
                layers: wmsOptions.layers,
                styles: '',
                format: wmsOptions.format,
                transparent: wmsOptions.transparent,
                width: size.x,
                height: size.y,
                srs: 'EPSG:3005',
                bbox: bbox,
            });

            const url = `${wmsUrl}?${params.toString()}`;
            const projectedBounds = L.bounds([sw.x, sw.y], [ne.x, ne.y]);

            if (imageOverlay) {
                imageOverlay.setUrl(url);
                imageOverlay.setBounds(projectedBounds);
            } else {
                imageOverlay = L.Proj.imageOverlay(url, projectedBounds, {
                    opacity: 1,
                    interactive: false,
                    crs: crs
                }).addTo(map);
            }
        };

        updateImageOverlay();

        return () => {
            if (imageOverlay) {
                map.removeLayer(imageOverlay);
            }
        };
    }, [map, wmsUrl, wmsOptions, crs, center, zoom]);

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
            <LabelsLayer wmsUrl={wmsUrl} wmsOptions={wmsLayerOptions} crs={crs} center={center} zoom={zoom} {...rest} />
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