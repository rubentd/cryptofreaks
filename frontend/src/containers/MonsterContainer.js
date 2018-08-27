import React from 'react';
import Monster from 'components/Monster';

class MonsterContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      monster: null,
    };
  }

  componentWillMount() {
    this.setState({
      monster: {
        id: 1,
        name: 'CryptoMon',
        owner: '0x07e77c8739614cba5bd62be99c7e8317c25383ff',
        genes: '0000000a5a',
        generation: 0,
      },
    });
  }

  render() {
    const {
      monster: {
        id,
        name,
        owner,
        genes,
        generation,
      },
    } = this.state;

    return (
      <div>
        <Monster
          id={id}
          name={name}
          owner={owner}
          genes={genes}
          generation={generation}
        />
      </div>
    )
  }
}

export default MonsterContainer;
