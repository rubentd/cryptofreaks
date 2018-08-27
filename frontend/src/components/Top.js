import React from 'react';
import {
  legsTypes,
} from 'util/constants';

class Legs extends React.Component {
  render () {
    const { type, color } = this.props;

    return (
      <div className="monster-part monster-body">
        {
          type === legsTypes.DEVIL ? (
        
          ) : type === legsTypes.ANTENNAS ? (

          ) : type === legsTypes.CAT ? (

          ) : type === legsTypes.HORN ? (
            
          ) : null
        }
      </div>
    )
  }
}

export default Arm;
