import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { MapContainer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.vectorgrid';
import L from 'leaflet';
import 'proj4';
import 'proj4leaflet';
import { projCRSOptions } from '../../utils/crs';


const VectorGridLayer = ({ tilesUrl, vectorTileStyling }) => {
    const map = useMap();

    useEffect(() => {
        const vectorTileOptions = {
            rendererFactory: L.svg.tile,
            interactive: true,
            getFeatureId: (feature) => feature.properties.id,
            vectorTileLayerStyles: {

                omt_landcover: vectorTileStyling.landcover,
                omt_landuse: vectorTileStyling.landuse,
                omt_park: vectorTileStyling.park,
                omt_boundary: vectorTileStyling.boundary,
                omt_water: vectorTileStyling.water,
                omt_mountain_peak: [], //vectorTileStyling.mountain_peak,

                omt_place: [], //vectorTileStyling.place,
                omt_transportation: vectorTileStyling.transportation,
                omt_transportation_name: [], //vectorTileStyling.transportation_name,
                omt_water: vectorTileStyling.water,
                omt_water_name: [], //vectorTileStyling.water_name,
                omt_waterway: [], //vectorTileStyling.waterway,
                omt_aeroway: [], //vectorTileStyling.aeroway,
                omt_aerodrome_label: [], //vectorTileStyling.aerodrome_label,
                omt_building: [], //vectorTileStyling.building,
                omt_poi: [], //vectorTileStyling.poi,
                // omt_housenumber: [], //vectorTileStyling.housenumber,
            }
        };

        try {
            const vectorGrid = L.vectorGrid.protobuf(tilesUrl, vectorTileOptions)
                .on('click', function (e) {
                    console.log('Clicked feature properties:', e.layer);
                    L.DomEvent.stopPropagation(e);
                    L.DomEvent.preventDefault(e);
                })
                .addTo(map);

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
    children: PropTypes.node,
};

export default GenericVectorBaseMap;
