import React from 'react';
import { object } from 'prop-types';
import { Link } from 'react-router-dom';
import { CONTRACT_NAME } from 'config';
import MonsterItem from 'components/MonsterItem';

class Dashboard extends React.Component {
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
    const currentUser = window.web3.eth.defaultAccount;
    
    contract.methods.getMonstersOfOwner(currentUser).call().then((monsterIDs) => {      
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
        <h1>My monsters</h1>
        <div className="monster-catalog">
          {
            loading ? (
              <div>Loading monsters...</div>
            ) : monsters.length > 0 ? (
              <ul className="monster-list">
                {
                  monsters.map((monster) => (
                    <li key={monster.id}>
                      <Link to={`monster/${monster.id}`}>
                        <MonsterItem {...monster} />
                      </Link>
                    </li>
                  ))
                }
              </ul>
            ) : (
              <div className="info">
                <h4>
                  You don't have any monsters yet.
                </h4>
                <p>
                  Go to the <Link to="/catalogue">catalogue</Link> and browse some horrible things.
                </p>
              </div>
            )
          }
        </div>
      </div>
    )
  }
}

Dashboard.contextTypes = {
  drizzle: object,
};

export default Dashboard;
