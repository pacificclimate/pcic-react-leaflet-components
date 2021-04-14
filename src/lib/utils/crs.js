import { isUndefined, map, range } from 'lodash/fp';
import L from 'leaflet';


// From OGC Standard
export const pixelWidth = 0.00028;


// Compute resolutions from CRS info and tile matrix parameters.
//
// The user must supply one of `scaleDenominator` or
// `metersPerUnit`, `tileMatrixMinX`, `tileMatrixMaxX`, and `tileWidth` or
// `metersPerUnit`, `tileMatrixMinY`, `tileMatrixMaxY`, and `tileHeight`.
// The required options for this are `resolutions` and `origin`.
//
// Once we have the value for the zoom-0 `scaleDenominator`, it is
// straightforward to compute `resolutions`. If not directly available, the
// value can be derived, in our particular case from fundamental information
// about the tileset, namely its extents or bounds. (For details, see
// https://github.com/pacificclimate/pcic-react-leaflet-components/issues/1#issuecomment-818194664)
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
//
// See comments to `resolutions` re. resolution computations.
//
// The values for `origin` and `bounds` are also derived from the extents. (See
// https://github.com/pacificclimate/pcic-react-leaflet-components/issues/1#issuecomment-818231259)
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