import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';

const LabelsLayer = ({ wmsUrl, wmsOptions }) => {
    const map = useMap();

    useEffect(() => {
        const legendName = process.env.REACT_APP_LEGEND_TYPE;
        if (legendName == "achromatic") {
            wmsOptions = { ...wmsOptions, zIndex: 100 }; // Display labels above all other layers.
        }
        const wmsLayer = L.tileLayer.wms(wmsUrl, wmsOptions).addTo(map);
        return () => {
            map.removeLayer(wmsLayer);
        };
    }, [map]);

    return null;
};
export default LabelsLayer;