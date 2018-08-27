import React from 'react';
import { object } from 'prop-types';
import { CONTRACT_NAME } from 'config';

class Dashboard extends React.Component {
  componentWillMount() {
    const contract = this.context.drizzle.contracts[CONTRACT_NAME];
    const currentUser = window.web3.eth.defaultAccount;
    
    contract.methods.getMonstersOfOwner(currentUser).call().then((monsters) => {
      
      console.log(monsters);

    });
  }

  render() {
    return (
      <div>
        <h1>My monsters</h1>
        <p>
          
        </p>
      </div>
    )
  }
}

Dashboard.contextTypes = {
  drizzle: object,
};

export default Dashboard;
