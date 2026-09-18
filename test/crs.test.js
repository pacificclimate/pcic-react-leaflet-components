import { describe, it, expect } from "vitest";
import { resolutions, projCRSOptions, pixelWidth } from "../src/utils/crs.js";

const bcTileMatrix = {
  metersPerUnit: 1,
  tileMatrixMinX: -20037508,
  tileMatrixMaxX: 20037508,
  tileWidth: 256,
  tileMatrixMinY: -20037508,
  tileMatrixMaxY: 20037508,
  tileHeight: 256,
  numResolutions: 14,
};

describe("resolutions", () => {
  it("halves from the zoom-0 resolution", () => {
    const rs = resolutions(bcTileMatrix);
    expect(rs).toHaveLength(14);
    expect(rs[0]).toBeCloseTo((2 * 20037508) / 256, 6);
    expect(rs[1]).toBeCloseTo(rs[0] / 2, 6);
    expect(rs[13]).toBeCloseTo(rs[0] / 2 ** 13, 9);
  });

  it("uses scaleDenominator when given", () => {
    const rs = resolutions({ scaleDenominator: 1000, numResolutions: 2 });
    expect(rs).toEqual([1000 * pixelWidth, (1000 * pixelWidth) / 2]);
  });

  it("falls back to the Y extent when X is absent", () => {
    const { tileMatrixMinX, tileMatrixMaxX, tileWidth, ...yOnly } =
      bcTileMatrix;
    expect(resolutions(yOnly)).toEqual(resolutions(bcTileMatrix));
  });
});

describe("projCRSOptions", () => {
  it("derives bounds, origin and resolutions from the extents", () => {
    const opts = projCRSOptions(bcTileMatrix);
    expect(opts.origin).toEqual([-20037508, 20037508]);
    expect(opts.bounds.min).toEqual({ x: -20037508, y: -20037508 });
    expect(opts.bounds.max).toEqual({ x: 20037508, y: 20037508 });
    expect(opts.resolutions).toEqual(resolutions(bcTileMatrix));
  });
});
