import legendAchromatic from './legendAchromatic.js';
import legendColor from './legendColored.js';

function selectLegend() {
    const legendName = process.env.REACT_APP_LEGEND_TYPE;
    switch (legendName) {
        case 'colored':
            return legendColor;
        case 'achromatic':
            return legendAchromatic;
        default:
            return legendAchromatic;
    }
}

const legend = selectLegend();

export default legend;