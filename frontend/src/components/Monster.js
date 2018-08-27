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

    console.log(genes);

    const headType = parseInt(genes.charAt(0), 10);
    const bodyType = parseInt(genes.charAt(1), 10);
    const eyesType = parseInt(genes.charAt(2), 10);
    const mouthType = parseInt(genes.charAt(3), 10);
    const leftArmType = parseInt(genes.charAt(4), 10);
    const rightArmType = parseInt(genes.charAt(5), 10);
    const legsType = parseInt(genes.charAt(6), 10);
    const topType = parseInt(genes.charAt(7), 10);
    const colorIndex = parseInt(genes.charAt(8), 10);
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