import legendAchromatic from './achromatic_legend.js';
import legend3005 from './3005_legend.js';

function selectLegend() {
    const legendName = process.env.REACT_APP_LEGEND_FILE;
    switch (legendName) {
        case '3005_legend':
            return legend3005;
        case 'achromatic_legend':
            return legendAchromatic;
        default:
            return legendAchromatic;
    }
}

const legend = selectLegend();

export default legend;