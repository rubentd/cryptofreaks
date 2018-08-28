import React from 'react';
import { bool, string } from 'prop-types';
import MonsterImage from 'components/MonsterImage';
import generateName from 'util/generateName';
import '@fortawesome/fontawesome-free/js/all';

class MonsterItem extends React.Component {
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
    } = this.props;

    return (
      <div className="monster-item">
        <MonsterImage genes={genes} small/>
        
        {
          forSale && (
            <div className="monster-sale-info">
              <div>
                <i className="fa fa-tag"></i>&nbsp;
                { window.web3.fromWei(parseInt(price, 10)) } ETH
              </div>
            </div>
          )
        }
        
        <div className="monster-info">
          <div className="monster-id">
            ID: { id } Gen: { generation }
          </div>
          <div className="monster-name">
            { generateName(genes) }
          </div>
        </div>
      </div>
    );
  }
}

export default MonsterItem;
