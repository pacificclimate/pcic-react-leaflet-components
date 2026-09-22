# News / Release Notes

## 4.0.0

_2026-09-22_

- [Vite conversion](https://github.com/pacificclimate/pcic-react-leaflet-components/pull/32)
- [Source layout](https://github.com/pacificclimate/pcic-react-leaflet-components/pull/31)

Breaking changes:

- `baseMapTilesUrl` is now **required** on `BCBaseMap` and `YNWTBaseMap`.
  The fallbacks are gone: `BCBaseMap` no longer reads
  `REACT_APP_BC_BASE_MAP_TILES_URL`, and `YNWTBaseMap` no longer substitutes a
  placeholder URL. Omitting the prop does not fail gracefully: Leaflet throws
  `TypeError: Cannot read properties of undefined (reading 'replace')` and the
  map's React tree unmounts. The only warning is a development-only PropTypes
  message.
- The `mapRef` prop of `GenericBaseMap`, `BCBaseMap` and `YNWTBaseMap` is
  **removed**. It has not worked since 3.0.0. To reach the Leaflet map, call React Leaflet's `useMap()` in a child
  component (see
  [Package contents](docs/package-contents.md#reaching-the-leaflet-map)).

Other changes:

- The exported components, `main`/`module` bundle paths and peer dependencies
  are unchanged, and so is the `control-static.css` import path.
- `react-scripts`, `web-vitals` and Testing Library are no longer runtime
  `dependencies`, so consumers no longer install them transitively.
- Development only: the build moves from Rollup and Babel to Vite, tests move
  from `react-scripts test` to Vitest, the repo is formatted with Prettier,
  the playground runs on Vite, and CI checks formatting, tests and that the
  committed `dist/` matches `src/`. See [Contributing](docs/contributing.md).

## 3.4.0

_2026-09-17_

- [Add EEZ Layer](https://github.com/pacificclimate/pcic-react-leaflet-components/pull/30)

## 3.3.0

_2026-08-26_

- [Node 24 npm 12 security policy](https://github.com/pacificclimate/pcic-react-leaflet-components/pull/28)

## 3.2.0

_2025-01-14_

- [Allow tile url to be passed as a prop](https://github.com/pacificclimate/pcic-react-leaflet-components/pull/25)

## 3.0.1

_2022-Jul-15_

- Upgrade StaticControl to React 18, which does not complete the update;
  see [issue 13](https://github.com/pacificclimate/pcic-react-leaflet-components/issues/13).
  The optimism of release 3.0.0 was a little premature.

## 3.0.0

_2022-Jun-23_

- Upgrade to React 18, React Leaflet 4, etc. It was astoundingly easy.

## 2.0.1

_2021-Nov-10_

- Tighten React Leaflet dependencies

## 2.0.0

_2021-Nov-09_

- Upgrade to React Leaflet 3; upgrade CRA infrastructure; use Rollup

## 1.2.2

_2021-Aug-27_

- Fix `mapRef` prop of base map components.

## 1.2.1

_2021-Aug-26_

- Include component `BaseMap` in dist build

## 1.2.0

_2021-Aug-26_

- Modify component `BCBaseMap` for use with OSM Lite tileset
- Add component `BCBaseMapDeprecated`
- Add component `StaticControl`
- Modify environment variable usage
- Update documentation

## 1.1.0

_2021-Apr-14_

- Add component `YNWTBaseMap`

## 1.0.0

_2019-Jan-23_

- Initial release
- Exports component `BCBaseMap`
