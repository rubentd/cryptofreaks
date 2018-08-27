import React from 'react';
import Web3 from 'web3';
import { object } from 'prop-types';
import { drizzleConnect } from 'drizzle-react';
import { CONTRACT_NAME, CONTRACT_ADDRESS } from 'config';
import { abi as cryptoFreaksABI } from 'contracts/CryptoFreaks.json';

class ContractSetup extends React.Component {
  componentWillMount() {
    const web3 = new Web3(window.web3.currentProvider);

    const cryptoFreaksContract = new web3.eth.Contract(
      cryptoFreaksABI,
      CONTRACT_ADDRESS,
    );

    this.context.drizzle.addContract({
      contractName: CONTRACT_NAME,
      web3Contract: cryptoFreaksContract,
    });
  }

  render() {
    const { cryptoFreaks } = this.props;
    const contract = this.context.drizzle.contracts[CONTRACT_NAME];

    if(cryptoFreaks !== undefined && contract !== undefined) {

      return this.props.children;
    }

    return (
      <div className="loading">
        <h1>Loading contract...</h1>
        <img src="https://www.cryptokitties.co/images/loader.gif" width="120" alt="loading" />
      </div>
    )
  }
}

ContractSetup.contextTypes = {
  drizzle: object,
};

const mapStateToProps = state => ({
  cryptoFreaks: state.contracts[CONTRACT_NAME],
});

export default drizzleConnect(ContractSetup, mapStateToProps);
