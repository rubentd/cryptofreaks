import React from 'react';
import { object } from 'prop-types';
import { CONTRACT_NAME } from 'config';
import MonsterItem from 'components/MonsterItem';

class Catalogue extends React.Component {
  constructor(){
    super();
    this.state = {
      loading: true,
      error: false,
      monsters: [],
    }
  }

  componentWillMount() {
    const contract = this.context.drizzle.contracts[CONTRACT_NAME];
    
    contract.methods.getAllMonsters().call().then((monsterIDs) => {      
      const promises = monsterIDs.map(id => contract.methods.getMonster(id).call());
      Promise.all(promises).then((monsters) => {
        this.setState({
          monsters,
          loading: false,
        });
      }).catch((error) => {
        this.setState({
          error,
          loading: false,
        });
      })

    });
  }

  render() {
    const {
      error,
      loading,
      monsters
    } = this.state;

    if (error) {
      return (
        <div className="error">Error loading monsters</div>
      )
    }

    return (
      <div>
        <h1>Catalogue</h1>
        <div className="monster-catalog">
          {
            loading ? (
              <div>Loading monsters...</div>
            ) : (
              <ul className="monster-list">
                {
                  monsters.map((monster) => (
                    <li key={monster.id}>
                      <MonsterItem {...monster} />
                    </li>
                  ))
                }
              </ul>
            )
          }
        </div>
      </div>
    )
  }
}

Catalogue.contextTypes = {
  drizzle: object,
};

export default Catalogue;
