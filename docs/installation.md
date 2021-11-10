# Installation and usage

## Dependencies

Package `pcic-react-leaflet-components` ver 2.0.0 and above has the following 
peer dependencies. 
Client applications will need to install these as dependencies (or, possibly,
peer dependencies).

```json
"leaflet": "^1.7.1",
"react": "^17.0.2",
"react-dom": "^17.0.2",
"@react-leaflet/core": "1.0.2",
"react-leaflet": "3.1.0"
```

IMPORTANT: Note the exact (and out of date) version specifications for
`@react-leaflet/core` and `react-leaflet`. This is a temporary (we sincerely
hope) expedient to solve a 
[known problem with React Leaflet](https://github.com/PaulLeCam/react-leaflet/issues/891); see, specifically,
[this comment](https://github.com/PaulLeCam/react-leaflet/issues/891#issuecomment-924374035).

## Installation

Install directly from GitHub:

```
npm install --save-dev git+https://git@github.com/pacificclimate/pcic-react-leaflet-components.git#<tag>
```

where `<tag>` is typically the version tag (e.g., `2.0.0`).

## Usage

Import and use a component as follows

```
import React from 'react';
import { BCBaseMap } from 'pcic-react-leaflet-components';

const App = ()  => {

  return (
    <BCBaseMap/>
  );
}

export default App;
```

