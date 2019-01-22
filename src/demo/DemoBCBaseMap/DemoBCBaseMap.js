import PropTypes from 'prop-types';
import React from 'react';
import { BCBaseMap } from '../../lib/index';
import './DemoBCBaseMap.css'


export default class DemoBCBaseMap extends React.Component {
  static propTypes = {
  };

  state = {
  };

  render() {
    return (
      <BCBaseMap
        viewport={BCBaseMap.initialViewport}
      />
    );
  }
}
