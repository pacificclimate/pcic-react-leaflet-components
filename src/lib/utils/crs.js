import { isUndefined, map, range } from 'lodash/fp';
import L from 'leaflet';


// From OGC Standard
export const pixelWidth = 0.00028;


// Compute resolutions from CRS info and tile matrix parameters.
//
// The user must supply one of `scaleDenominator` or
// `metersPerUnit`, `tileMatrixMinX`, `tileMatrixMaxX`, and `tileWidth` or
// `metersPerUnit`, `tileMatrixMinY`, `tileMatrixMaxY`, and `tileHeight`.
export function resolutions(
  {
    metersPerUnit,
    scaleDenominator,
    tileMatrixMinX,
    tileMatrixMaxX,
    tileWidth,
    tileMatrixMinY,
    tileMatrixMaxY,
    tileHeight,
    numResolutions,
  },
) {
  let maxResolution;
  if (!isUndefined(scaleDenominator)) {
    maxResolution = scaleDenominator * pixelWidth;
  } else {
    const pixelSpan = !isUndefined(tileMatrixMinX) ?
      (tileMatrixMaxX - tileMatrixMinX) / tileWidth :
      (tileMatrixMaxY - tileMatrixMinY) / tileHeight
    ;
    maxResolution = pixelSpan * metersPerUnit;
  }

  return map(i => maxResolution / Math.pow(2, i))(range(0, numResolutions));
}


// Compute options for `L.Proj.CRS` from CRS info and tile matrix parameters.
export function projCRSOptions(tileMatrixParams) {
  const {tileMatrixMinX, tileMatrixMinY, tileMatrixMaxX, tileMatrixMaxY} =
    tileMatrixParams;
  return {
    bounds: L.Bounds(
      L.Point(tileMatrixMinX, tileMatrixMinY),
      L.Point(tileMatrixMaxX, tileMatrixMaxY),
    ),
    origin: [tileMatrixMinX, tileMatrixMaxY],
    resolutions: resolutions(tileMatrixParams),
  };
}