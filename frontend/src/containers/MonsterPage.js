import React from 'react';
import { bool, string, object } from 'prop-types';
import MonsterImage from 'components/MonsterImage';
import generateName from 'util/generateName';
import '@fortawesome/fontawesome-free/js/all';
import { CONTRACT_NAME } from 'config';

class MonsterPage extends React.Component {
  static propTypes = {
    id: string.isRequired,
    owner: string.isRequired,
    genes: string.isRequired,
    generation: string.isRequired,
    forSale: bool,
    price: string.isRequired,
  };

  constructor(){
    super();
    this.state = {
      error: false,
      txInProgress: false,
      tx: '',
    };
  }

  buyMonster = () => {
    const { id, price } = this.props;
    const contract = this.context.drizzle.contracts[CONTRACT_NAME];
    const currentUser = window.web3.eth.defaultAccount; 

    contract.methods.buyMonster(id).send({ 
      from: currentUser,
      value: price,
    }).then((result) => {
      this.setState({
        txInProgress: true,
        txHash: result.transactionHash,
      });
    }).catch(() => {
      this.setState({
        error: true,
        txInProgress: false,
      });
    });
  }

  render() {
    const {
      id,
      genes,
      generation,
      forSale,
      price,
      owner,
    } = this.props;
    const { txInProgress, txHash } = this.state;

    const isMine = owner.toLowerCase() === window.web3.eth.defaultAccount.toLowerCase();

    return (
      <div className="monster-page">
        {
          forSale && (
            <div className="monster-sale-info">
              <div>
                For Sale &nbsp;
                <i className="fa fa-tag"></i>&nbsp;
                { window.web3.fromWei(parseInt(price, 10)) } ETH
              </div>
            </div>
          )
        }

        {
          !txInProgress && (
            <ul className="monster-options">
              {
                isMine && !forSale && (
                  <li>
                    <button>
                      Sell &nbsp;<i className="fa fa-tag"></i>
                    </button>
                  </li>
                )
              }
              {
                isMine && forSale && (
                  <li>
                    <button>
                      Stop Sale &nbsp;<i className="fa fa-tag"></i>
                    </button>
                  </li>
                )
              }
              {
                isMine && (
                  <li>
                    <button>
                      Gift &nbsp;<i className="fa fa-gift"></i>
                    </button>
                  </li>
                )
              }
              {
                !isMine && forSale && (
                  <li>
                    <button onClick={this.buyMonster}>
                      Buy ({ window.web3.fromWei(parseInt(price, 10)) } ETH) &nbsp;<i className="fab fa-ethereum"></i>
                    </button>
                  </li>
                )
              }
            </ul>
          )
        }

        <MonsterImage genes={genes}/>
        <div className="monster-info">
          <div className="monster-name">
            { generateName(genes) }
          </div>
          <div className="monster-id">
            ID: { id } Gen: { generation }
          </div>
          <div className="monster-owner">
            Owner: { owner.toLowerCase() }
            { isMine && <span> (You)</span> }
          </div>
        </div>

        {
          txInProgress && (
            <div className="info" style={{ position: 'absolute', top: '50%' }}>
              You have a transaction in progress for this monster, please come back later.
              You can check its progress here: <a href={`https://ropsten.etherscan.io/search?q=${txHash}`} target="_blank">{ txHash }</a>
            </div>
          )
        }
      </div>
    );
  }
}

MonsterPage.contextTypes = {
  drizzle: object,
};

export default MonsterPage;
