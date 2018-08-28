import React from 'react';
import { bool, string, object } from 'prop-types';
import Modal from 'react-modal';
import MonsterImage from 'components/MonsterImage';
import generateName from 'util/generateName';
import '@fortawesome/fontawesome-free/js/all';
import { CONTRACT_NAME } from 'config';

Modal.setAppElement('#root');

const modalStyle = {
  content: {
    top: '50%',
    left: '50%',
    width: 350,
    height: 200,
    marginLeft: -175,
    marginTop: -100, 
  },
};

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
      showSellModal: false,
      showGiftModal: false,
    };
  }

  componentWillMount() {
    this.contract = this.context.drizzle.contracts[CONTRACT_NAME];
  }

  buyMonster = () => {
    const { id, price } = this.props;
    const currentUser = window.web3.eth.defaultAccount; 

    this.contract.methods.buyMonster(id).send({ 
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

  sellMonster = () => {
    const { id } = this.props;
    const currentUser = window.web3.eth.defaultAccount;
    const price = window.web3.toWei(parseFloat(this.priceInput.value));

    this.contract.methods.putOnSale(id, price).send({ 
      from: currentUser,
    }).then((result) => {
      this.setState({
        txInProgress: true,
        txHash: result.transactionHash,
        showSellModal: false,
      });
    }).catch(() => {
      this.setState({
        error: true,
        txInProgress: false,
        showSellModal: false,
      });
    });
  }

  giftMonster = () => {
    const { id } = this.props;
    const currentUser = window.web3.eth.defaultAccount;
    const recipient = this.addressInput.value;

    if (!window.web3.isAddress(recipient)) {
      alert('Please specify a valid address');
      return;
    }

    this.contract.methods.giftMonster(id, recipient).send({ 
      from: currentUser,
    }).then((result) => {
      this.setState({
        txInProgress: true,
        txHash: result.transactionHash,
        showGiftModal: false,
      });
    }).catch(() => {
      this.setState({
        error: true,
        txInProgress: false,
        showGiftModal: false,
      });
    });
  }

  stopSellingMonster = () => {
    const { id } = this.props;
    const currentUser = window.web3.eth.defaultAccount; 

    this.contract.methods.removeFromSale(id).send({ 
      from: currentUser,
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
    const {
      txInProgress,
      txHash,
      showSellModal,
      showGiftModal,
    } = this.state;

    const isMine = owner.toLowerCase() === window.web3.eth.defaultAccount.toLowerCase();

    return (
      <div className="monster-page">
        {
          forSale && !txInProgress && (
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
                    <button onClick={() => {
                      this.setState({
                        showSellModal: true,
                      });
                    }}>
                      Sell &nbsp;<i className="fa fa-tag"></i>
                    </button>
                  </li>
                )
              }
              {
                isMine && forSale && (
                  <li>
                    <button onClick={this.stopSellingMonster}>
                      Stop Sale &nbsp;<i className="fa fa-tag"></i>
                    </button>
                  </li>
                )
              }
              {
                isMine && (
                  <li>
                    <button onClick={() => {
                      this.setState({
                        showGiftModal: true,
                      });
                    }}>
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

        <Modal isOpen={showSellModal} style={modalStyle}>
          <label>Price in ETH:</label>
          <input ref={(e) => { this.priceInput = e;}} type="number" defaultValue={0.01} min={0.00001} />
          <p className="modal-options">
            <button className="button-clear" onClick={() => { this.setState({ showSellModal: false });}}>
              Close
            </button>
            <button onClick={this.sellMonster}>Sell</button>
          </p>
        </Modal>

        <Modal isOpen={showGiftModal} style={modalStyle}>
          <label>Recipient address:</label>
          <input ref={(e) => { this.addressInput = e;}} type="text" />
          <p className="modal-options">
            <button className="button-clear" onClick={() => { this.setState({ showGiftModal: false });}}>
              Close
            </button>
            <button onClick={this.giftMonster}>Gift Monster</button>
          </p>
        </Modal>

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
              You can check its progress here: <a href={`https://rinkeby.etherscan.io/search?q=${txHash}`} target="_blank">{ txHash }</a>
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
