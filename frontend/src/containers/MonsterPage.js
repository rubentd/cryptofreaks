import React from 'react';
import { bool, string } from 'prop-types';
import MonsterImage from 'components/MonsterImage';
import generateName from 'util/generateName';
import '@fortawesome/fontawesome-free/js/all';

class MonsterPage extends React.Component {
  static propTypes = {
    id: string.isRequired,
    owner: string.isRequired,
    genes: string.isRequired,
    generation: string.isRequired,
    forSale: bool,
    price: string.isRequired,
  };

  render() {
    const {
      id,
      genes,
      generation,
      forSale,
      price,
      owner,
    } = this.props;

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
            !isMine && (
              <li>
                <button>
                  Buy ({ window.web3.fromWei(parseInt(price, 10)) } ETH) &nbsp;<i className="fab fa-ethereum"></i>
                </button>
              </li>
            )
          }
        </ul>

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
      </div>
    );
  }
}

export default MonsterPage;
