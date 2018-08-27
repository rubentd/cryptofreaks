import React from 'react';
import {
  eyeTypes,
} from 'util/constants';
import cuteEyes from 'img/parts/eyes/cute.png';
import meanEyes from 'img/parts/eyes/mean.png';
import deadEyes from 'img/parts/eyes/dead.png';
import happyEyes from 'img/parts/eyes/happy.png';
import mortyEyes from 'img/parts/eyes/morty.png';
import singleEye from 'img/parts/eyes/single.png';
import insectEyes from 'img/parts/eyes/insect.png';
import xEyes from 'img/parts/eyes/x.png';

class Eyes extends React.Component {
  render () {
    const { type } = this.props;


    return (
      <div className="monster-part monster-eyes">
        {
          type === eyeTypes.CUTE ? (
            <img src={cuteEyes} alt="eyes" />
          ) : type === eyeTypes.MEAN ? (
            <img src={meanEyes} alt="eyes" />
          ) : type === eyeTypes.DEAD ? (
            <img src={deadEyes} alt="eyes" />
          ) : type === eyeTypes.HAPPY ? (
            <img src={happyEyes} alt="eyes" />
          ) : type === eyeTypes.MORTY ? (
            <img src={mortyEyes} alt="eyes" />
          ) : type === eyeTypes.SINGLE ? (
            <img src={singleEye} alt="eyes" />
          ) : type === eyeTypes.INSECT ? (
            <img src={insectEyes} alt="eyes" />
          ) : type === eyeTypes.X ? (
            <img src={xEyes} alt="eyes" />
          ) : null
        }
      </div>
    )
  }
}

export default Eyes;
