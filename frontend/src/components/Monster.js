import React from 'react';
import { number, string } from 'prop-types';
import Head from 'components/Head';
import Body from 'components/Body';
import Legs from 'components/Legs';
import Arm from 'components/Arm';
import Eyes from 'components/Eyes';
import Mouth from 'components/Mouth';
import Top from 'components/Top';
import { COLORS } from 'util/constants';

class Monster extends React.Component {
  buildMonster = (genes) => {

    const headType = genes.charCodeAt(0) % 4;
    const bodyType = genes.charCodeAt(1) % 3;
    const eyesType = genes.charCodeAt(2) % 8;
    const mouthType = genes.charCodeAt(3) % 8;
    const leftArmType = genes.charCodeAt(4) % 5;
    const rightArmType = genes.charCodeAt(5) % 5;
    const legsType = genes.charCodeAt(6) % 3;
    const topType = genes.charCodeAt(7) % 5;
    const colorIndex = genes.charCodeAt(8) % 11;
    const color = COLORS[colorIndex];

    return (
      <div>
        <Head type={headType} color={color} />
        <Body type={bodyType} color={color} />
        <Eyes type={eyesType} />
        <Mouth type={mouthType} />
        <Arm type={leftArmType} color={color} left />
        <Arm type={rightArmType} color={color} right />
        <Legs type={legsType} color={color} />
        <Top type={topType} color={color} /> 
      </div>
    )
  }

  render () {
    const {
      id,
      name,
      owner,
      genes,
      generation,
    } = this.props;

    return (
      <div>
        <div className="monster-display">
          <div className="monster-wrap">
            { this.buildMonster(genes) }
          </div>
        </div>
        <h2>{ name }</h2>
        <p>ID: { id }</p>
        <p>Owner: { owner }</p>
        <p>Generation: { generation }</p>
      </div>
    );
  }
}

Monster.propTypes = {
  id: number.isRequired,
  name: string.isRequired,
  owner: string.isRequired,
  generation: number.isRequired,
  genes: string.isRequired,
};

export default Monster;