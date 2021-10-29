# CRA + Rollup Component Library -- Example

This repo contains a small but complete example of a locally-developed 
library of `npm`-installable React components. It is intended to serve 
as a guide or skeleton for developing more featureful libraries.

## Usage

### Installation

The package is installed directly from GitHub as follows:

```
npm install --save-dev git+https://git@github.com/pacificclimate/cra-rollup-private-pkg-lib-example.git#<tag>
```

This will place a line in your `package.json` as follows:

```json
{
  "dependencies": {
    "cra-rollup-private-pkg-lib-example": "git+https://git@github.    com/pacificclimate/cra-rollup-private-pkg-lib-example.git#<tag>"
  }
}
```

We might consider publishing these packages to the standard `npm` 
repository, but that is a somewhat onerous undertaking, and at the 
moment we prefer to keep things simple and install direct from GitHub.

It is also now possible to publish packages (including `npm` packages) to
GitHub, providing an alternative to repositories such as `npm`. This is 
also worth looking into.

### Using components from the package

In your code, import and use a component as follows

```
import React from 'react';
import { HelloWorld } from 'cra-rollup-private-pkg-lib-example';

const App = ()  => {

  return (
    <HelloWorld />
  );
}

export default App;
```

### Creating a new library based on this one

Two options: 
- [Make a mirror copy of this repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/duplicating-a-repository)
- [Fork this repository](https://docs.github.com/en/get-started/quickstart/fork-a-repo)

## Motivation

The motivation for component libraries and packages does not need 
repeating here.

The motivation for our choice of framework(s) in which to do it bears 
some explanation.

### Frameworks

Since our present goal is to build libraries of React components, we'd 
like to continue using the widely-adopted and convenient 
[Create React App](https://create-react-app.dev/) (CRA) tool.

PCIC already has some React component packages built around CRA. 
These are built with
[`create-react-library`](https://github.com/transitive-bullshit/create-react-library), 
which is somewhat difficult to configure and use, and, worse, is no 
longer being maintained. 

We searched for alternatives, and found the article
[Build a React Component Library](https://hinammehra.medium.com/build-a-private-react-component-library-cra-rollup-material-ui-github-package-registry-1e14da93e790), 
which combines CRA and 
[Rollup](https://rollupjs.org/guide/en/) 
in a simple way to accomplish our goal.

More broadly, we discovered that Rollup has become the de-facto 
standard module bundler for JavaScript libraries, just as WebPack 
has become the bundler of choice for JS web apps. From its overview:

> Rollup is a module bundler for JavaScript which compiles small pieces 
> of code into something larger and more complex, such as a library or 
> application. It uses the new standardized format for code modules 
> included in the ES6 revision of JavaScript, instead of previous 
> idiosyncratic solutions such as CommonJS and AMD. ES modules let you 
> freely and seamlessly combine the most useful individual functions 
> from your favorite libraries. This will eventually be possible 
> natively everywhere, but Rollup lets you do it today.

Moreover, Rollup appears to be both flexible and easy to configure and 
use. Experience using it to build this repo was very positive: Rollup 
itself directly suggested how to correct problems in its configuration. 
The solutions took a only moments to apply, and worked first time.

### Why this repo

The [article](https://hinammehra.medium.com/build-a-private-react-component-library-cra-rollup-material-ui-github-package-registry-1e14da93e790) 
on which this repo is based is out of date, and it has content for 
developing Material UI components in particular, which we are not 
interested in. Hence this repo, which is both more up to date and simpler.

The Rollup configuration had to be tweaked to account for changes in
Rollup since the writing of that article. Specifically, the 
following two Rollup plugins  had to be added and used:
`@rollup/plugin-node-resolve`, `@rollup/plugin-commonjs`. 
