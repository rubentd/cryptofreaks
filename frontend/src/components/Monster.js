import React from 'react';
import {
  headTypes,
  bodyTypes,
} from 'util/constants';

class Monster extends React.Component {
  buildMonster = (genes) => {
    const color = genes.substr(7, 10);
    const headType = parseInt(genes.charAt(0));
    const headSize = parseInt(genes.charAt(1));
    const bodyType = parseInt(genes.charAt(2));
    const bodySize = parseInt(genes.charAt(3));
    return (
      <div>
        <p>{ this.buildHead(headType, headSize, color) }</p>
        <p>{ this.buildBody(bodyType, bodySize, color) }</p>
      </div>
    )
  }

  buildHead = (headType, headSize, color) => {
    return <span>{ headType }, { headSize }, { color }</span>;
  }

  buildBody = (bodyType, bodySize, color) => {
    return <span>{ bodyType }, { bodySize }, { color }</span>;
  }

  render () {
    const {
      id,
      name,
      owner,
      genes,
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
      </div>
    );
  }
}

export default Monster;