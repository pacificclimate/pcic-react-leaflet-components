# Contributing

## Development environment

This repo is based 
[CRA + Rollup Component Library -- Example](https://github.com/pacificclimate/cra-rollup-private-pkg-lib-example),
which in turn is based on the article
[Build a React Component Library](https://hinammehra.medium.com/build-a-private-react-component-library-cra-rollup-material-ui-github-package-registry-1e14da93e790).

In brief, it uses [Create React App](https://create-react-app.dev/) (CRA)
and [Rollup](https://rollupjs.org/guide/en/) to build a component library.
Rollup is configured to compile and bundle the library components 
into two standard module formats: CommonJS and ES Modules. The results are
stored in the `dist/` directory.

### Quickstart

1. Clone the repo.
2. Install the library and playground dependencies:
   ```
   npm run i-all
   ```
3. Run the demonstration app:
   ```
   npm run dev
   ```
   This compiles the library and runs the demonstration app, which will
   open at `localhost:3000`.

### Notes and caveats

1. The development framework copied from the article looks as if it should
   provide live updates of changes to the library components in the playground
   (demo) app. It does not. When you make changes to _library_ components, you
   must restart the demo (`npm run dev`) each time. 
   Changes to the _demo_ code are however updated live.

## Publishing and releasing

### "Publishing"

We put the term "publishing" in quotes because we don't publish to a
Node registry, we just push package contents to GitHub and `npm install`
the package directly from GitHub. (See [Installation](installation.md).)

Important:

* Only content under the `src` subtree
  is included in the package that is built.

* Content outside the `src` subtree is excluded from the package,
  but is allowed and can be extremely useful; for example, to
  create demonstrations of package content (see `playground` subtree).

* Each item exported by the package must be exported in the file
  `src/index.js`.

### Releasing a new version

When you modify this package (i.e., when you modify the contents of the
`src` subtree), follow this procedure:

1. Make sure you export any new or renamed components in `src/index.js`.

2. When all modifications have been completed, commit the code.

3. On the command line, `npm run build`.

   A successful build will output something like the following:

   ```text
   > pcic-react-leaflet-components@2.0.0 build
   > rollup -c
   
   
   src/index.js → dist/index.cjs.js, dist/index.esm.js...
   created dist/index.cjs.js, dist/index.esm.js in 3.7s
   ```

   A successful build on changed `src/` content will cause files in the
   `dist/` subtree to be added or modified.

4. Commit the changes in `dist/` to the repo.
5. Increment `version` in `package.json`.
6. Summarize the changes from the last version in `NEWS.md`.
7. Commit these changes, then tag the release, and push all to GitHub,
   including tag:

   ```bash
   git add package.json NEWS.md
   git commit -m "Bump to version x.x.x"
   git tag -a -m "x.x.x" x.x.x
   git push --follow-tags
   ```
